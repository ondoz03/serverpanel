import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Server\ServerController::store
 * @see app/Http/Controllers/Server/ServerController.php:77
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
 * @see app/Http/Controllers/Server/ServerController.php:77
 * @route '/servers'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Server\ServerController::store
 * @see app/Http/Controllers/Server/ServerController.php:77
 * @route '/servers'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Server\ServerController::store
 * @see app/Http/Controllers/Server/ServerController.php:77
 * @route '/servers'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Server\ServerController::store
 * @see app/Http/Controllers/Server/ServerController.php:77
 * @route '/servers'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Server\ServerController::index
 * @see app/Http/Controllers/Server/ServerController.php:18
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
 * @see app/Http/Controllers/Server/ServerController.php:18
 * @route '/servers'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Server\ServerController::index
 * @see app/Http/Controllers/Server/ServerController.php:18
 * @route '/servers'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Server\ServerController::index
 * @see app/Http/Controllers/Server/ServerController.php:18
 * @route '/servers'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Server\ServerController::index
 * @see app/Http/Controllers/Server/ServerController.php:18
 * @route '/servers'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Server\ServerController::index
 * @see app/Http/Controllers/Server/ServerController.php:18
 * @route '/servers'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Server\ServerController::index
 * @see app/Http/Controllers/Server/ServerController.php:18
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
* @see \App\Http\Controllers\Server\ServerController::show
 * @see app/Http/Controllers/Server/ServerController.php:31
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
 * @see app/Http/Controllers/Server/ServerController.php:31
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
 * @see app/Http/Controllers/Server/ServerController.php:31
 * @route '/servers/{server}'
 */
show.get = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Server\ServerController::show
 * @see app/Http/Controllers/Server/ServerController.php:31
 * @route '/servers/{server}'
 */
show.head = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Server\ServerController::show
 * @see app/Http/Controllers/Server/ServerController.php:31
 * @route '/servers/{server}'
 */
    const showForm = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Server\ServerController::show
 * @see app/Http/Controllers/Server/ServerController.php:31
 * @route '/servers/{server}'
 */
        showForm.get = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Server\ServerController::show
 * @see app/Http/Controllers/Server/ServerController.php:31
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
 * @see app/Http/Controllers/Server/ServerController.php:47
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
 * @see app/Http/Controllers/Server/ServerController.php:47
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
 * @see app/Http/Controllers/Server/ServerController.php:47
 * @route '/servers/{server}/monitoring'
 */
monitoring.get = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: monitoring.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Server\ServerController::monitoring
 * @see app/Http/Controllers/Server/ServerController.php:47
 * @route '/servers/{server}/monitoring'
 */
monitoring.head = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: monitoring.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Server\ServerController::monitoring
 * @see app/Http/Controllers/Server/ServerController.php:47
 * @route '/servers/{server}/monitoring'
 */
    const monitoringForm = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: monitoring.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Server\ServerController::monitoring
 * @see app/Http/Controllers/Server/ServerController.php:47
 * @route '/servers/{server}/monitoring'
 */
        monitoringForm.get = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: monitoring.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Server\ServerController::monitoring
 * @see app/Http/Controllers/Server/ServerController.php:47
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
 * @see app/Http/Controllers/Server/ServerController.php:57
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
 * @see app/Http/Controllers/Server/ServerController.php:57
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
 * @see app/Http/Controllers/Server/ServerController.php:57
 * @route '/servers/{server}/provisioning'
 */
provisioning.get = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: provisioning.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Server\ServerController::provisioning
 * @see app/Http/Controllers/Server/ServerController.php:57
 * @route '/servers/{server}/provisioning'
 */
provisioning.head = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: provisioning.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Server\ServerController::provisioning
 * @see app/Http/Controllers/Server/ServerController.php:57
 * @route '/servers/{server}/provisioning'
 */
    const provisioningForm = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: provisioning.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Server\ServerController::provisioning
 * @see app/Http/Controllers/Server/ServerController.php:57
 * @route '/servers/{server}/provisioning'
 */
        provisioningForm.get = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: provisioning.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Server\ServerController::provisioning
 * @see app/Http/Controllers/Server/ServerController.php:57
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
 * @see app/Http/Controllers/Server/ServerController.php:67
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
 * @see app/Http/Controllers/Server/ServerController.php:67
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
 * @see app/Http/Controllers/Server/ServerController.php:67
 * @route '/servers/{server}/settings'
 */
