import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backup\BackupController::index
 * @see app/Http/Controllers/Backup/BackupController.php:10
 * @route '/backups'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/backups',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backup\BackupController::index
 * @see app/Http/Controllers/Backup/BackupController.php:10
 * @route '/backups'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backup\BackupController::index
 * @see app/Http/Controllers/Backup/BackupController.php:10
 * @route '/backups'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backup\BackupController::index
 * @see app/Http/Controllers/Backup/BackupController.php:10
 * @route '/backups'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backup\BackupController::index
 * @see app/Http/Controllers/Backup/BackupController.php:10
 * @route '/backups'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backup\BackupController::index
 * @see app/Http/Controllers/Backup/BackupController.php:10
 * @route '/backups'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backup\BackupController::index
 * @see app/Http/Controllers/Backup/BackupController.php:10
 * @route '/backups'
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
const BackupController = { index }

export default BackupController