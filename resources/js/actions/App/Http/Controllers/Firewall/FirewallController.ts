import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Firewall\FirewallController::index
* @see app/Http/Controllers/Firewall/FirewallController.php:10
* @route '/firewall'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/firewall',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Firewall\FirewallController::index
* @see app/Http/Controllers/Firewall/FirewallController.php:10
* @route '/firewall'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Firewall\FirewallController::index
* @see app/Http/Controllers/Firewall/FirewallController.php:10
* @route '/firewall'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Firewall\FirewallController::index
* @see app/Http/Controllers/Firewall/FirewallController.php:10
* @route '/firewall'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Firewall\FirewallController::index
* @see app/Http/Controllers/Firewall/FirewallController.php:10
* @route '/firewall'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Firewall\FirewallController::index
* @see app/Http/Controllers/Firewall/FirewallController.php:10
* @route '/firewall'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Firewall\FirewallController::index
* @see app/Http/Controllers/Firewall/FirewallController.php:10
* @route '/firewall'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const FirewallController = { index }

export default FirewallController