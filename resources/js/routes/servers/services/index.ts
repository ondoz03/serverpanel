import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Server\ServerController::manage
 * @see app/Http/Controllers/Server/ServerController.php:113
 * @route '/servers/{server}/services/{service}/{action}'
 */
export const manage = (args: { server: string | number, service: string | number, action: string | number } | [server: string | number, service: string | number, action: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: manage.url(args, options),
    method: 'post',
})

manage.definition = {
    methods: ["post"],
    url: '/servers/{server}/services/{service}/{action}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Server\ServerController::manage
 * @see app/Http/Controllers/Server/ServerController.php:113
 * @route '/servers/{server}/services/{service}/{action}'
 */
manage.url = (args: { server: string | number, service: string | number, action: string | number } | [server: string | number, service: string | number, action: string | number ], options?: RouteQueryOptions) => {
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

    return manage.definition.url
            .replace('{server}', parsedArgs.server.toString())
            .replace('{service}', parsedArgs.service.toString())
            .replace('{action}', parsedArgs.action.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Server\ServerController::manage
 * @see app/Http/Controllers/Server/ServerController.php:113
 * @route '/servers/{server}/services/{service}/{action}'
 */
manage.post = (args: { server: string | number, service: string | number, action: string | number } | [server: string | number, service: string | number, action: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: manage.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Server\ServerController::manage
 * @see app/Http/Controllers/Server/ServerController.php:113
 * @route '/servers/{server}/services/{service}/{action}'
 */
    const manageForm = (args: { server: string | number, service: string | number, action: string | number } | [server: string | number, service: string | number, action: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: manage.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Server\ServerController::manage
 * @see app/Http/Controllers/Server/ServerController.php:113
 * @route '/servers/{server}/services/{service}/{action}'
 */
        manageForm.post = (args: { server: string | number, service: string | number, action: string | number } | [server: string | number, service: string | number, action: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: manage.url(args, options),
            method: 'post',
        })
    
    manage.form = manageForm
const services = {
    manage: Object.assign(manage, manage),
}

export default services