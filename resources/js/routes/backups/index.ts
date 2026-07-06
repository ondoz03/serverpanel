import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
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

const backups = {
    index: Object.assign(index, index),
}

export default backups