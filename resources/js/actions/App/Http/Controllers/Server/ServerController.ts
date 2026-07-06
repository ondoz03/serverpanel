import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Server\ServerController::store
* @see app/Http/Controllers/Server/ServerController.php:58
* @route '/servers'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/servers',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Server\ServerController::store
* @see app/Http/Controllers/Server/ServerController.php:58
* @route '/servers'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Server\ServerController::store
* @see app/Http/Controllers/Server/ServerController.php:58
* @route '/servers'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Server\ServerController::index
* @see app/Http/Controllers/Server/ServerController.php:17
* @route '/servers'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/servers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Server\ServerController::index
* @see app/Http/Controllers/Server/ServerController.php:17
* @route '/servers'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Server\ServerController::index
* @see app/Http/Controllers/Server/ServerController.php:17
* @route '/servers'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Server\ServerController::index
* @see app/Http/Controllers/Server/ServerController.php:17
* @route '/servers'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Server\ServerController::show
* @see app/Http/Controllers/Server/ServerController.php:30
* @route '/servers/{server}'
*/
export const show = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/servers/{server}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Server\ServerController::show
* @see app/Http/Controllers/Server/ServerController.php:30
* @route '/servers/{server}'
*/
show.url = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { server: args }
    }

    if (Array.isArray(args)) {
        args = {
            server: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        server: args.server,
    }

    return show.definition.url
            .replace('{server}', parsedArgs.server.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Server\ServerController::show
* @see app/Http/Controllers/Server/ServerController.php:30
* @route '/servers/{server}'
*/
show.get = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Server\ServerController::show
* @see app/Http/Controllers/Server/ServerController.php:30
* @route '/servers/{server}'
*/
show.head = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Server\ServerController::monitoring
* @see app/Http/Controllers/Server/ServerController.php:37
* @route '/servers/{server}/monitoring'
*/
export const monitoring = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: monitoring.url(args, options),
    method: 'get',
})

monitoring.definition = {
    methods: ["get","head"],
    url: '/servers/{server}/monitoring',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Server\ServerController::monitoring
* @see app/Http/Controllers/Server/ServerController.php:37
* @route '/servers/{server}/monitoring'
*/
monitoring.url = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { server: args }
    }

    if (Array.isArray(args)) {
        args = {
            server: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        server: args.server,
    }

    return monitoring.definition.url
            .replace('{server}', parsedArgs.server.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Server\ServerController::monitoring
* @see app/Http/Controllers/Server/ServerController.php:37
* @route '/servers/{server}/monitoring'
*/
monitoring.get = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: monitoring.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Server\ServerController::monitoring
* @see app/Http/Controllers/Server/ServerController.php:37
* @route '/servers/{server}/monitoring'
*/
monitoring.head = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: monitoring.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Server\ServerController::provisioning
* @see app/Http/Controllers/Server/ServerController.php:44
* @route '/servers/{server}/provisioning'
*/
export const provisioning = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: provisioning.url(args, options),
    method: 'get',
})

provisioning.definition = {
    methods: ["get","head"],
    url: '/servers/{server}/provisioning',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Server\ServerController::provisioning
* @see app/Http/Controllers/Server/ServerController.php:44
* @route '/servers/{server}/provisioning'
*/
provisioning.url = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { server: args }
    }

    if (Array.isArray(args)) {
        args = {
            server: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        server: args.server,
    }

    return provisioning.definition.url
            .replace('{server}', parsedArgs.server.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Server\ServerController::provisioning
* @see app/Http/Controllers/Server/ServerController.php:44
* @route '/servers/{server}/provisioning'
*/
provisioning.get = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: provisioning.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Server\ServerController::provisioning
* @see app/Http/Controllers/Server/ServerController.php:44
* @route '/servers/{server}/provisioning'
*/
provisioning.head = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: provisioning.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Server\ServerController::settings
* @see app/Http/Controllers/Server/ServerController.php:51
* @route '/servers/{server}/settings'
*/
export const settings = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(args, options),
    method: 'get',
})

settings.definition = {
    methods: ["get","head"],
    url: '/servers/{server}/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Server\ServerController::settings
* @see app/Http/Controllers/Server/ServerController.php:51
* @route '/servers/{server}/settings'
*/
settings.url = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { server: args }
    }

    if (Array.isArray(args)) {
        args = {
            server: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        server: args.server,
    }

    return settings.definition.url
            .replace('{server}', parsedArgs.server.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Server\ServerController::settings
* @see app/Http/Controllers/Server/ServerController.php:51
* @route '/servers/{server}/settings'
*/
settings.get = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Server\ServerController::settings
* @see app/Http/Controllers/Server/ServerController.php:51
* @route '/servers/{server}/settings'
*/
settings.head = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: settings.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Server\ServerController::update
* @see app/Http/Controllers/Server/ServerController.php:72
* @route '/servers/{server}'
*/
export const update = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/servers/{server}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Server\ServerController::update
* @see app/Http/Controllers/Server/ServerController.php:72
* @route '/servers/{server}'
*/
update.url = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { server: args }
    }

    if (Array.isArray(args)) {
        args = {
            server: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        server: args.server,
    }

    return update.definition.url
            .replace('{server}', parsedArgs.server.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Server\ServerController::update
* @see app/Http/Controllers/Server/ServerController.php:72
* @route '/servers/{server}'
*/
update.put = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Server\ServerController::destroy
* @see app/Http/Controllers/Server/ServerController.php:80
* @route '/servers/{server}'
*/
export const destroy = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/servers/{server}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Server\ServerController::destroy
* @see app/Http/Controllers/Server/ServerController.php:80
* @route '/servers/{server}'
*/
destroy.url = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { server: args }
    }

    if (Array.isArray(args)) {
        args = {
            server: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        server: args.server,
    }

    return destroy.definition.url
            .replace('{server}', parsedArgs.server.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Server\ServerController::destroy
* @see app/Http/Controllers/Server/ServerController.php:80
* @route '/servers/{server}'
*/
destroy.delete = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const ServerController = { store, index, show, monitoring, provisioning, settings, update, destroy }

export default ServerController