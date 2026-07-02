import Server from './Server'
import WebApp from './WebApp'
import Database from './Database'
import Firewall from './Firewall'
import Cron from './Cron'
import Backup from './Backup'
import Settings from './Settings'
const Controllers = {
    Server: Object.assign(Server, Server),
WebApp: Object.assign(WebApp, WebApp),
Database: Object.assign(Database, Database),
Firewall: Object.assign(Firewall, Firewall),
Cron: Object.assign(Cron, Cron),
Backup: Object.assign(Backup, Backup),
Settings: Object.assign(Settings, Settings),
}

export default Controllers