settings.get = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Server\ServerController::settings
 * @see app/Http/Controllers/Server/ServerController.php:67
 * @route '/servers/{server}/settings'
 */
settings.head = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: settings.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Server\ServerController::settings
 * @see app/Http/Controllers/Server/ServerController.php:67
 * @route '/servers/{server}/settings'
 */
    const settingsForm = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: settings.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Server\ServerController::settings
 * @see app/Http/Controllers/Server/ServerController.php:67
 * @route '/servers/{server}/settings'
 */
        settingsForm.get = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: settings.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Server\ServerController::settings
 * @see app/Http/Controllers/Server/ServerController.php:67
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
/**
* @see \App\Http\Controllers\Server\ServerController::update
 * @see app/Http/Controllers/Server/ServerController.php:91
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
 * @see app/Http/Controllers/Server/ServerController.php:91
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
 * @see app/Http/Controllers/Server/ServerController.php:91
 * @route '/servers/{server}'
 */
update.put = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Server\ServerController::update
 * @see app/Http/Controllers/Server/ServerController.php:91
 * @route '/servers/{server}'
 */
    const updateForm = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Server\ServerController::update
 * @see app/Http/Controllers/Server/ServerController.php:91
 * @route '/servers/{server}'
 */
        updateForm.put = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Server\ServerController::destroy
 * @see app/Http/Controllers/Server/ServerController.php:102
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
 * @see app/Http/Controllers/Server/ServerController.php:102
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
 * @see app/Http/Controllers/Server/ServerController.php:102
 * @route '/servers/{server}'
 */
destroy.delete = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Server\ServerController::destroy
 * @see app/Http/Controllers/Server/ServerController.php:102
 * @route '/servers/{server}'
 */
    const destroyForm = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Server\ServerController::destroy
 * @see app/Http/Controllers/Server/ServerController.php:102
 * @route '/servers/{server}'
 */
        destroyForm.delete = (args: { server: string | number } | [server: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\Server\ServerController::manageService
 * @see app/Http/Controllers/Server/ServerController.php:113
 * @route '/servers/{server}/services/{service}/{action}'
 */
export const manageService = (args: { server: string | number, service: string | number, action: string | number } | [server: string | number, service: string | number, action: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: manageService.url(args, options),
    method: 'post',
})

manageService.definition = {
    methods: ["post"],
    url: '/servers/{server}/services/{service}/{action}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Server\ServerController::manageService
 * @see app/Http/Controllers/Server/ServerController.php:113
 * @route '/servers/{server}/services/{service}/{action}'
 */
manageService.url = (args: { server: string | number, service: string | number, action: string | number } | [server: string | number, service: string | number, action: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    server: args[0],
                    service: args[1],
                    action: args[2],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        server: args.server,
                                service: args.service,
                                action: args.action,
                }

    return manageService.definition.url
            .replace('{server}', parsedArgs.server.toString())
            .replace('{service}', parsedArgs.service.toString())
            .replace('{action}', parsedArgs.action.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Server\ServerController::manageService
 * @see app/Http/Controllers/Server/ServerController.php:113
 * @route '/servers/{server}/services/{service}/{action}'
 */
manageService.post = (args: { server: string | number, service: string | number, action: string | number } | [server: string | number, service: string | number, action: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: manageService.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Server\ServerController::manageService
 * @see app/Http/Controllers/Server/ServerController.php:113
 * @route '/servers/{server}/services/{service}/{action}'
 */
    const manageServiceForm = (args: { server: string | number, service: string | number, action: string | number } | [server: string | number, service: string | number, action: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: manageService.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Server\ServerController::manageService
 * @see app/Http/Controllers/Server/ServerController.php:113
 * @route '/servers/{server}/services/{service}/{action}'
 */
        manageServiceForm.post = (args: { server: string | number, service: string | number, action: string | number } | [server: string | number, service: string | number, action: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: manageService.url(args, options),
            method: 'post',
        })
    
    manageService.form = manageServiceForm
const ServerController = { store, index, show, monitoring, provisioning, settings, update, destroy, manageService }

export default ServerController