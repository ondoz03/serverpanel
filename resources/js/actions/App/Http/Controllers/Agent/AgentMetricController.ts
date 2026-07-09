import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Agent\AgentMetricController::store
 * @see app/Http/Controllers/Agent/AgentMetricController.php:13
 * @route '/api/agent/metrics'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/agent/metrics',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Agent\AgentMetricController::store
 * @see app/Http/Controllers/Agent/AgentMetricController.php:13
 * @route '/api/agent/metrics'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Agent\AgentMetricController::store
 * @see app/Http/Controllers/Agent/AgentMetricController.php:13
 * @route '/api/agent/metrics'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Agent\AgentMetricController::store
 * @see app/Http/Controllers/Agent/AgentMetricController.php:13
 * @route '/api/agent/metrics'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Agent\AgentMetricController::store
 * @see app/Http/Controllers/Agent/AgentMetricController.php:13
 * @route '/api/agent/metrics'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const AgentMetricController = { store }

export default AgentMetricController