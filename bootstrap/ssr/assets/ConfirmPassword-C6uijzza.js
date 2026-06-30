import { t as Button_default } from "./button-DHJnCoso.js";
import { n as queryParams } from "./wayfinder-BrhwLpUM.js";
import { t as InputError_default } from "./InputError-CH3UMoP5.js";
import { t as Spinner_default } from "./spinner-ntep3OqV.js";
import { t as PasskeyVerify_default } from "./PasskeyVerify-C9_GbWxj.js";
import { t as PasswordInput_default } from "./PasswordInput-D2x5rKA1.js";
import { t as Label_default } from "./label-Fr_CsYDc.js";
import { n as store$1 } from "./confirm-Bb-3GoYL.js";
import { Form, Head } from "@inertiajs/vue3";
import { createBlock, createCommentVNode, createTextVNode, createVNode, defineComponent, mergeProps, openBlock, unref, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/actions/Laravel/Passkeys/Http/Controllers/PasskeyConfirmationController.ts
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:27
* @route '/passkeys/confirm/options'
*/
var index = (options) => ({
	url: index.url(options),
	method: "get"
});
index.definition = {
	methods: ["get", "head"],
	url: "/passkeys/confirm/options"
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:27
* @route '/passkeys/confirm/options'
*/
index.url = (options) => {
	return index.definition.url + queryParams(options);
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:27
* @route '/passkeys/confirm/options'
*/
index.get = (options) => ({
	url: index.url(options),
	method: "get"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:27
* @route '/passkeys/confirm/options'
*/
index.head = (options) => ({
	url: index.url(options),
	method: "head"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:27
* @route '/passkeys/confirm/options'
*/
var indexForm = (options) => ({
	action: index.url(options),
	method: "get"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:27
* @route '/passkeys/confirm/options'
*/
indexForm.get = (options) => ({
	action: index.url(options),
	method: "get"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:27
* @route '/passkeys/confirm/options'
*/
indexForm.head = (options) => ({
	action: index.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
index.form = indexForm;
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:50
* @route '/passkeys/confirm'
*/
var store = (options) => ({
	url: store.url(options),
	method: "post"
});
store.definition = {
	methods: ["post"],
	url: "/passkeys/confirm"
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:50
* @route '/passkeys/confirm'
*/
store.url = (options) => {
	return store.definition.url + queryParams(options);
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:50
* @route '/passkeys/confirm'
*/
store.post = (options) => ({
	url: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:50
* @route '/passkeys/confirm'
*/
var storeForm = (options) => ({
	action: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:50
* @route '/passkeys/confirm'
*/
storeForm.post = (options) => ({
	action: store.url(options),
	method: "post"
});
store.form = storeForm;
//#endregion
//#region resources/js/pages/auth/ConfirmPassword.vue?vue&type=script&setup=true&lang.ts
var ConfirmPassword_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	layout: {
		title: "Confirm password",
		description: "This is a secure area of the application. Please confirm your password before continuing."
	},
	__name: "ConfirmPassword",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Confirm password" }, null, _parent));
			_push(ssrRenderComponent(PasskeyVerify_default, {
				routes: {
					options: unref(index)(),
					submit: unref(store)()
				},
				label: "Confirm with passkey",
				"loading-label": "Confirming...",
				separator: "Or confirm with password"
			}, null, _parent));
			_push(ssrRenderComponent(unref(Form), mergeProps(unref(store$1).form(), { "reset-on-success": "" }), {
				default: withCtx(({ errors, processing }, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="space-y-6"${_scopeId}><div class="grid gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Label_default), { htmlFor: "password" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Password`);
								else return [createTextVNode("Password")];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(ssrRenderComponent(PasswordInput_default, {
							id: "password",
							name: "password",
							class: "mt-1 block w-full",
							required: "",
							autocomplete: "current-password",
							autofocus: ""
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(InputError_default, { message: errors.password }, null, _parent, _scopeId));
						_push(`</div><div class="flex items-center"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Button_default), {
							class: "w-full",
							disabled: processing,
							"data-test": "confirm-password-button"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									if (processing) _push(ssrRenderComponent(unref(Spinner_default), null, null, _parent, _scopeId));
									else _push(`<!---->`);
									_push(` Confirm password `);
								} else return [processing ? (openBlock(), createBlock(unref(Spinner_default), { key: 0 })) : createCommentVNode("", true), createTextVNode(" Confirm password ")];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(`</div></div>`);
					} else return [createVNode("div", { class: "space-y-6" }, [createVNode("div", { class: "grid gap-2" }, [
						createVNode(unref(Label_default), { htmlFor: "password" }, {
							default: withCtx(() => [createTextVNode("Password")]),
							_: 1
						}),
						createVNode(PasswordInput_default, {
							id: "password",
							name: "password",
							class: "mt-1 block w-full",
							required: "",
							autocomplete: "current-password",
							autofocus: ""
						}),
						createVNode(InputError_default, { message: errors.password }, null, 8, ["message"])
					]), createVNode("div", { class: "flex items-center" }, [createVNode(unref(Button_default), {
						class: "w-full",
						disabled: processing,
						"data-test": "confirm-password-button"
					}, {
						default: withCtx(() => [processing ? (openBlock(), createBlock(unref(Spinner_default), { key: 0 })) : createCommentVNode("", true), createTextVNode(" Confirm password ")]),
						_: 2
					}, 1032, ["disabled"])])])];
				}),
				_: 1
			}, _parent));
			_push(`<!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/pages/auth/ConfirmPassword.vue
var _sfc_setup = ConfirmPassword_vue_vue_type_script_setup_true_lang_default.setup;
ConfirmPassword_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/auth/ConfirmPassword.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ConfirmPassword_default = ConfirmPassword_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { ConfirmPassword_default as default };

//# sourceMappingURL=ConfirmPassword-C6uijzza.js.map