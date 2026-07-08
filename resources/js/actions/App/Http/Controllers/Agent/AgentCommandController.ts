import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Agent\AgentCommandController::response
 * @see app/Http/Controllers/Agent/AgentCommandController.php:13
 * @route '/api/agent/command/response'
 */
export const response = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: response.url(options),
    method: 'post',
})

response.definition = {
    methods: ["post"],
    url: '/api/agent/command/response',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Agent\AgentCommandController::response
 * @see app/Http/Controllers/Agent/AgentCommandController.php:13
 * @route '/api/agent/command/response'
 */
response.url = (options?: RouteQueryOptions) => {
    return response.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Agent\AgentCommandController::response
 * @see app/Http/Controllers/Agent/AgentCommandController.php:13
 * @route '/api/agent/command/response'
 */
response.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: response.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Agent\AgentCommandController::response
 * @see app/Http/Controllers/Agent/AgentCommandController.php:13
 * @route '/api/agent/command/response'
 */
    const responseForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: response.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Agent\AgentCommandController::response
 * @see app/Http/Controllers/Agent/AgentCommandController.php:13
 * @route '/api/agent/command/response'
 */
        responseForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: response.url(options),
            method: 'post',
        })
    
    response.form = responseForm
const AgentCommandController = { response }

export default AgentCommandController