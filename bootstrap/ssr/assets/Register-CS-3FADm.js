import { t as Button_default } from "./button-DHJnCoso.js";
import { t as Input_default } from "./input-DEmK1n7Q.js";
import { n as queryParams } from "./wayfinder-BrhwLpUM.js";
import { r as login } from "./routes-DSDfhJr3.js";
import { t as InputError_default } from "./InputError-CH3UMoP5.js";
import { t as Spinner_default } from "./spinner-ntep3OqV.js";
import { t as PasswordInput_default } from "./PasswordInput-D2x5rKA1.js";
import { t as Label_default } from "./label-Fr_CsYDc.js";
import { t as TextLink_default } from "./TextLink-esQBwqY1.js";
import { Form, Head } from "@inertiajs/vue3";
import { createBlock, createCommentVNode, createTextVNode, createVNode, defineComponent, mergeProps, openBlock, unref, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/routes/register/index.ts
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
var store = (options) => ({
	url: store.url(options),
	method: "post"
});
store.definition = {
	methods: ["post"],
	url: "/register"
};
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
store.url = (options) => {
	return store.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
store.post = (options) => ({
	url: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
var storeForm = (options) => ({
	action: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
storeForm.post = (options) => ({
	action: store.url(options),
	method: "post"
});
store.form = storeForm;
Object.assign(store, store);
//#endregion
//#region resources/js/pages/auth/Register.vue?vue&type=script&setup=true&lang.ts
var Register_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	layout: {
		title: "Create an account",
		description: "Enter your details below to create your account"
	},
	__name: "Register",
	__ssrInlineRender: true,
	props: { passwordRules: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Register" }, null, _parent));
			_push(ssrRenderComponent(unref(Form), mergeProps(unref(store).form(), {
				"reset-on-success": ["password", "password_confirmation"],
				class: "flex flex-col gap-6"
			}), {
				default: withCtx(({ errors, processing }, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="grid gap-6"${_scopeId}><div class="grid gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Label_default), { for: "name" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Name`);
								else return [createTextVNode("Name")];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(Input_default), {
							id: "name",
							type: "text",
							required: "",
							autofocus: "",
							tabindex: 1,
							autocomplete: "name",
							name: "name",
							placeholder: "Full name"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(InputError_default, { message: errors.name }, null, _parent, _scopeId));
						_push(`</div><div class="grid gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Label_default), { for: "email" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Email address`);
								else return [createTextVNode("Email address")];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(Input_default), {
							id: "email",
							type: "email",
							required: "",
							tabindex: 2,
							autocomplete: "email",
							name: "email",
							placeholder: "email@example.com"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(InputError_default, { message: errors.email }, null, _parent, _scopeId));
						_push(`</div><div class="grid gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Label_default), { for: "password" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Password`);
								else return [createTextVNode("Password")];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(ssrRenderComponent(PasswordInput_default, {
							id: "password",
							required: "",
							tabindex: 3,
							autocomplete: "new-password",
							name: "password",
							placeholder: "Password",
							passwordrules: __props.passwordRules
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(InputError_default, { message: errors.password }, null, _parent, _scopeId));
						_push(`</div><div class="grid gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Label_default), { for: "password_confirmation" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Confirm password`);
								else return [createTextVNode("Confirm password")];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(ssrRenderComponent(PasswordInput_default, {
							id: "password_confirmation",
							required: "",
							tabindex: 4,
							autocomplete: "new-password",
							name: "password_confirmation",
							placeholder: "Confirm password",
							passwordrules: __props.passwordRules
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(InputError_default, { message: errors.password_confirmation }, null, _parent, _scopeId));
						_push(`</div>`);
						_push(ssrRenderComponent(unref(Button_default), {
							type: "submit",
							class: "mt-2 w-full",
							tabindex: "5",
							disabled: processing,
							"data-test": "register-user-button"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									if (processing) _push(ssrRenderComponent(unref(Spinner_default), null, null, _parent, _scopeId));
									else _push(`<!---->`);
									_push(` Create account `);
								} else return [processing ? (openBlock(), createBlock(unref(Spinner_default), { key: 0 })) : createCommentVNode("", true), createTextVNode(" Create account ")];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(`</div><div class="text-center text-sm text-muted-foreground"${_scopeId}> Already have an account? `);
						_push(ssrRenderComponent(TextLink_default, {
							href: unref(login)(),
							class: "underline underline-offset-4",
							tabindex: 6
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Log in`);
								else return [createTextVNode("Log in")];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "grid gap-6" }, [
						createVNode("div", { class: "grid gap-2" }, [
							createVNode(unref(Label_default), { for: "name" }, {
								default: withCtx(() => [createTextVNode("Name")]),
								_: 1
							}),
							createVNode(unref(Input_default), {
								id: "name",
								type: "text",
								required: "",
								autofocus: "",
								tabindex: 1,
								autocomplete: "name",
								name: "name",
								placeholder: "Full name"
							}),
							createVNode(InputError_default, { message: errors.name }, null, 8, ["message"])
						]),
						createVNode("div", { class: "grid gap-2" }, [
							createVNode(unref(Label_default), { for: "email" }, {
								default: withCtx(() => [createTextVNode("Email address")]),
								_: 1
							}),
							createVNode(unref(Input_default), {
								id: "email",
								type: "email",
								required: "",
								tabindex: 2,
								autocomplete: "email",
								name: "email",
								placeholder: "email@example.com"
							}),
							createVNode(InputError_default, { message: errors.email }, null, 8, ["message"])
						]),
						createVNode("div", { class: "grid gap-2" }, [
							createVNode(unref(Label_default), { for: "password" }, {
								default: withCtx(() => [createTextVNode("Password")]),
								_: 1
							}),
							createVNode(PasswordInput_default, {
								id: "password",
								required: "",
								tabindex: 3,
								autocomplete: "new-password",
								name: "password",
								placeholder: "Password",
								passwordrules: __props.passwordRules
							}, null, 8, ["passwordrules"]),
							createVNode(InputError_default, { message: errors.password }, null, 8, ["message"])
						]),
						createVNode("div", { class: "grid gap-2" }, [
							createVNode(unref(Label_default), { for: "password_confirmation" }, {
								default: withCtx(() => [createTextVNode("Confirm password")]),
								_: 1
							}),
							createVNode(PasswordInput_default, {
								id: "password_confirmation",
								required: "",
								tabindex: 4,
								autocomplete: "new-password",
								name: "password_confirmation",
								placeholder: "Confirm password",
								passwordrules: __props.passwordRules
							}, null, 8, ["passwordrules"]),
							createVNode(InputError_default, { message: errors.password_confirmation }, null, 8, ["message"])
						]),
						createVNode(unref(Button_default), {
							type: "submit",
							class: "mt-2 w-full",
							tabindex: "5",
							disabled: processing,
							"data-test": "register-user-button"
						}, {
							default: withCtx(() => [processing ? (openBlock(), createBlock(unref(Spinner_default), { key: 0 })) : createCommentVNode("", true), createTextVNode(" Create account ")]),
							_: 2
						}, 1032, ["disabled"])
					]), createVNode("div", { class: "text-center text-sm text-muted-foreground" }, [createTextVNode(" Already have an account? "), createVNode(TextLink_default, {
						href: unref(login)(),
						class: "underline underline-offset-4",
						tabindex: 6
					}, {
						default: withCtx(() => [createTextVNode("Log in")]),
						_: 1
					}, 8, ["href"])])];
				}),
				_: 1
			}, _parent));
			_push(`<!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/pages/auth/Register.vue
var _sfc_setup = Register_vue_vue_type_script_setup_true_lang_default.setup;
Register_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/auth/Register.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Register_default = Register_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { Register_default as default };

//# sourceMappingURL=Register-CS-3FADm.js.map