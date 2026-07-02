import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Server\ServerController::index
 * @see app/Http/Controllers/Server/ServerController.php:11
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
 * @see app/Http/Controllers/Server/ServerController.php:11
 * @route '/servers'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Server\ServerController::index
 * @see app/Http/Controllers/Server/ServerController.php:11
 * @route '/servers'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Server\ServerController::index
 * @see app/Http/Controllers/Server/ServerController.php:11
 * @route '/servers'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Server\ServerController::index
 * @see app/Http/Controllers/Server/ServerController.php:11
 * @route '/servers'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Server\ServerController::index
 * @see app/Http/Controllers/Server/ServerController.php:11
 * @route '/servers'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Server\ServerController::index
 * @see app/Http/Controllers/Server/ServerController.php:11
 * @route '/servers'
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
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/servers/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/servers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/servers/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/servers/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/servers/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/servers/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/servers/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/servers/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Server\ServerController::show
 * @see app/Http/Controllers/Server/ServerController.php:94
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
 * @see app/Http/Controllers/Server/ServerController.php:94
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
 * @see app/Http/Controllers/Server/ServerController.php:94
 * @route '/servers/{server}'
 */
show.get = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Server\ServerController::show
 * @see app/Http/Controllers/Server/ServerController.php:94
 * @route '/servers/{server}'
 */
show.head = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Server\ServerController::show
 * @see app/Http/Controllers/Server/ServerController.php:94
 * @route '/servers/{server}'
 */
    const showForm = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Server\ServerController::show
 * @see app/Http/Controllers/Server/ServerController.php:94
 * @route '/servers/{server}'
 */
        showForm.get = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Server\ServerController::show
 * @see app/Http/Controllers/Server/ServerController.php:94
 * @route '/servers/{server}'
 */
        showForm.head = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Server\ServerController::monitoring
 * @see app/Http/Controllers/Server/ServerController.php:131
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
 * @see app/Http/Controllers/Server/ServerController.php:131
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
 * @see app/Http/Controllers/Server/ServerController.php:131
 * @route '/servers/{server}/monitoring'
 */
monitoring.get = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: monitoring.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Server\ServerController::monitoring
 * @see app/Http/Controllers/Server/ServerController.php:131
 * @route '/servers/{server}/monitoring'
 */
monitoring.head = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: monitoring.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Server\ServerController::monitoring
 * @see app/Http/Controllers/Server/ServerController.php:131
 * @route '/servers/{server}/monitoring'
 */
    const monitoringForm = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: monitoring.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Server\ServerController::monitoring
 * @see app/Http/Controllers/Server/ServerController.php:131
 * @route '/servers/{server}/monitoring'
 */
        monitoringForm.get = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: monitoring.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Server\ServerController::monitoring
 * @see app/Http/Controllers/Server/ServerController.php:131
 * @route '/servers/{server}/monitoring'
 */
        monitoringForm.head = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: monitoring.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    monitoring.form = monitoringForm
/**
* @see \App\Http\Controllers\Server\ServerController::provisioning
 * @see app/Http/Controllers/Server/ServerController.php:164
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
 * @see app/Http/Controllers/Server/ServerController.php:164
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
 * @see app/Http/Controllers/Server/ServerController.php:164
 * @route '/servers/{server}/provisioning'
 */
provisioning.get = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: provisioning.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Server\ServerController::provisioning
 * @see app/Http/Controllers/Server/ServerController.php:164
 * @route '/servers/{server}/provisioning'
 */
provisioning.head = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: provisioning.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Server\ServerController::provisioning
 * @see app/Http/Controllers/Server/ServerController.php:164
 * @route '/servers/{server}/provisioning'
 */
    const provisioningForm = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: provisioning.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Server\ServerController::provisioning
 * @see app/Http/Controllers/Server/ServerController.php:164
 * @route '/servers/{server}/provisioning'
 */
        provisioningForm.get = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: provisioning.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Server\ServerController::provisioning
 * @see app/Http/Controllers/Server/ServerController.php:164
 * @route '/servers/{server}/provisioning'
 */
        provisioningForm.head = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: provisioning.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    provisioning.form = provisioningForm
/**
* @see \App\Http\Controllers\Server\ServerController::settings
 * @see app/Http/Controllers/Server/ServerController.php:192
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
 * @see app/Http/Controllers/Server/ServerController.php:192
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
 * @see app/Http/Controllers/Server/ServerController.php:192
 * @route '/servers/{server}/settings'
 */
settings.get = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Server\ServerController::settings
 * @see app/Http/Controllers/Server/ServerController.php:192
 * @route '/servers/{server}/settings'
 */
settings.head = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: settings.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Server\ServerController::settings
 * @see app/Http/Controllers/Server/ServerController.php:192
 * @route '/servers/{server}/settings'
 */
    const settingsForm = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: settings.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Server\ServerController::settings
 * @see app/Http/Controllers/Server/ServerController.php:192
 * @route '/servers/{server}/settings'
 */
        settingsForm.get = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: settings.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Server\ServerController::settings
 * @see app/Http/Controllers/Server/ServerController.php:192
 * @route '/servers/{server}/settings'
 */
        settingsForm.head = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: settings.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    settings.form = settingsForm
const servers = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
show: Object.assign(show, show),
monitoring: Object.assign(monitoring, monitoring),
provisioning: Object.assign(provisioning, provisioning),
settings: Object.assign(settings, settings),
}

export default servers