import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
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
const agent = {
    installScript: Object.assign(installScript, installScript),
}

export default agent