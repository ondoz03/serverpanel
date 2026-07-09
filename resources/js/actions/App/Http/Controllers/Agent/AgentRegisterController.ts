import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Agent\AgentRegisterController::register
 * @see app/Http/Controllers/Agent/AgentRegisterController.php:12
 * @route '/api/agent/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

register.definition = {
    methods: ["post"],
    url: '/api/agent/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Agent\AgentRegisterController::register
 * @see app/Http/Controllers/Agent/AgentRegisterController.php:12
 * @route '/api/agent/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Agent\AgentRegisterController::register
 * @see app/Http/Controllers/Agent/AgentRegisterController.php:12
 * @route '/api/agent/register'
 */
register.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Agent\AgentRegisterController::register
 * @see app/Http/Controllers/Agent/AgentRegisterController.php:12
 * @route '/api/agent/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: register.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Agent\AgentRegisterController::register
 * @see app/Http/Controllers/Agent/AgentRegisterController.php:12
 * @route '/api/agent/register'
 */
        registerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: register.url(options),
            method: 'post',
        })
    
    register.form = registerForm
/**
* @see \App\Http\Controllers\Agent\AgentRegisterController::installScript
 * @see app/Http/Controllers/Agent/AgentRegisterController.php:44
 * @route '/install.sh'
 */
export const installScript = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: installScript.url(options),
    method: 'get',
})

installScript.definition = {
    methods: ["get","head"],
    url: '/install.sh',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Agent\AgentRegisterController::installScript
 * @see app/Http/Controllers/Agent/AgentRegisterController.php:44
 * @route '/install.sh'
 */
installScript.url = (options?: RouteQueryOptions) => {
    return installScript.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Agent\AgentRegisterController::installScript
 * @see app/Http/Controllers/Agent/AgentRegisterController.php:44
 * @route '/install.sh'
 */
installScript.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: installScript.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Agent\AgentRegisterController::installScript
 * @see app/Http/Controllers/Agent/AgentRegisterController.php:44
 * @route '/install.sh'
 */
installScript.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: installScript.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Agent\AgentRegisterController::installScript
 * @see app/Http/Controllers/Agent/AgentRegisterController.php:44
 * @route '/install.sh'
 */
    const installScriptForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: installScript.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Agent\AgentRegisterController::installScript
 * @see app/Http/Controllers/Agent/AgentRegisterController.php:44
 * @route '/install.sh'
 */
        installScriptForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: installScript.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Agent\AgentRegisterController::installScript
 * @see app/Http/Controllers/Agent/AgentRegisterController.php:44
 * @route '/install.sh'
 */
        installScriptForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: installScript.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    installScript.form = installScriptForm
const AgentRegisterController = { register, installScript }

export default AgentRegisterController