import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Agent\AgentBroadcastAuthController::authenticate
 * @see app/Http/Controllers/Agent/AgentBroadcastAuthController.php:10
 * @route '/api/agent/broadcasting/auth'
 */
export const authenticate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: authenticate.url(options),
    method: 'post',
})

authenticate.definition = {
    methods: ["post"],
    url: '/api/agent/broadcasting/auth',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Agent\AgentBroadcastAuthController::authenticate
 * @see app/Http/Controllers/Agent/AgentBroadcastAuthController.php:10
 * @route '/api/agent/broadcasting/auth'
 */
authenticate.url = (options?: RouteQueryOptions) => {
    return authenticate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Agent\AgentBroadcastAuthController::authenticate
 * @see app/Http/Controllers/Agent/AgentBroadcastAuthController.php:10
 * @route '/api/agent/broadcasting/auth'
 */
authenticate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: authenticate.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Agent\AgentBroadcastAuthController::authenticate
 * @see app/Http/Controllers/Agent/AgentBroadcastAuthController.php:10
 * @route '/api/agent/broadcasting/auth'
 */
    const authenticateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: authenticate.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Agent\AgentBroadcastAuthController::authenticate
 * @see app/Http/Controllers/Agent/AgentBroadcastAuthController.php:10
 * @route '/api/agent/broadcasting/auth'
 */
        authenticateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: authenticate.url(options),
            method: 'post',
        })
    
    authenticate.form = authenticateForm
const AgentBroadcastAuthController = { authenticate }

export default AgentBroadcastAuthController