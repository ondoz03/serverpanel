#!/bin/bash

# ServerPanel Agent Installation Script
# https://serverpanel.id

set -e

# Parse arguments
TOKEN=""
ENDPOINT=""

while [ "$1" != "" ]; do
    case $1 in
        --token=*)
            TOKEN="${1#*=}"
            ;;
        --endpoint=*)
            ENDPOINT="${1#*=}"
            ;;
    esac
    shift
done

if [ -z "$TOKEN" ] || [ -z "$ENDPOINT" ]; then
    echo "Error: --token and --endpoint are required."
    exit 1
fi

echo "=========================================="
echo "Installing ServerPanel Agent..."
echo "=========================================="

# 1. Detect OS and Arch
OS=$(lsb_release -ds 2>/dev/null || cat /etc/os-release | grep PRETTY_NAME | cut -d= -f2 | tr -d '"' || echo "Ubuntu")
ARCH=$(uname -m)

echo "Detected OS: $OS"
echo "Detected Arch: $ARCH"

# 2. Install Node.js 24 LTS if missing
if ! command -v node &> /dev/null || [ $(node -v | cut -d. -f1 | tr -d 'v') -lt 20 ]; then
    echo "Node.js not found or version is outdated. Installing Node.js 24 LTS..."
    sudo apt-get update
    sudo apt-get install -y ca-certificates curl gnupg
    sudo mkdir -p /etc/apt/keyrings
    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg --yes
    echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_24.x nodistro main" | sudo tee /etc/apt/keyrings/nodesource.list
    sudo apt-get update
    sudo apt-get install -y nodejs build-essential
else
    echo "Node.js $(node -v) is already installed."
fi

# 3. Create non-root user and group
echo "Creating system isolation user..."
sudo groupadd --system serverpanel &>/dev/null || true
sudo useradd --system --gid serverpanel --shell /bin/false --no-create-home serverpanel &>/dev/null || true

# 4. Setup agent workspace
echo "Setting up workspace directories..."
sudo mkdir -p /opt/serverpanel-agent
sudo mkdir -p /etc/serverpanel-agent

# 5. Register to platform via HTTPS to get server_id
echo "Registering agent to platform..."
REG_RESPONSE=$(curl -s -X POST "$ENDPOINT/api/agent/register" \
  -H "Content-Type: application/json" \
  -d "{\"token\":\"$TOKEN\",\"hostname\":\"$(hostname)\",\"os\":\"$OS\",\"arch\":\"$ARCH\",\"agent_version\":\"1.0.0\"}")

if ! echo "$REG_RESPONSE" | grep -q "success"; then
    echo "Failed to register agent: $REG_RESPONSE"
    exit 1
fi

SERVER_ID=$(echo "$REG_RESPONSE" | grep -o '"server_id":"[^"]*' | grep -o '[^"]*$')

if [ -z "$SERVER_ID" ]; then
    echo "Error: Server registration returned invalid response. Server ID not found."
    exit 1
fi

echo "Registered successfully with Server ID: $SERVER_ID"

# 6. Calculate WS URL
WS_URL=$(echo "$ENDPOINT" | sed 's/http:/ws:/g' | sed 's/https:/wss:/g')
if [[ "$ENDPOINT" == *"localhost"* ]] || [[ "$ENDPOINT" == *"127.0.0.1"* ]]; then
    WS_URL=$(echo "$WS_URL" | sed 's/:8000/:8080/g')
fi

# 7. Write configuration file
echo "Writing configuration..."
cat << EOF | sudo tee /etc/serverpanel-agent/.env > /dev/null
SERVERPANEL_AGENT_TOKEN=$TOKEN
SERVERPANEL_ENDPOINT=$ENDPOINT
SERVERPANEL_SERVER_ID=$SERVER_ID
SERVERPANEL_WS_URL=$WS_URL
EOF

sudo chmod 600 /etc/serverpanel-agent/.env
sudo chown serverpanel:serverpanel /etc/serverpanel-agent/.env

# 7.5 Configure passwordless sudo for serverpanel user
echo "Configuring passwordless sudo for administrative actions..."
cat << 'EOF' | sudo tee /etc/sudoers.d/serverpanel > /dev/null
serverpanel ALL=(ALL) NOPASSWD: /usr/bin/apt-get, /usr/bin/systemctl
EOF
sudo chmod 440 /etc/sudoers.d/serverpanel

# 8. Setup systemd service wrapper
echo "Setting up systemd service..."
cat << 'EOF' | sudo tee /etc/systemd/system/serverpanel-agent.service > /dev/null
[Unit]
Description=ServerPanel Agent
After=network.target

[Service]
Type=simple
User=serverpanel
Group=serverpanel
WorkingDirectory=/opt/serverpanel-agent
ExecStart=/usr/bin/node dist/index.js
Restart=always
RestartSec=5
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload

echo "=========================================="
echo "ServerPanel Agent installed successfully!"
echo "Configuration written to /etc/serverpanel-agent/.env"
echo "To finish setup, deploy your compiled agent files to /opt/serverpanel-agent and start the service:"
echo "sudo systemctl start serverpanel-agent"
echo "=========================================="
