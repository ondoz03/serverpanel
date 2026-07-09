import AgentRegisterController from './AgentRegisterController'
import AgentCommandController from './AgentCommandController'
import AgentMetricController from './AgentMetricController'
import AgentBroadcastAuthController from './AgentBroadcastAuthController'
const Agent = {
    AgentRegisterController: Object.assign(AgentRegisterController, AgentRegisterController),
AgentCommandController: Object.assign(AgentCommandController, AgentCommandController),
AgentMetricController: Object.assign(AgentMetricController, AgentMetricController),
AgentBroadcastAuthController: Object.assign(AgentBroadcastAuthController, AgentBroadcastAuthController),
}

export default Agent