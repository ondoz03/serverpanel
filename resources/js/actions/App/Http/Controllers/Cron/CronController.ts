import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Cron\CronController::index
* @see app/Http/Controllers/Cron/CronController.php:10
* @route '/cron-jobs'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cron-jobs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Cron\CronController::index
* @see app/Http/Controllers/Cron/CronController.php:10
* @route '/cron-jobs'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Cron\CronController::index
* @see app/Http/Controllers/Cron/CronController.php:10
* @route '/cron-jobs'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Cron\CronController::index
* @see app/Http/Controllers/Cron/CronController.php:10
* @route '/cron-jobs'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const CronController = { index }

export default CronController