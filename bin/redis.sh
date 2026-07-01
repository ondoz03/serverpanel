#!/usr/bin/env bash
DIR="$(cd "$(dirname "$0")/.." && pwd)"
mkdir -p "$DIR/.local/redis-data"
case "${1:-start}" in
    start)
        "$DIR/.local/redis-server" \
            --port 6379 \
            --dir "$DIR/.local/redis-data" \
            --save "" \
            --daemonize yes
        echo "Redis started on port 6379"
        ;;
    stop)
        "$DIR/.local/redis-cli" shutdown 2>/dev/null
        echo "Redis stopped"
        ;;
    status)
        if "$DIR/.local/redis-cli" PING >/dev/null 2>&1; then
            echo "Redis is running"
        else
            echo "Redis is not running"
        fi
        ;;
    *)
        echo "Usage: $0 {start|stop|status}"
        ;;
esac
