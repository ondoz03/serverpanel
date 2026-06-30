import Server from './Server'
import Settings from './Settings'

const Controllers = {
    Server: Object.assign(Server, Server),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers