import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\WebApp\WebAppController::index
* @see app/Http/Controllers/WebApp/WebAppController.php:10
* @route '/web-apps'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/web-apps',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WebApp\WebAppController::index
* @see app/Http/Controllers/WebApp/WebAppController.php:10
* @route '/web-apps'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\WebApp\WebAppController::index
* @see app/Http/Controllers/WebApp/WebAppController.php:10
* @route '/web-apps'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WebApp\WebAppController::index
* @see app/Http/Controllers/WebApp/WebAppController.php:10
* @route '/web-apps'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\WebApp\WebAppController::show
* @see app/Http/Controllers/WebApp/WebAppController.php:50
* @route '/web-apps/{webApp}'
*/
export const show = (args: { webApp: string | number } | [webApp: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/web-apps/{webApp}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WebApp\WebAppController::show
* @see app/Http/Controllers/WebApp/WebAppController.php:50
* @route '/web-apps/{webApp}'
*/
show.url = (args: { webApp: string | number } | [webApp: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { webApp: args }
    }

    if (Array.isArray(args)) {
        args = {
            webApp: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        webApp: args.webApp,
    }

    return show.definition.url
            .replace('{webApp}', parsedArgs.webApp.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\WebApp\WebAppController::show
* @see app/Http/Controllers/WebApp/WebAppController.php:50
* @route '/web-apps/{webApp}'
*/
show.get = (args: { webApp: string | number } | [webApp: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WebApp\WebAppController::show
* @see app/Http/Controllers/WebApp/WebAppController.php:50
* @route '/web-apps/{webApp}'
*/
show.head = (args: { webApp: string | number } | [webApp: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\WebApp\WebAppController::ssl
* @see app/Http/Controllers/WebApp/WebAppController.php:65
* @route '/web-apps/{webApp}/ssl'
*/
export const ssl = (args: { webApp: string | number } | [webApp: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ssl.url(args, options),
    method: 'get',
})

ssl.definition = {
    methods: ["get","head"],
    url: '/web-apps/{webApp}/ssl',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WebApp\WebAppController::ssl
* @see app/Http/Controllers/WebApp/WebAppController.php:65
* @route '/web-apps/{webApp}/ssl'
*/
ssl.url = (args: { webApp: string | number } | [webApp: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { webApp: args }
    }

    if (Array.isArray(args)) {
        args = {
            webApp: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        webApp: args.webApp,
    }

    return ssl.definition.url
            .replace('{webApp}', parsedArgs.webApp.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\WebApp\WebAppController::ssl
* @see app/Http/Controllers/WebApp/WebAppController.php:65
* @route '/web-apps/{webApp}/ssl'
*/
ssl.get = (args: { webApp: string | number } | [webApp: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ssl.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WebApp\WebAppController::ssl
* @see app/Http/Controllers/WebApp/WebAppController.php:65
* @route '/web-apps/{webApp}/ssl'
*/
ssl.head = (args: { webApp: string | number } | [webApp: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ssl.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\WebApp\WebAppController::env
* @see app/Http/Controllers/WebApp/WebAppController.php:76
* @route '/web-apps/{webApp}/env'
*/
export const env = (args: { webApp: string | number } | [webApp: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: env.url(args, options),
    method: 'get',
})

env.definition = {
    methods: ["get","head"],
    url: '/web-apps/{webApp}/env',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WebApp\WebAppController::env
* @see app/Http/Controllers/WebApp/WebAppController.php:76
* @route '/web-apps/{webApp}/env'
*/
env.url = (args: { webApp: string | number } | [webApp: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { webApp: args }
    }

    if (Array.isArray(args)) {
        args = {
            webApp: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        webApp: args.webApp,
    }

    return env.definition.url
            .replace('{webApp}', parsedArgs.webApp.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\WebApp\WebAppController::env
* @see app/Http/Controllers/WebApp/WebAppController.php:76
* @route '/web-apps/{webApp}/env'
*/
env.get = (args: { webApp: string | number } | [webApp: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: env.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WebApp\WebAppController::env
* @see app/Http/Controllers/WebApp/WebAppController.php:76
* @route '/web-apps/{webApp}/env'
*/
env.head = (args: { webApp: string | number } | [webApp: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: env.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\WebApp\WebAppController::git
* @see app/Http/Controllers/WebApp/WebAppController.php:94
* @route '/web-apps/{webApp}/git'
*/
export const git = (args: { webApp: string | number } | [webApp: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: git.url(args, options),
    method: 'get',
})

git.definition = {
    methods: ["get","head"],
    url: '/web-apps/{webApp}/git',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WebApp\WebAppController::git
* @see app/Http/Controllers/WebApp/WebAppController.php:94
* @route '/web-apps/{webApp}/git'
*/
git.url = (args: { webApp: string | number } | [webApp: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { webApp: args }
    }

    if (Array.isArray(args)) {
        args = {
            webApp: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        webApp: args.webApp,
    }

    return git.definition.url
            .replace('{webApp}', parsedArgs.webApp.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\WebApp\WebAppController::git
* @see app/Http/Controllers/WebApp/WebAppController.php:94
* @route '/web-apps/{webApp}/git'
*/
git.get = (args: { webApp: string | number } | [webApp: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: git.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WebApp\WebAppController::git
* @see app/Http/Controllers/WebApp/WebAppController.php:94
* @route '/web-apps/{webApp}/git'
*/
git.head = (args: { webApp: string | number } | [webApp: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: git.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\WebApp\WebAppController::settings
* @see app/Http/Controllers/WebApp/WebAppController.php:110
* @route '/web-apps/{webApp}/settings'
*/
export const settings = (args: { webApp: string | number } | [webApp: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(args, options),
    method: 'get',
})

settings.definition = {
    methods: ["get","head"],
    url: '/web-apps/{webApp}/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WebApp\WebAppController::settings
* @see app/Http/Controllers/WebApp/WebAppController.php:110
* @route '/web-apps/{webApp}/settings'
*/
settings.url = (args: { webApp: string | number } | [webApp: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { webApp: args }
    }

    if (Array.isArray(args)) {
        args = {
            webApp: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        webApp: args.webApp,
    }

    return settings.definition.url
            .replace('{webApp}', parsedArgs.webApp.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\WebApp\WebAppController::settings
* @see app/Http/Controllers/WebApp/WebAppController.php:110
* @route '/web-apps/{webApp}/settings'
*/
settings.get = (args: { webApp: string | number } | [webApp: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WebApp\WebAppController::settings
* @see app/Http/Controllers/WebApp/WebAppController.php:110
* @route '/web-apps/{webApp}/settings'
*/
settings.head = (args: { webApp: string | number } | [webApp: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: settings.url(args, options),
    method: 'head',
})

const WebAppController = { index, show, ssl, env, git, settings }

export default WebAppController