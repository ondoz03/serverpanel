import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
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

    /**
* @see \App\Http\Controllers\Cron\CronController::index
 * @see app/Http/Controllers/Cron/CronController.php:10
 * @route '/cron-jobs'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Cron\CronController::index
 * @see app/Http/Controllers/Cron/CronController.php:10
 * @route '/cron-jobs'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Cron\CronController::index
 * @see app/Http/Controllers/Cron/CronController.php:10
 * @route '/cron-jobs'
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
const CronController = { index }

export default CronController