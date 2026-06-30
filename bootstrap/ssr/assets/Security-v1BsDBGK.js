import { n as useAppearance } from "./useAppearance-DAHt6sku.js";
import { n as cn, t as Button_default } from "./button-DHJnCoso.js";
import { t as Input_default } from "./input-DEmK1n7Q.js";
import { n as queryParams, t as applyUrlDefaults } from "./wayfinder-BrhwLpUM.js";
import { t as Heading_default } from "./Heading-DS5EZX3A.js";
import { t as edit$1 } from "./security-C4aqlBsk.js";
import { t as InputError_default } from "./InputError-CH3UMoP5.js";
import { t as Spinner_default } from "./spinner-ntep3OqV.js";
import { t as PasswordInput_default } from "./PasswordInput-D2x5rKA1.js";
import { t as Label_default } from "./label-Fr_CsYDc.js";
import { a as InputOTP_default, i as InputOTPGroup_default, r as InputOTPSlot_default, t as login$1 } from "./login-DvHbKI2G.js";
import { a as Card_default, i as CardContent_default, n as CardHeader_default, r as CardDescription_default, t as CardTitle_default } from "./card-DQ1WCodk.js";
import { a as DialogDescription_default, c as Dialog_default, i as DialogFooter_default, n as DialogTitle_default, o as DialogContent_default, r as DialogHeader_default, s as DialogClose_default, t as DialogTrigger_default } from "./dialog-DANPXjKB.js";
import { Form, Head, router, useHttp } from "@inertiajs/vue3";
import { Fragment, computed, createBlock, createCommentVNode, createTextVNode, createVNode, defineComponent, mergeModels, mergeProps, nextTick, onMounted, onUnmounted, openBlock, ref, renderList, resolveDynamicComponent, toDisplayString, unref, useModel, useSSRContext, useTemplateRef, watch, withCtx } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderStyle, ssrRenderVNode } from "vue/server-renderer";
import { cva } from "class-variance-authority";
import { AlertCircle, Check, Copy, Eye, EyeOff, KeyRound, LockKeyhole, RefreshCw, ScanLine, ShieldCheck, Trash2 } from "@lucide/vue";
import { useClipboard } from "@vueuse/core";
import { usePasskeyRegister } from "@laravel/passkeys/vue";
//#region resources/js/actions/App/Http/Controllers/Settings/SecurityController.ts
/**
* @see \App\Http\Controllers\Settings\SecurityController::edit
* @see app/Http/Controllers/Settings/SecurityController.php:19
* @route '/settings/security'
*/
var edit = (options) => ({
	url: edit.url(options),
	method: "get"
});
edit.definition = {
	methods: ["get", "head"],
	url: "/settings/security"
};
/**
* @see \App\Http\Controllers\Settings\SecurityController::edit
* @see app/Http/Controllers/Settings/SecurityController.php:19
* @route '/settings/security'
*/
edit.url = (options) => {
	return edit.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Settings\SecurityController::edit
* @see app/Http/Controllers/Settings/SecurityController.php:19
* @route '/settings/security'
*/
edit.get = (options) => ({
	url: edit.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Settings\SecurityController::edit
* @see app/Http/Controllers/Settings/SecurityController.php:19
* @route '/settings/security'
*/
edit.head = (options) => ({
	url: edit.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\Settings\SecurityController::edit
* @see app/Http/Controllers/Settings/SecurityController.php:19
* @route '/settings/security'
*/
var editForm = (options) => ({
	action: edit.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Settings\SecurityController::edit
* @see app/Http/Controllers/Settings/SecurityController.php:19
* @route '/settings/security'
*/
editForm.get = (options) => ({
	action: edit.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Settings\SecurityController::edit
* @see app/Http/Controllers/Settings/SecurityController.php:19
* @route '/settings/security'
*/
editForm.head = (options) => ({
	action: edit.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
edit.form = editForm;
/**
* @see \App\Http\Controllers\Settings\SecurityController::update
* @see app/Http/Controllers/Settings/SecurityController.php:56
* @route '/settings/password'
*/
var update = (options) => ({
	url: update.url(options),
	method: "put"
});
update.definition = {
	methods: ["put"],
	url: "/settings/password"
};
/**
* @see \App\Http\Controllers\Settings\SecurityController::update
* @see app/Http/Controllers/Settings/SecurityController.php:56
* @route '/settings/password'
*/
update.url = (options) => {
	return update.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Settings\SecurityController::update
* @see app/Http/Controllers/Settings/SecurityController.php:56
* @route '/settings/password'
*/
update.put = (options) => ({
	url: update.url(options),
	method: "put"
});
/**
* @see \App\Http\Controllers\Settings\SecurityController::update
* @see app/Http/Controllers/Settings/SecurityController.php:56
* @route '/settings/password'
*/
var updateForm = (options) => ({
	action: update.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PUT",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \App\Http\Controllers\Settings\SecurityController::update
* @see app/Http/Controllers/Settings/SecurityController.php:56
* @route '/settings/password'
*/
updateForm.put = (options) => ({
	action: update.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PUT",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
update.form = updateForm;
var SecurityController = {
	edit,
	update
};
//#endregion
//#region resources/js/actions/Laravel/Passkeys/Http/Controllers/PasskeyRegistrationController.ts
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:29
* @route '/user/passkeys/options'
*/
var index = (options) => ({
	url: index.url(options),
	method: "get"
});
index.definition = {
	methods: ["get", "head"],
	url: "/user/passkeys/options"
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:29
* @route '/user/passkeys/options'
*/
index.url = (options) => {
	return index.definition.url + queryParams(options);
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:29
* @route '/user/passkeys/options'
*/
index.get = (options) => ({
	url: index.url(options),
	method: "get"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:29
* @route '/user/passkeys/options'
*/
index.head = (options) => ({
	url: index.url(options),
	method: "head"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:29
* @route '/user/passkeys/options'
*/
var indexForm = (options) => ({
	action: index.url(options),
	method: "get"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:29
* @route '/user/passkeys/options'
*/
indexForm.get = (options) => ({
	action: index.url(options),
	method: "get"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:29
* @route '/user/passkeys/options'
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
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:48
* @route '/user/passkeys'
*/
var store = (options) => ({
	url: store.url(options),
	method: "post"
});
store.definition = {
	methods: ["post"],
	url: "/user/passkeys"
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:48
* @route '/user/passkeys'
*/
store.url = (options) => {
	return store.definition.url + queryParams(options);
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:48
* @route '/user/passkeys'
*/
store.post = (options) => ({
	url: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:48
* @route '/user/passkeys'
*/
var storeForm = (options) => ({
	action: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:48
* @route '/user/passkeys'
*/
storeForm.post = (options) => ({
	action: store.url(options),
	method: "post"
});
store.form = storeForm;
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::destroy
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:68
* @route '/user/passkeys/{passkey}'
*/
var destroy = (args, options) => ({
	url: destroy.url(args, options),
	method: "delete"
});
destroy.definition = {
	methods: ["delete"],
	url: "/user/passkeys/{passkey}"
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::destroy
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:68
* @route '/user/passkeys/{passkey}'
*/
destroy.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { passkey: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { passkey: args.id };
	if (Array.isArray(args)) args = { passkey: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { passkey: typeof args.passkey === "object" ? args.passkey.id : args.passkey };
	return destroy.definition.url.replace("{passkey}", parsedArgs.passkey.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::destroy
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:68
* @route '/user/passkeys/{passkey}'
*/
destroy.delete = (args, options) => ({
	url: destroy.url(args, options),
	method: "delete"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::destroy
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:68
* @route '/user/passkeys/{passkey}'
*/
var destroyForm = (args, options) => ({
	action: destroy.url(args, { [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::destroy
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:68
* @route '/user/passkeys/{passkey}'
*/
destroyForm.delete = (args, options) => ({
	action: destroy.url(args, { [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
destroy.form = destroyForm;
//#endregion
//#region resources/js/components/PasskeyItem.vue?vue&type=script&setup=true&lang.ts
var PasskeyItem_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "PasskeyItem",
	__ssrInlineRender: true,
	props: { passkey: {} },
	emits: ["remove"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const isDeleting = ref(false);
		const handleDelete = () => {
			isDeleting.value = true;
			emit("remove", props.passkey.id, () => {
				isDeleting.value = false;
			});
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between border-b p-4 last:border-b-0" }, _attrs))}><div class="flex items-center gap-4"><div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">`);
			_push(ssrRenderComponent(unref(KeyRound), { class: "h-5 w-5 text-muted-foreground" }, null, _parent));
			_push(`</div><div class="space-y-1"><div class="flex items-center gap-2.5"><p class="font-medium tracking-tight">${ssrInterpolate(__props.passkey.name)}</p>`);
			if (__props.passkey.authenticator) _push(`<span class="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium tracking-wide text-muted-foreground uppercase ring-1 ring-border ring-inset">${ssrInterpolate(__props.passkey.authenticator)}</span>`);
			else _push(`<!---->`);
			_push(`</div><p class="text-sm text-muted-foreground"> Added ${ssrInterpolate(__props.passkey.created_at_diff)} `);
			if (__props.passkey.last_used_at_diff) _push(`<!--[--><span class="mx-1 text-muted-foreground/50">/</span> Last used ${ssrInterpolate(__props.passkey.last_used_at_diff)}<!--]-->`);
			else _push(`<!---->`);
			_push(`</p></div></div>`);
			_push(ssrRenderComponent(unref(Dialog_default), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(DialogTrigger_default), { "as-child": "" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(Button_default), {
									variant: "ghost",
									size: "sm",
									class: "text-destructive hover:bg-destructive/10 hover:text-destructive"
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) {
											_push(ssrRenderComponent(unref(Trash2), { class: "h-4 w-4" }, null, _parent, _scopeId));
											_push(`<span class="sr-only"${_scopeId}>Remove</span>`);
										} else return [createVNode(unref(Trash2), { class: "h-4 w-4" }), createVNode("span", { class: "sr-only" }, "Remove")];
									}),
									_: 1
								}, _parent, _scopeId));
								else return [createVNode(unref(Button_default), {
									variant: "ghost",
									size: "sm",
									class: "text-destructive hover:bg-destructive/10 hover:text-destructive"
								}, {
									default: withCtx(() => [createVNode(unref(Trash2), { class: "h-4 w-4" }), createVNode("span", { class: "sr-only" }, "Remove")]),
									_: 1
								})];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(DialogContent_default), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(DialogTitle_default), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`Remove passkey`);
											else return [createTextVNode("Remove passkey")];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(unref(DialogDescription_default), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(` Are you sure you want to remove the &quot;${ssrInterpolate(__props.passkey.name)}&quot; passkey? You will no longer be able to use it to sign in. `);
											else return [createTextVNode(" Are you sure you want to remove the \"" + toDisplayString(__props.passkey.name) + "\" passkey? You will no longer be able to use it to sign in. ", 1)];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(unref(DialogFooter_default), { class: "gap-2" }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) {
												_push(ssrRenderComponent(unref(DialogClose_default), { "as-child": "" }, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(ssrRenderComponent(unref(Button_default), { variant: "secondary" }, {
															default: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) _push(`Cancel`);
																else return [createTextVNode("Cancel")];
															}),
															_: 1
														}, _parent, _scopeId));
														else return [createVNode(unref(Button_default), { variant: "secondary" }, {
															default: withCtx(() => [createTextVNode("Cancel")]),
															_: 1
														})];
													}),
													_: 1
												}, _parent, _scopeId));
												_push(ssrRenderComponent(unref(Button_default), {
													variant: "destructive",
													disabled: isDeleting.value,
													onClick: handleDelete
												}, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(`${ssrInterpolate(isDeleting.value ? "Removing..." : "Remove passkey")}`);
														else return [createTextVNode(toDisplayString(isDeleting.value ? "Removing..." : "Remove passkey"), 1)];
													}),
													_: 1
												}, _parent, _scopeId));
											} else return [createVNode(unref(DialogClose_default), { "as-child": "" }, {
												default: withCtx(() => [createVNode(unref(Button_default), { variant: "secondary" }, {
													default: withCtx(() => [createTextVNode("Cancel")]),
													_: 1
												})]),
												_: 1
											}), createVNode(unref(Button_default), {
												variant: "destructive",
												disabled: isDeleting.value,
												onClick: handleDelete
											}, {
												default: withCtx(() => [createTextVNode(toDisplayString(isDeleting.value ? "Removing..." : "Remove passkey"), 1)]),
												_: 1
											}, 8, ["disabled"])];
										}),
										_: 1
									}, _parent, _scopeId));
								} else return [
									createVNode(unref(DialogTitle_default), null, {
										default: withCtx(() => [createTextVNode("Remove passkey")]),
										_: 1
									}),
									createVNode(unref(DialogDescription_default), null, {
										default: withCtx(() => [createTextVNode(" Are you sure you want to remove the \"" + toDisplayString(__props.passkey.name) + "\" passkey? You will no longer be able to use it to sign in. ", 1)]),
										_: 1
									}),
									createVNode(unref(DialogFooter_default), { class: "gap-2" }, {
										default: withCtx(() => [createVNode(unref(DialogClose_default), { "as-child": "" }, {
											default: withCtx(() => [createVNode(unref(Button_default), { variant: "secondary" }, {
												default: withCtx(() => [createTextVNode("Cancel")]),
												_: 1
											})]),
											_: 1
										}), createVNode(unref(Button_default), {
											variant: "destructive",
											disabled: isDeleting.value,
											onClick: handleDelete
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(isDeleting.value ? "Removing..." : "Remove passkey"), 1)]),
											_: 1
										}, 8, ["disabled"])]),
										_: 1
									})
								];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(unref(DialogTrigger_default), { "as-child": "" }, {
						default: withCtx(() => [createVNode(unref(Button_default), {
							variant: "ghost",
							size: "sm",
							class: "text-destructive hover:bg-destructive/10 hover:text-destructive"
						}, {
							default: withCtx(() => [createVNode(unref(Trash2), { class: "h-4 w-4" }), createVNode("span", { class: "sr-only" }, "Remove")]),
							_: 1
						})]),
						_: 1
					}), createVNode(unref(DialogContent_default), null, {
						default: withCtx(() => [
							createVNode(unref(DialogTitle_default), null, {
								default: withCtx(() => [createTextVNode("Remove passkey")]),
								_: 1
							}),
							createVNode(unref(DialogDescription_default), null, {
								default: withCtx(() => [createTextVNode(" Are you sure you want to remove the \"" + toDisplayString(__props.passkey.name) + "\" passkey? You will no longer be able to use it to sign in. ", 1)]),
								_: 1
							}),
							createVNode(unref(DialogFooter_default), { class: "gap-2" }, {
								default: withCtx(() => [createVNode(unref(DialogClose_default), { "as-child": "" }, {
									default: withCtx(() => [createVNode(unref(Button_default), { variant: "secondary" }, {
										default: withCtx(() => [createTextVNode("Cancel")]),
										_: 1
									})]),
									_: 1
								}), createVNode(unref(Button_default), {
									variant: "destructive",
									disabled: isDeleting.value,
									onClick: handleDelete
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(isDeleting.value ? "Removing..." : "Remove passkey"), 1)]),
									_: 1
								}, 8, ["disabled"])]),
								_: 1
							})
						]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/components/PasskeyItem.vue
var _sfc_setup$10 = PasskeyItem_vue_vue_type_script_setup_true_lang_default.setup;
PasskeyItem_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/PasskeyItem.vue");
	return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
var PasskeyItem_default = PasskeyItem_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/PasskeyRegister.vue?vue&type=script&setup=true&lang.ts
var PasskeyRegister_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "PasskeyRegister",
	__ssrInlineRender: true,
	emits: ["success"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const getDefaultPasskeyName = () => {
			const ua = navigator.userAgent;
			return [[
				{
					pattern: /Edg|Edge/,
					name: "Edge"
				},
				{
					pattern: /OPR|Opera|OPiOS/,
					name: "Opera"
				},
				{
					pattern: /Firefox|FxiOS/,
					name: "Firefox"
				},
				{
					pattern: /Chrome|CriOS/,
					name: "Chrome"
				},
				{
					pattern: /Safari/,
					name: "Safari"
				}
			].find(({ pattern }) => pattern.test(ua))?.name, [
				{
					pattern: /iPhone/,
					name: "iPhone"
				},
				{
					pattern: /iPad|Macintosh(?=.*Mobile)/,
					name: "iPad"
				},
				{
					pattern: /Android/,
					name: "Android"
				},
				{
					pattern: /Mac/,
					name: "Mac"
				},
				{
					pattern: /Windows/,
					name: "Windows"
				}
			].find(({ pattern }) => pattern.test(ua))?.name].filter(Boolean).join(" on ") || "";
		};
		const name = ref(getDefaultPasskeyName());
		const showForm = ref(false);
		const { register, isLoading, error, isSupported } = usePasskeyRegister({ onSuccess: () => {
			name.value = "";
			showForm.value = false;
			emit("success");
		} });
		const handleCancel = () => {
			showForm.value = false;
			name.value = "";
		};
		return (_ctx, _push, _parent, _attrs) => {
			if (!unref(isSupported)) _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-sm text-muted-foreground" }, _attrs))}> Passkeys are not supported in this browser. </div>`);
			else if (!showForm.value) _push(ssrRenderComponent(unref(Button_default), mergeProps({
				variant: "outline",
				onClick: ($event) => showForm.value = true
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Add passkey `);
					else return [createTextVNode(" Add passkey ")];
				}),
				_: 1
			}, _parent));
			else {
				_push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-4 rounded-lg border border-border bg-muted/50 p-4" }, _attrs))}><div class="grid gap-2">`);
				_push(ssrRenderComponent(unref(Label_default), { for: "passkey-name" }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Passkey name`);
						else return [createTextVNode("Passkey name")];
					}),
					_: 1
				}, _parent));
				_push(ssrRenderComponent(unref(Input_default), {
					id: "passkey-name",
					type: "text",
					modelValue: name.value,
					"onUpdate:modelValue": ($event) => name.value = $event,
					placeholder: "e.g., MacBook Pro, iPhone",
					class: "mt-1 block w-full border-foreground/20",
					autofocus: ""
				}, null, _parent));
				_push(`<p class="text-xs text-muted-foreground"> A name helps you identify this passkey later. </p></div>`);
				if (unref(error)) _push(ssrRenderComponent(InputError_default, { message: unref(error) }, null, _parent));
				else _push(`<!---->`);
				_push(`<div class="flex gap-2">`);
				_push(ssrRenderComponent(unref(Button_default), {
					type: "submit",
					disabled: unref(isLoading) || !name.value.trim()
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(unref(isLoading) ? "Registering..." : "Register passkey")}`);
						else return [createTextVNode(toDisplayString(unref(isLoading) ? "Registering..." : "Register passkey"), 1)];
					}),
					_: 1
				}, _parent));
				_push(ssrRenderComponent(unref(Button_default), {
					type: "button",
					variant: "ghost",
					onClick: handleCancel
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Cancel `);
						else return [createTextVNode(" Cancel ")];
					}),
					_: 1
				}, _parent));
				_push(`</div></form>`);
			}
		};
	}
});
//#endregion
//#region resources/js/components/PasskeyRegister.vue
var _sfc_setup$9 = PasskeyRegister_vue_vue_type_script_setup_true_lang_default.setup;
PasskeyRegister_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/PasskeyRegister.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var PasskeyRegister_default = PasskeyRegister_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ManagePasskeys.vue?vue&type=script&setup=true&lang.ts
var ManagePasskeys_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "ManagePasskeys",
	__ssrInlineRender: true,
	props: {
		canManagePasskeys: {
			type: Boolean,
			default: false
		},
		passkeys: { default: () => [] }
	},
	setup(__props) {
		const handleDelete = (id, onError) => {
			router.delete(destroy.url(id), {
				preserveScroll: true,
				onError
			});
		};
		const handleRegisterSuccess = () => {
			router.reload();
		};
		return (_ctx, _push, _parent, _attrs) => {
			if (__props.canManagePasskeys) {
				_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
				_push(ssrRenderComponent(Heading_default, {
					variant: "small",
					title: "Passkeys",
					description: "Manage your passkeys for passwordless sign-in"
				}, null, _parent));
				_push(`<div class="overflow-hidden rounded-lg border border-border">`);
				if (__props.passkeys.length) {
					_push(`<!--[-->`);
					ssrRenderList(__props.passkeys, (passkey) => {
						_push(ssrRenderComponent(PasskeyItem_default, {
							key: passkey.id,
							passkey,
							onRemove: handleDelete
						}, null, _parent));
					});
					_push(`<!--]-->`);
				} else {
					_push(`<div class="p-8 text-center"><div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">`);
					_push(ssrRenderComponent(unref(KeyRound), { class: "h-7 w-7 text-muted-foreground" }, null, _parent));
					_push(`</div><p class="font-medium">No passkeys yet</p><p class="mt-1 text-sm text-muted-foreground"> Add a passkey to sign in without a password </p></div>`);
				}
				_push(`</div>`);
				_push(ssrRenderComponent(PasskeyRegister_default, { onSuccess: handleRegisterSuccess }, null, _parent));
				_push(`</div>`);
			} else _push(`<!---->`);
		};
	}
});
//#endregion
//#region resources/js/components/ManagePasskeys.vue
var _sfc_setup$8 = ManagePasskeys_vue_vue_type_script_setup_true_lang_default.setup;
ManagePasskeys_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ManagePasskeys.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var ManagePasskeys_default = ManagePasskeys_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/alert/Alert.vue?vue&type=script&setup=true&lang.ts
var Alert_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "Alert",
	__ssrInlineRender: true,
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		variant: {}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				"data-slot": "alert",
				class: unref(cn)(unref(alertVariants)({ variant: __props.variant }), props.class),
				role: "alert"
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/alert/Alert.vue
var _sfc_setup$7 = Alert_vue_vue_type_script_setup_true_lang_default.setup;
Alert_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/alert/Alert.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var Alert_default = Alert_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/alert/AlertDescription.vue?vue&type=script&setup=true&lang.ts
var AlertDescription_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AlertDescription",
	__ssrInlineRender: true,
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				"data-slot": "alert-description",
				class: unref(cn)("text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/alert/AlertDescription.vue
var _sfc_setup$6 = AlertDescription_vue_vue_type_script_setup_true_lang_default.setup;
AlertDescription_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/alert/AlertDescription.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var AlertDescription_default = AlertDescription_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/alert/AlertTitle.vue?vue&type=script&setup=true&lang.ts
var AlertTitle_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AlertTitle",
	__ssrInlineRender: true,
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				"data-slot": "alert-title",
				class: unref(cn)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/alert/AlertTitle.vue
var _sfc_setup$5 = AlertTitle_vue_vue_type_script_setup_true_lang_default.setup;
AlertTitle_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/alert/AlertTitle.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var AlertTitle_default = AlertTitle_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/alert/index.ts
var alertVariants = cva("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
	variants: { variant: {
		default: "bg-card text-card-foreground",
		destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
	} },
	defaultVariants: { variant: "default" }
});
//#endregion
//#region resources/js/components/AlertError.vue?vue&type=script&setup=true&lang.ts
var AlertError_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AlertError",
	__ssrInlineRender: true,
	props: {
		errors: {},
		title: { default: "Something went wrong." }
	},
	setup(__props) {
		const props = __props;
		const uniqueErrors = computed(() => Array.from(new Set(props.errors)));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Alert_default), mergeProps({ variant: "destructive" }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(AlertCircle), { class: "size-4" }, null, _parent, _scopeId));
						_push(ssrRenderComponent(unref(AlertTitle_default), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(__props.title)}`);
								else return [createTextVNode(toDisplayString(__props.title), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(AlertDescription_default), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<ul class="list-inside list-disc text-sm"${_scopeId}><!--[-->`);
									ssrRenderList(uniqueErrors.value, (error, index) => {
										_push(`<li${_scopeId}>${ssrInterpolate(error)}</li>`);
									});
									_push(`<!--]--></ul>`);
								} else return [createVNode("ul", { class: "list-inside list-disc text-sm" }, [(openBlock(true), createBlock(Fragment, null, renderList(uniqueErrors.value, (error, index) => {
									return openBlock(), createBlock("li", { key: index }, toDisplayString(error), 1);
								}), 128))])];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						createVNode(unref(AlertCircle), { class: "size-4" }),
						createVNode(unref(AlertTitle_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
							_: 1
						}),
						createVNode(unref(AlertDescription_default), null, {
							default: withCtx(() => [createVNode("ul", { class: "list-inside list-disc text-sm" }, [(openBlock(true), createBlock(Fragment, null, renderList(uniqueErrors.value, (error, index) => {
								return openBlock(), createBlock("li", { key: index }, toDisplayString(error), 1);
							}), 128))])]),
							_: 1
						})
					];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/AlertError.vue
var _sfc_setup$4 = AlertError_vue_vue_type_script_setup_true_lang_default.setup;
AlertError_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/AlertError.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var AlertError_default = AlertError_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/routes/two-factor/index.ts
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:41
* @route '/two-factor-challenge'
*/
var login = (options) => ({
	url: login.url(options),
	method: "get"
});
login.definition = {
	methods: ["get", "head"],
	url: "/two-factor-challenge"
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:41
* @route '/two-factor-challenge'
*/
login.url = (options) => {
	return login.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:41
* @route '/two-factor-challenge'
*/
login.get = (options) => ({
	url: login.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:41
* @route '/two-factor-challenge'
*/
login.head = (options) => ({
	url: login.url(options),
	method: "head"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:41
* @route '/two-factor-challenge'
*/
var loginForm = (options) => ({
	action: login.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:41
* @route '/two-factor-challenge'
*/
loginForm.get = (options) => ({
	action: login.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:41
* @route '/two-factor-challenge'
*/
loginForm.head = (options) => ({
	action: login.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
login.form = loginForm;
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::enable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:21
* @route '/user/two-factor-authentication'
*/
var enable = (options) => ({
	url: enable.url(options),
	method: "post"
});
enable.definition = {
	methods: ["post"],
	url: "/user/two-factor-authentication"
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::enable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:21
* @route '/user/two-factor-authentication'
*/
enable.url = (options) => {
	return enable.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::enable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:21
* @route '/user/two-factor-authentication'
*/
enable.post = (options) => ({
	url: enable.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::enable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:21
* @route '/user/two-factor-authentication'
*/
var enableForm = (options) => ({
	action: enable.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::enable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:21
* @route '/user/two-factor-authentication'
*/
enableForm.post = (options) => ({
	action: enable.url(options),
	method: "post"
});
enable.form = enableForm;
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
* @route '/user/confirmed-two-factor-authentication'
*/
var confirm = (options) => ({
	url: confirm.url(options),
	method: "post"
});
confirm.definition = {
	methods: ["post"],
	url: "/user/confirmed-two-factor-authentication"
};
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
* @route '/user/confirmed-two-factor-authentication'
*/
confirm.url = (options) => {
	return confirm.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
* @route '/user/confirmed-two-factor-authentication'
*/
confirm.post = (options) => ({
	url: confirm.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
* @route '/user/confirmed-two-factor-authentication'
*/
var confirmForm = (options) => ({
	action: confirm.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
* @route '/user/confirmed-two-factor-authentication'
*/
confirmForm.post = (options) => ({
	action: confirm.url(options),
	method: "post"
});
confirm.form = confirmForm;
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::disable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:35
* @route '/user/two-factor-authentication'
*/
var disable = (options) => ({
	url: disable.url(options),
	method: "delete"
});
disable.definition = {
	methods: ["delete"],
	url: "/user/two-factor-authentication"
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::disable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:35
* @route '/user/two-factor-authentication'
*/
disable.url = (options) => {
	return disable.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::disable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:35
* @route '/user/two-factor-authentication'
*/
disable.delete = (options) => ({
	url: disable.url(options),
	method: "delete"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::disable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:35
* @route '/user/two-factor-authentication'
*/
var disableForm = (options) => ({
	action: disable.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::disable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:35
* @route '/user/two-factor-authentication'
*/
disableForm.delete = (options) => ({
	action: disable.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
disable.form = disableForm;
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
var qrCode = (options) => ({
	url: qrCode.url(options),
	method: "get"
});
qrCode.definition = {
	methods: ["get", "head"],
	url: "/user/two-factor-qr-code"
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
qrCode.url = (options) => {
	return qrCode.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
qrCode.get = (options) => ({
	url: qrCode.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
qrCode.head = (options) => ({
	url: qrCode.url(options),
	method: "head"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
var qrCodeForm = (options) => ({
	action: qrCode.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
qrCodeForm.get = (options) => ({
	action: qrCode.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
qrCodeForm.head = (options) => ({
	action: qrCode.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
qrCode.form = qrCodeForm;
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
var secretKey = (options) => ({
	url: secretKey.url(options),
	method: "get"
});
secretKey.definition = {
	methods: ["get", "head"],
	url: "/user/two-factor-secret-key"
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
secretKey.url = (options) => {
	return secretKey.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
secretKey.get = (options) => ({
	url: secretKey.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
secretKey.head = (options) => ({
	url: secretKey.url(options),
	method: "head"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
var secretKeyForm = (options) => ({
	action: secretKey.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
secretKeyForm.get = (options) => ({
	action: secretKey.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
secretKeyForm.head = (options) => ({
	action: secretKey.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
secretKey.form = secretKeyForm;
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
var recoveryCodes = (options) => ({
	url: recoveryCodes.url(options),
	method: "get"
});
recoveryCodes.definition = {
	methods: ["get", "head"],
	url: "/user/two-factor-recovery-codes"
};
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
recoveryCodes.url = (options) => {
	return recoveryCodes.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
recoveryCodes.get = (options) => ({
	url: recoveryCodes.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
recoveryCodes.head = (options) => ({
	url: recoveryCodes.url(options),
	method: "head"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
var recoveryCodesForm = (options) => ({
	action: recoveryCodes.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
recoveryCodesForm.get = (options) => ({
	action: recoveryCodes.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
recoveryCodesForm.head = (options) => ({
	action: recoveryCodes.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
recoveryCodes.form = recoveryCodesForm;
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::regenerateRecoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
* @route '/user/two-factor-recovery-codes'
*/
var regenerateRecoveryCodes = (options) => ({
	url: regenerateRecoveryCodes.url(options),
	method: "post"
});
regenerateRecoveryCodes.definition = {
	methods: ["post"],
	url: "/user/two-factor-recovery-codes"
};
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::regenerateRecoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
* @route '/user/two-factor-recovery-codes'
*/
regenerateRecoveryCodes.url = (options) => {
	return regenerateRecoveryCodes.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::regenerateRecoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
* @route '/user/two-factor-recovery-codes'
*/
regenerateRecoveryCodes.post = (options) => ({
	url: regenerateRecoveryCodes.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::regenerateRecoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
* @route '/user/two-factor-recovery-codes'
*/
var regenerateRecoveryCodesForm = (options) => ({
	action: regenerateRecoveryCodes.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::regenerateRecoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
* @route '/user/two-factor-recovery-codes'
*/
regenerateRecoveryCodesForm.post = (options) => ({
	action: regenerateRecoveryCodes.url(options),
	method: "post"
});
regenerateRecoveryCodes.form = regenerateRecoveryCodesForm;
Object.assign(login, login$1), Object.assign(enable, enable), Object.assign(confirm, confirm), Object.assign(disable, disable), Object.assign(qrCode, qrCode), Object.assign(secretKey, secretKey), Object.assign(recoveryCodes, recoveryCodes), Object.assign(regenerateRecoveryCodes, regenerateRecoveryCodes);
//#endregion
//#region resources/js/composables/useTwoFactorAuth.ts
var errors = ref([]);
var manualSetupKey = ref(null);
var qrCodeSvg = ref(null);
var recoveryCodesList = ref([]);
var hasSetupData = computed(() => qrCodeSvg.value !== null && manualSetupKey.value !== null);
var useTwoFactorAuth = () => {
	const http = useHttp();
	const fetchQrCode = async () => {
		try {
			const { svg } = await http.submit(qrCode());
			qrCodeSvg.value = svg;
		} catch {
			errors.value.push("Failed to fetch QR code");
			qrCodeSvg.value = null;
		}
	};
	const fetchSetupKey = async () => {
		try {
			const { secretKey: key } = await http.submit(secretKey());
			manualSetupKey.value = key;
		} catch {
			errors.value.push("Failed to fetch a setup key");
			manualSetupKey.value = null;
		}
	};
	const clearSetupData = () => {
		manualSetupKey.value = null;
		qrCodeSvg.value = null;
		clearErrors();
	};
	const clearErrors = () => {
		errors.value = [];
	};
	const clearTwoFactorAuthData = () => {
		clearSetupData();
		clearErrors();
		recoveryCodesList.value = [];
	};
	const fetchRecoveryCodes = async () => {
		try {
			clearErrors();
			recoveryCodesList.value = await http.submit(recoveryCodes());
		} catch {
			errors.value.push("Failed to fetch recovery codes");
			recoveryCodesList.value = [];
		}
	};
	const fetchSetupData = async () => {
		try {
			clearErrors();
			await Promise.all([fetchQrCode(), fetchSetupKey()]);
		} catch {
			qrCodeSvg.value = null;
			manualSetupKey.value = null;
		}
	};
	return {
		qrCodeSvg,
		manualSetupKey,
		recoveryCodesList,
		errors,
		hasSetupData,
		clearSetupData,
		clearErrors,
		clearTwoFactorAuthData,
		fetchQrCode,
		fetchSetupKey,
		fetchSetupData,
		fetchRecoveryCodes
	};
};
//#endregion
//#region resources/js/components/TwoFactorRecoveryCodes.vue?vue&type=script&setup=true&lang.ts
var TwoFactorRecoveryCodes_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "TwoFactorRecoveryCodes",
	__ssrInlineRender: true,
	setup(__props) {
		const { recoveryCodesList, fetchRecoveryCodes, errors } = useTwoFactorAuth();
		const isRecoveryCodesVisible = ref(false);
		const recoveryCodeSectionRef = useTemplateRef("recoveryCodeSectionRef");
		const toggleRecoveryCodesVisibility = async () => {
			if (!isRecoveryCodesVisible.value && !recoveryCodesList.value.length) await fetchRecoveryCodes();
			isRecoveryCodesVisible.value = !isRecoveryCodesVisible.value;
			if (isRecoveryCodesVisible.value) {
				await nextTick();
				recoveryCodeSectionRef.value?.scrollIntoView({ behavior: "smooth" });
			}
		};
		onMounted(async () => {
			if (!recoveryCodesList.value.length) await fetchRecoveryCodes();
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Card_default), mergeProps({ class: "w-full" }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(CardHeader_default), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(CardTitle_default), { class: "flex gap-3" }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) {
												_push(ssrRenderComponent(unref(LockKeyhole), { class: "size-4" }, null, _parent, _scopeId));
												_push(`2FA recovery codes `);
											} else return [createVNode(unref(LockKeyhole), { class: "size-4" }), createTextVNode("2FA recovery codes ")];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(unref(CardDescription_default), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(` Recovery codes let you regain access if you lose your 2FA device. Store them in a secure password manager. `);
											else return [createTextVNode(" Recovery codes let you regain access if you lose your 2FA device. Store them in a secure password manager. ")];
										}),
										_: 1
									}, _parent, _scopeId));
								} else return [createVNode(unref(CardTitle_default), { class: "flex gap-3" }, {
									default: withCtx(() => [createVNode(unref(LockKeyhole), { class: "size-4" }), createTextVNode("2FA recovery codes ")]),
									_: 1
								}), createVNode(unref(CardDescription_default), null, {
									default: withCtx(() => [createTextVNode(" Recovery codes let you regain access if you lose your 2FA device. Store them in a secure password manager. ")]),
									_: 1
								})];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(CardContent_default), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<div class="flex flex-col gap-3 select-none sm:flex-row sm:items-center sm:justify-between"${_scopeId}>`);
									_push(ssrRenderComponent(unref(Button_default), {
										onClick: toggleRecoveryCodesVisibility,
										class: "w-fit"
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) {
												ssrRenderVNode(_push, createVNode(resolveDynamicComponent(isRecoveryCodesVisible.value ? unref(EyeOff) : unref(Eye)), { class: "size-4" }, null), _parent, _scopeId);
												_push(` ${ssrInterpolate(isRecoveryCodesVisible.value ? "Hide" : "View")} recovery codes `);
											} else return [(openBlock(), createBlock(resolveDynamicComponent(isRecoveryCodesVisible.value ? unref(EyeOff) : unref(Eye)), { class: "size-4" })), createTextVNode(" " + toDisplayString(isRecoveryCodesVisible.value ? "Hide" : "View") + " recovery codes ", 1)];
										}),
										_: 1
									}, _parent, _scopeId));
									if (isRecoveryCodesVisible.value && unref(recoveryCodesList).length) _push(ssrRenderComponent(unref(Form), mergeProps(unref(regenerateRecoveryCodes).form(), {
										method: "post",
										options: { preserveScroll: true },
										onSuccess: unref(fetchRecoveryCodes)
									}), {
										default: withCtx(({ processing }, _push, _parent, _scopeId) => {
											if (_push) _push(ssrRenderComponent(unref(Button_default), {
												variant: "secondary",
												type: "submit",
												disabled: processing
											}, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) {
														_push(ssrRenderComponent(unref(RefreshCw), null, null, _parent, _scopeId));
														_push(` Regenerate codes `);
													} else return [createVNode(unref(RefreshCw)), createTextVNode(" Regenerate codes ")];
												}),
												_: 2
											}, _parent, _scopeId));
											else return [createVNode(unref(Button_default), {
												variant: "secondary",
												type: "submit",
												disabled: processing
											}, {
												default: withCtx(() => [createVNode(unref(RefreshCw)), createTextVNode(" Regenerate codes ")]),
												_: 1
											}, 8, ["disabled"])];
										}),
										_: 1
									}, _parent, _scopeId));
									else _push(`<!---->`);
									_push(`</div><div class="${ssrRenderClass(["relative overflow-hidden transition-all duration-300", isRecoveryCodesVisible.value ? "h-auto opacity-100" : "h-0 opacity-0"])}"${_scopeId}>`);
									if (unref(errors)?.length) {
										_push(`<div class="mt-6"${_scopeId}>`);
										_push(ssrRenderComponent(AlertError_default, { errors: unref(errors) }, null, _parent, _scopeId));
										_push(`</div>`);
									} else {
										_push(`<div class="mt-3 space-y-3"${_scopeId}><div class="grid gap-1 rounded-lg bg-muted p-4 font-mono text-sm"${_scopeId}>`);
										if (!unref(recoveryCodesList).length) {
											_push(`<div class="space-y-2"${_scopeId}><!--[-->`);
											ssrRenderList(8, (n) => {
												_push(`<div class="h-4 animate-pulse rounded bg-muted-foreground/20"${_scopeId}></div>`);
											});
											_push(`<!--]--></div>`);
										} else {
											_push(`<!--[-->`);
											ssrRenderList(unref(recoveryCodesList), (code, index) => {
												_push(`<div${_scopeId}>${ssrInterpolate(code)}</div>`);
											});
											_push(`<!--]-->`);
										}
										_push(`</div><p class="text-xs text-muted-foreground select-none"${_scopeId}> Each recovery code can be used once to access your account and will be removed after use. If you need more, click <span class="font-bold"${_scopeId}>Regenerate codes</span> above. </p></div>`);
									}
									_push(`</div>`);
								} else return [createVNode("div", { class: "flex flex-col gap-3 select-none sm:flex-row sm:items-center sm:justify-between" }, [createVNode(unref(Button_default), {
									onClick: toggleRecoveryCodesVisibility,
									class: "w-fit"
								}, {
									default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(isRecoveryCodesVisible.value ? unref(EyeOff) : unref(Eye)), { class: "size-4" })), createTextVNode(" " + toDisplayString(isRecoveryCodesVisible.value ? "Hide" : "View") + " recovery codes ", 1)]),
									_: 1
								}), isRecoveryCodesVisible.value && unref(recoveryCodesList).length ? (openBlock(), createBlock(unref(Form), mergeProps({ key: 0 }, unref(regenerateRecoveryCodes).form(), {
									method: "post",
									options: { preserveScroll: true },
									onSuccess: unref(fetchRecoveryCodes)
								}), {
									default: withCtx(({ processing }) => [createVNode(unref(Button_default), {
										variant: "secondary",
										type: "submit",
										disabled: processing
									}, {
										default: withCtx(() => [createVNode(unref(RefreshCw)), createTextVNode(" Regenerate codes ")]),
										_: 1
									}, 8, ["disabled"])]),
									_: 1
								}, 16, ["onSuccess"])) : createCommentVNode("", true)]), createVNode("div", { class: ["relative overflow-hidden transition-all duration-300", isRecoveryCodesVisible.value ? "h-auto opacity-100" : "h-0 opacity-0"] }, [unref(errors)?.length ? (openBlock(), createBlock("div", {
									key: 0,
									class: "mt-6"
								}, [createVNode(AlertError_default, { errors: unref(errors) }, null, 8, ["errors"])])) : (openBlock(), createBlock("div", {
									key: 1,
									class: "mt-3 space-y-3"
								}, [createVNode("div", {
									ref_key: "recoveryCodeSectionRef",
									ref: recoveryCodeSectionRef,
									class: "grid gap-1 rounded-lg bg-muted p-4 font-mono text-sm"
								}, [!unref(recoveryCodesList).length ? (openBlock(), createBlock("div", {
									key: 0,
									class: "space-y-2"
								}, [(openBlock(), createBlock(Fragment, null, renderList(8, (n) => {
									return createVNode("div", {
										key: n,
										class: "h-4 animate-pulse rounded bg-muted-foreground/20"
									});
								}), 64))])) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(recoveryCodesList), (code, index) => {
									return openBlock(), createBlock("div", { key: index }, toDisplayString(code), 1);
								}), 128))], 512), createVNode("p", { class: "text-xs text-muted-foreground select-none" }, [
									createTextVNode(" Each recovery code can be used once to access your account and will be removed after use. If you need more, click "),
									createVNode("span", { class: "font-bold" }, "Regenerate codes"),
									createTextVNode(" above. ")
								])]))], 2)];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(unref(CardHeader_default), null, {
						default: withCtx(() => [createVNode(unref(CardTitle_default), { class: "flex gap-3" }, {
							default: withCtx(() => [createVNode(unref(LockKeyhole), { class: "size-4" }), createTextVNode("2FA recovery codes ")]),
							_: 1
						}), createVNode(unref(CardDescription_default), null, {
							default: withCtx(() => [createTextVNode(" Recovery codes let you regain access if you lose your 2FA device. Store them in a secure password manager. ")]),
							_: 1
						})]),
						_: 1
					}), createVNode(unref(CardContent_default), null, {
						default: withCtx(() => [createVNode("div", { class: "flex flex-col gap-3 select-none sm:flex-row sm:items-center sm:justify-between" }, [createVNode(unref(Button_default), {
							onClick: toggleRecoveryCodesVisibility,
							class: "w-fit"
						}, {
							default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(isRecoveryCodesVisible.value ? unref(EyeOff) : unref(Eye)), { class: "size-4" })), createTextVNode(" " + toDisplayString(isRecoveryCodesVisible.value ? "Hide" : "View") + " recovery codes ", 1)]),
							_: 1
						}), isRecoveryCodesVisible.value && unref(recoveryCodesList).length ? (openBlock(), createBlock(unref(Form), mergeProps({ key: 0 }, unref(regenerateRecoveryCodes).form(), {
							method: "post",
							options: { preserveScroll: true },
							onSuccess: unref(fetchRecoveryCodes)
						}), {
							default: withCtx(({ processing }) => [createVNode(unref(Button_default), {
								variant: "secondary",
								type: "submit",
								disabled: processing
							}, {
								default: withCtx(() => [createVNode(unref(RefreshCw)), createTextVNode(" Regenerate codes ")]),
								_: 1
							}, 8, ["disabled"])]),
							_: 1
						}, 16, ["onSuccess"])) : createCommentVNode("", true)]), createVNode("div", { class: ["relative overflow-hidden transition-all duration-300", isRecoveryCodesVisible.value ? "h-auto opacity-100" : "h-0 opacity-0"] }, [unref(errors)?.length ? (openBlock(), createBlock("div", {
							key: 0,
							class: "mt-6"
						}, [createVNode(AlertError_default, { errors: unref(errors) }, null, 8, ["errors"])])) : (openBlock(), createBlock("div", {
							key: 1,
							class: "mt-3 space-y-3"
						}, [createVNode("div", {
							ref_key: "recoveryCodeSectionRef",
							ref: recoveryCodeSectionRef,
							class: "grid gap-1 rounded-lg bg-muted p-4 font-mono text-sm"
						}, [!unref(recoveryCodesList).length ? (openBlock(), createBlock("div", {
							key: 0,
							class: "space-y-2"
						}, [(openBlock(), createBlock(Fragment, null, renderList(8, (n) => {
							return createVNode("div", {
								key: n,
								class: "h-4 animate-pulse rounded bg-muted-foreground/20"
							});
						}), 64))])) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(recoveryCodesList), (code, index) => {
							return openBlock(), createBlock("div", { key: index }, toDisplayString(code), 1);
						}), 128))], 512), createVNode("p", { class: "text-xs text-muted-foreground select-none" }, [
							createTextVNode(" Each recovery code can be used once to access your account and will be removed after use. If you need more, click "),
							createVNode("span", { class: "font-bold" }, "Regenerate codes"),
							createTextVNode(" above. ")
						])]))], 2)]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/TwoFactorRecoveryCodes.vue
var _sfc_setup$3 = TwoFactorRecoveryCodes_vue_vue_type_script_setup_true_lang_default.setup;
TwoFactorRecoveryCodes_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/TwoFactorRecoveryCodes.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var TwoFactorRecoveryCodes_default = TwoFactorRecoveryCodes_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/TwoFactorSetupModal.vue?vue&type=script&setup=true&lang.ts
var TwoFactorSetupModal_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "TwoFactorSetupModal",
	__ssrInlineRender: true,
	props: /*@__PURE__*/ mergeModels({
		requiresConfirmation: { type: Boolean },
		twoFactorEnabled: { type: Boolean }
	}, {
		"isOpen": { type: Boolean },
		"isOpenModifiers": {}
	}),
	emits: ["update:isOpen"],
	setup(__props) {
		const { resolvedAppearance } = useAppearance();
		const props = __props;
		const isOpen = useModel(__props, "isOpen");
		const { copy, copied } = useClipboard();
		const { qrCodeSvg, manualSetupKey, clearSetupData, fetchSetupData, errors } = useTwoFactorAuth();
		const showVerificationStep = ref(false);
		const code = ref("");
		const pinInputContainerRef = useTemplateRef("pinInputContainerRef");
		const modalConfig = computed(() => {
			if (props.twoFactorEnabled) return {
				title: "Two-factor authentication enabled",
				description: "Two-factor authentication is now enabled. Scan the QR code or enter the setup key in your authenticator app.",
				buttonText: "Close"
			};
			if (showVerificationStep.value) return {
				title: "Verify authentication code",
				description: "Enter the 6-digit code from your authenticator app",
				buttonText: "Continue"
			};
			return {
				title: "Enable two-factor authentication",
				description: "To finish enabling two-factor authentication, scan the QR code or enter the setup key in your authenticator app",
				buttonText: "Continue"
			};
		});
		const handleModalNextStep = () => {
			if (props.requiresConfirmation) {
				showVerificationStep.value = true;
				nextTick(() => {
					pinInputContainerRef.value?.querySelector("input")?.focus();
				});
				return;
			}
			clearSetupData();
			isOpen.value = false;
		};
		const resetModalState = () => {
			if (props.twoFactorEnabled) clearSetupData();
			showVerificationStep.value = false;
			code.value = "";
		};
		watch(() => isOpen.value, async (isOpen) => {
			if (!isOpen) {
				resetModalState();
				return;
			}
			if (!qrCodeSvg.value) await fetchSetupData();
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Dialog_default), mergeProps({
				open: isOpen.value,
				"onUpdate:open": ($event) => isOpen.value = $event
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(DialogContent_default), { class: "sm:max-w-md" }, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(ssrRenderComponent(unref(DialogHeader_default), { class: "flex items-center justify-center" }, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) {
											_push(`<div class="mb-3 w-auto rounded-full border border-border bg-card p-0.5 shadow-sm"${_scopeId}><div class="relative overflow-hidden rounded-full border border-border bg-muted p-2.5"${_scopeId}><div class="absolute inset-0 grid grid-cols-5 opacity-50"${_scopeId}><!--[-->`);
											ssrRenderList(5, (i) => {
												_push(`<div class="border-r border-border last:border-r-0"${_scopeId}></div>`);
											});
											_push(`<!--]--></div><div class="absolute inset-0 grid grid-rows-5 opacity-50"${_scopeId}><!--[-->`);
											ssrRenderList(5, (i) => {
												_push(`<div class="border-b border-border last:border-b-0"${_scopeId}></div>`);
											});
											_push(`<!--]--></div>`);
											_push(ssrRenderComponent(unref(ScanLine), { class: "relative z-20 size-6 text-foreground" }, null, _parent, _scopeId));
											_push(`</div></div>`);
											_push(ssrRenderComponent(unref(DialogTitle_default), null, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(`${ssrInterpolate(modalConfig.value.title)}`);
													else return [createTextVNode(toDisplayString(modalConfig.value.title), 1)];
												}),
												_: 1
											}, _parent, _scopeId));
											_push(ssrRenderComponent(unref(DialogDescription_default), { class: "text-center" }, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(`${ssrInterpolate(modalConfig.value.description)}`);
													else return [createTextVNode(toDisplayString(modalConfig.value.description), 1)];
												}),
												_: 1
											}, _parent, _scopeId));
										} else return [
											createVNode("div", { class: "mb-3 w-auto rounded-full border border-border bg-card p-0.5 shadow-sm" }, [createVNode("div", { class: "relative overflow-hidden rounded-full border border-border bg-muted p-2.5" }, [
												createVNode("div", { class: "absolute inset-0 grid grid-cols-5 opacity-50" }, [(openBlock(), createBlock(Fragment, null, renderList(5, (i) => {
													return createVNode("div", {
														key: `col-${i}`,
														class: "border-r border-border last:border-r-0"
													});
												}), 64))]),
												createVNode("div", { class: "absolute inset-0 grid grid-rows-5 opacity-50" }, [(openBlock(), createBlock(Fragment, null, renderList(5, (i) => {
													return createVNode("div", {
														key: `row-${i}`,
														class: "border-b border-border last:border-b-0"
													});
												}), 64))]),
												createVNode(unref(ScanLine), { class: "relative z-20 size-6 text-foreground" })
											])]),
											createVNode(unref(DialogTitle_default), null, {
												default: withCtx(() => [createTextVNode(toDisplayString(modalConfig.value.title), 1)]),
												_: 1
											}),
											createVNode(unref(DialogDescription_default), { class: "text-center" }, {
												default: withCtx(() => [createTextVNode(toDisplayString(modalConfig.value.description), 1)]),
												_: 1
											})
										];
									}),
									_: 1
								}, _parent, _scopeId));
								_push(`<div class="relative flex w-auto flex-col items-center justify-center space-y-5"${_scopeId}>`);
								if (!showVerificationStep.value) {
									_push(`<!--[-->`);
									if (unref(errors)?.length) _push(ssrRenderComponent(AlertError_default, { errors: unref(errors) }, null, _parent, _scopeId));
									else {
										_push(`<!--[--><div class="relative mx-auto flex max-w-md items-center overflow-hidden"${_scopeId}><div class="relative mx-auto aspect-square w-64 overflow-hidden rounded-lg border border-border"${_scopeId}>`);
										if (!unref(qrCodeSvg)) {
											_push(`<div class="absolute inset-0 z-10 flex aspect-square h-auto w-full animate-pulse items-center justify-center bg-background"${_scopeId}>`);
											_push(ssrRenderComponent(unref(Spinner_default), { class: "size-6" }, null, _parent, _scopeId));
											_push(`</div>`);
										} else _push(`<div class="relative z-10 overflow-hidden border p-5"${_scopeId}><div class="flex aspect-square size-full items-center justify-center" style="${ssrRenderStyle({ filter: unref(resolvedAppearance) === "dark" ? "invert(1) brightness(1.5)" : void 0 })}"${_scopeId}>${unref(qrCodeSvg) ?? ""}</div></div>`);
										_push(`</div></div><div class="flex w-full items-center space-x-5"${_scopeId}>`);
										_push(ssrRenderComponent(unref(Button_default), {
											class: "w-full",
											onClick: handleModalNextStep
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(`${ssrInterpolate(modalConfig.value.buttonText)}`);
												else return [createTextVNode(toDisplayString(modalConfig.value.buttonText), 1)];
											}),
											_: 1
										}, _parent, _scopeId));
										_push(`</div><div class="relative flex w-full items-center justify-center"${_scopeId}><div class="absolute inset-0 top-1/2 h-px w-full bg-border"${_scopeId}></div><span class="relative bg-card px-2 py-1"${_scopeId}>or, enter the code manually</span></div><div class="flex w-full items-center justify-center space-x-2"${_scopeId}><div class="flex w-full items-stretch overflow-hidden rounded-xl border border-border"${_scopeId}>`);
										if (!unref(manualSetupKey)) {
											_push(`<div class="flex h-full w-full items-center justify-center bg-muted p-3"${_scopeId}>`);
											_push(ssrRenderComponent(unref(Spinner_default), null, null, _parent, _scopeId));
											_push(`</div>`);
										} else {
											_push(`<!--[--><input type="text" readonly${ssrRenderAttr("value", unref(manualSetupKey))} class="h-full w-full bg-background p-3 text-foreground"${_scopeId}><button class="relative block h-auto border-l border-border px-3 hover:bg-muted"${_scopeId}>`);
											if (unref(copied)) _push(ssrRenderComponent(unref(Check), { class: "w-4 text-green-500" }, null, _parent, _scopeId));
											else _push(ssrRenderComponent(unref(Copy), { class: "w-4" }, null, _parent, _scopeId));
											_push(`</button><!--]-->`);
										}
										_push(`</div></div><!--]-->`);
									}
									_push(`<!--]-->`);
								} else _push(ssrRenderComponent(unref(Form), mergeProps(unref(confirm).form(), {
									"error-bag": "confirmTwoFactorAuthentication",
									"reset-on-error": "",
									onFinish: ($event) => code.value = "",
									onSuccess: ($event) => isOpen.value = false
								}), {
									default: withCtx(({ errors, processing }, _push, _parent, _scopeId) => {
										if (_push) {
											_push(`<input type="hidden" name="code"${ssrRenderAttr("value", code.value)}${_scopeId}><div class="relative w-full space-y-3"${_scopeId}><div class="flex w-full flex-col items-center justify-center space-y-3 py-2"${_scopeId}>`);
											_push(ssrRenderComponent(unref(InputOTP_default), {
												id: "otp",
												modelValue: code.value,
												"onUpdate:modelValue": ($event) => code.value = $event,
												maxlength: 6,
												disabled: processing,
												autofocus: ""
											}, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(ssrRenderComponent(unref(InputOTPGroup_default), null, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) {
																_push(`<!--[-->`);
																ssrRenderList(6, (index) => {
																	_push(ssrRenderComponent(unref(InputOTPSlot_default), {
																		key: index,
																		index: index - 1
																	}, null, _parent, _scopeId));
																});
																_push(`<!--]-->`);
															} else return [(openBlock(), createBlock(Fragment, null, renderList(6, (index) => {
																return createVNode(unref(InputOTPSlot_default), {
																	key: index,
																	index: index - 1
																}, null, 8, ["index"]);
															}), 64))];
														}),
														_: 2
													}, _parent, _scopeId));
													else return [createVNode(unref(InputOTPGroup_default), null, {
														default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(6, (index) => {
															return createVNode(unref(InputOTPSlot_default), {
																key: index,
																index: index - 1
															}, null, 8, ["index"]);
														}), 64))]),
														_: 1
													})];
												}),
												_: 2
											}, _parent, _scopeId));
											_push(ssrRenderComponent(InputError_default, { message: errors?.code }, null, _parent, _scopeId));
											_push(`</div><div class="flex w-full items-center space-x-5"${_scopeId}>`);
											_push(ssrRenderComponent(unref(Button_default), {
												type: "button",
												variant: "outline",
												class: "w-auto flex-1",
												onClick: ($event) => showVerificationStep.value = false,
												disabled: processing
											}, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(` Back `);
													else return [createTextVNode(" Back ")];
												}),
												_: 2
											}, _parent, _scopeId));
											_push(ssrRenderComponent(unref(Button_default), {
												type: "submit",
												class: "w-auto flex-1",
												disabled: processing || code.value.length < 6
											}, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(` Confirm `);
													else return [createTextVNode(" Confirm ")];
												}),
												_: 2
											}, _parent, _scopeId));
											_push(`</div></div>`);
										} else return [createVNode("input", {
											type: "hidden",
											name: "code",
											value: code.value
										}, null, 8, ["value"]), createVNode("div", {
											ref_key: "pinInputContainerRef",
											ref: pinInputContainerRef,
											class: "relative w-full space-y-3"
										}, [createVNode("div", { class: "flex w-full flex-col items-center justify-center space-y-3 py-2" }, [createVNode(unref(InputOTP_default), {
											id: "otp",
											modelValue: code.value,
											"onUpdate:modelValue": ($event) => code.value = $event,
											maxlength: 6,
											disabled: processing,
											autofocus: ""
										}, {
											default: withCtx(() => [createVNode(unref(InputOTPGroup_default), null, {
												default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(6, (index) => {
													return createVNode(unref(InputOTPSlot_default), {
														key: index,
														index: index - 1
													}, null, 8, ["index"]);
												}), 64))]),
												_: 1
											})]),
											_: 1
										}, 8, [
											"modelValue",
											"onUpdate:modelValue",
											"disabled"
										]), createVNode(InputError_default, { message: errors?.code }, null, 8, ["message"])]), createVNode("div", { class: "flex w-full items-center space-x-5" }, [createVNode(unref(Button_default), {
											type: "button",
											variant: "outline",
											class: "w-auto flex-1",
											onClick: ($event) => showVerificationStep.value = false,
											disabled: processing
										}, {
											default: withCtx(() => [createTextVNode(" Back ")]),
											_: 1
										}, 8, ["onClick", "disabled"]), createVNode(unref(Button_default), {
											type: "submit",
											class: "w-auto flex-1",
											disabled: processing || code.value.length < 6
										}, {
											default: withCtx(() => [createTextVNode(" Confirm ")]),
											_: 1
										}, 8, ["disabled"])])], 512)];
									}),
									_: 1
								}, _parent, _scopeId));
								_push(`</div>`);
							} else return [createVNode(unref(DialogHeader_default), { class: "flex items-center justify-center" }, {
								default: withCtx(() => [
									createVNode("div", { class: "mb-3 w-auto rounded-full border border-border bg-card p-0.5 shadow-sm" }, [createVNode("div", { class: "relative overflow-hidden rounded-full border border-border bg-muted p-2.5" }, [
										createVNode("div", { class: "absolute inset-0 grid grid-cols-5 opacity-50" }, [(openBlock(), createBlock(Fragment, null, renderList(5, (i) => {
											return createVNode("div", {
												key: `col-${i}`,
												class: "border-r border-border last:border-r-0"
											});
										}), 64))]),
										createVNode("div", { class: "absolute inset-0 grid grid-rows-5 opacity-50" }, [(openBlock(), createBlock(Fragment, null, renderList(5, (i) => {
											return createVNode("div", {
												key: `row-${i}`,
												class: "border-b border-border last:border-b-0"
											});
										}), 64))]),
										createVNode(unref(ScanLine), { class: "relative z-20 size-6 text-foreground" })
									])]),
									createVNode(unref(DialogTitle_default), null, {
										default: withCtx(() => [createTextVNode(toDisplayString(modalConfig.value.title), 1)]),
										_: 1
									}),
									createVNode(unref(DialogDescription_default), { class: "text-center" }, {
										default: withCtx(() => [createTextVNode(toDisplayString(modalConfig.value.description), 1)]),
										_: 1
									})
								]),
								_: 1
							}), createVNode("div", { class: "relative flex w-auto flex-col items-center justify-center space-y-5" }, [!showVerificationStep.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [unref(errors)?.length ? (openBlock(), createBlock(AlertError_default, {
								key: 0,
								errors: unref(errors)
							}, null, 8, ["errors"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
								createVNode("div", { class: "relative mx-auto flex max-w-md items-center overflow-hidden" }, [createVNode("div", { class: "relative mx-auto aspect-square w-64 overflow-hidden rounded-lg border border-border" }, [!unref(qrCodeSvg) ? (openBlock(), createBlock("div", {
									key: 0,
									class: "absolute inset-0 z-10 flex aspect-square h-auto w-full animate-pulse items-center justify-center bg-background"
								}, [createVNode(unref(Spinner_default), { class: "size-6" })])) : (openBlock(), createBlock("div", {
									key: 1,
									class: "relative z-10 overflow-hidden border p-5"
								}, [createVNode("div", {
									innerHTML: unref(qrCodeSvg),
									class: "flex aspect-square size-full items-center justify-center",
									style: { filter: unref(resolvedAppearance) === "dark" ? "invert(1) brightness(1.5)" : void 0 }
								}, null, 12, ["innerHTML"])]))])]),
								createVNode("div", { class: "flex w-full items-center space-x-5" }, [createVNode(unref(Button_default), {
									class: "w-full",
									onClick: handleModalNextStep
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(modalConfig.value.buttonText), 1)]),
									_: 1
								})]),
								createVNode("div", { class: "relative flex w-full items-center justify-center" }, [createVNode("div", { class: "absolute inset-0 top-1/2 h-px w-full bg-border" }), createVNode("span", { class: "relative bg-card px-2 py-1" }, "or, enter the code manually")]),
								createVNode("div", { class: "flex w-full items-center justify-center space-x-2" }, [createVNode("div", { class: "flex w-full items-stretch overflow-hidden rounded-xl border border-border" }, [!unref(manualSetupKey) ? (openBlock(), createBlock("div", {
									key: 0,
									class: "flex h-full w-full items-center justify-center bg-muted p-3"
								}, [createVNode(unref(Spinner_default))])) : (openBlock(), createBlock(Fragment, { key: 1 }, [createVNode("input", {
									type: "text",
									readonly: "",
									value: unref(manualSetupKey),
									class: "h-full w-full bg-background p-3 text-foreground"
								}, null, 8, ["value"]), createVNode("button", {
									onClick: ($event) => unref(copy)(unref(manualSetupKey) || ""),
									class: "relative block h-auto border-l border-border px-3 hover:bg-muted"
								}, [unref(copied) ? (openBlock(), createBlock(unref(Check), {
									key: 0,
									class: "w-4 text-green-500"
								})) : (openBlock(), createBlock(unref(Copy), {
									key: 1,
									class: "w-4"
								}))], 8, ["onClick"])], 64))])])
							], 64))], 64)) : (openBlock(), createBlock(unref(Form), mergeProps({ key: 1 }, unref(confirm).form(), {
								"error-bag": "confirmTwoFactorAuthentication",
								"reset-on-error": "",
								onFinish: ($event) => code.value = "",
								onSuccess: ($event) => isOpen.value = false
							}), {
								default: withCtx(({ errors, processing }) => [createVNode("input", {
									type: "hidden",
									name: "code",
									value: code.value
								}, null, 8, ["value"]), createVNode("div", {
									ref_key: "pinInputContainerRef",
									ref: pinInputContainerRef,
									class: "relative w-full space-y-3"
								}, [createVNode("div", { class: "flex w-full flex-col items-center justify-center space-y-3 py-2" }, [createVNode(unref(InputOTP_default), {
									id: "otp",
									modelValue: code.value,
									"onUpdate:modelValue": ($event) => code.value = $event,
									maxlength: 6,
									disabled: processing,
									autofocus: ""
								}, {
									default: withCtx(() => [createVNode(unref(InputOTPGroup_default), null, {
										default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(6, (index) => {
											return createVNode(unref(InputOTPSlot_default), {
												key: index,
												index: index - 1
											}, null, 8, ["index"]);
										}), 64))]),
										_: 1
									})]),
									_: 1
								}, 8, [
									"modelValue",
									"onUpdate:modelValue",
									"disabled"
								]), createVNode(InputError_default, { message: errors?.code }, null, 8, ["message"])]), createVNode("div", { class: "flex w-full items-center space-x-5" }, [createVNode(unref(Button_default), {
									type: "button",
									variant: "outline",
									class: "w-auto flex-1",
									onClick: ($event) => showVerificationStep.value = false,
									disabled: processing
								}, {
									default: withCtx(() => [createTextVNode(" Back ")]),
									_: 1
								}, 8, ["onClick", "disabled"]), createVNode(unref(Button_default), {
									type: "submit",
									class: "w-auto flex-1",
									disabled: processing || code.value.length < 6
								}, {
									default: withCtx(() => [createTextVNode(" Confirm ")]),
									_: 1
								}, 8, ["disabled"])])], 512)]),
								_: 1
							}, 16, ["onFinish", "onSuccess"]))])];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(unref(DialogContent_default), { class: "sm:max-w-md" }, {
						default: withCtx(() => [createVNode(unref(DialogHeader_default), { class: "flex items-center justify-center" }, {
							default: withCtx(() => [
								createVNode("div", { class: "mb-3 w-auto rounded-full border border-border bg-card p-0.5 shadow-sm" }, [createVNode("div", { class: "relative overflow-hidden rounded-full border border-border bg-muted p-2.5" }, [
									createVNode("div", { class: "absolute inset-0 grid grid-cols-5 opacity-50" }, [(openBlock(), createBlock(Fragment, null, renderList(5, (i) => {
										return createVNode("div", {
											key: `col-${i}`,
											class: "border-r border-border last:border-r-0"
										});
									}), 64))]),
									createVNode("div", { class: "absolute inset-0 grid grid-rows-5 opacity-50" }, [(openBlock(), createBlock(Fragment, null, renderList(5, (i) => {
										return createVNode("div", {
											key: `row-${i}`,
											class: "border-b border-border last:border-b-0"
										});
									}), 64))]),
									createVNode(unref(ScanLine), { class: "relative z-20 size-6 text-foreground" })
								])]),
								createVNode(unref(DialogTitle_default), null, {
									default: withCtx(() => [createTextVNode(toDisplayString(modalConfig.value.title), 1)]),
									_: 1
								}),
								createVNode(unref(DialogDescription_default), { class: "text-center" }, {
									default: withCtx(() => [createTextVNode(toDisplayString(modalConfig.value.description), 1)]),
									_: 1
								})
							]),
							_: 1
						}), createVNode("div", { class: "relative flex w-auto flex-col items-center justify-center space-y-5" }, [!showVerificationStep.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [unref(errors)?.length ? (openBlock(), createBlock(AlertError_default, {
							key: 0,
							errors: unref(errors)
						}, null, 8, ["errors"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
							createVNode("div", { class: "relative mx-auto flex max-w-md items-center overflow-hidden" }, [createVNode("div", { class: "relative mx-auto aspect-square w-64 overflow-hidden rounded-lg border border-border" }, [!unref(qrCodeSvg) ? (openBlock(), createBlock("div", {
								key: 0,
								class: "absolute inset-0 z-10 flex aspect-square h-auto w-full animate-pulse items-center justify-center bg-background"
							}, [createVNode(unref(Spinner_default), { class: "size-6" })])) : (openBlock(), createBlock("div", {
								key: 1,
								class: "relative z-10 overflow-hidden border p-5"
							}, [createVNode("div", {
								innerHTML: unref(qrCodeSvg),
								class: "flex aspect-square size-full items-center justify-center",
								style: { filter: unref(resolvedAppearance) === "dark" ? "invert(1) brightness(1.5)" : void 0 }
							}, null, 12, ["innerHTML"])]))])]),
							createVNode("div", { class: "flex w-full items-center space-x-5" }, [createVNode(unref(Button_default), {
								class: "w-full",
								onClick: handleModalNextStep
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(modalConfig.value.buttonText), 1)]),
								_: 1
							})]),
							createVNode("div", { class: "relative flex w-full items-center justify-center" }, [createVNode("div", { class: "absolute inset-0 top-1/2 h-px w-full bg-border" }), createVNode("span", { class: "relative bg-card px-2 py-1" }, "or, enter the code manually")]),
							createVNode("div", { class: "flex w-full items-center justify-center space-x-2" }, [createVNode("div", { class: "flex w-full items-stretch overflow-hidden rounded-xl border border-border" }, [!unref(manualSetupKey) ? (openBlock(), createBlock("div", {
								key: 0,
								class: "flex h-full w-full items-center justify-center bg-muted p-3"
							}, [createVNode(unref(Spinner_default))])) : (openBlock(), createBlock(Fragment, { key: 1 }, [createVNode("input", {
								type: "text",
								readonly: "",
								value: unref(manualSetupKey),
								class: "h-full w-full bg-background p-3 text-foreground"
							}, null, 8, ["value"]), createVNode("button", {
								onClick: ($event) => unref(copy)(unref(manualSetupKey) || ""),
								class: "relative block h-auto border-l border-border px-3 hover:bg-muted"
							}, [unref(copied) ? (openBlock(), createBlock(unref(Check), {
								key: 0,
								class: "w-4 text-green-500"
							})) : (openBlock(), createBlock(unref(Copy), {
								key: 1,
								class: "w-4"
							}))], 8, ["onClick"])], 64))])])
						], 64))], 64)) : (openBlock(), createBlock(unref(Form), mergeProps({ key: 1 }, unref(confirm).form(), {
							"error-bag": "confirmTwoFactorAuthentication",
							"reset-on-error": "",
							onFinish: ($event) => code.value = "",
							onSuccess: ($event) => isOpen.value = false
						}), {
							default: withCtx(({ errors, processing }) => [createVNode("input", {
								type: "hidden",
								name: "code",
								value: code.value
							}, null, 8, ["value"]), createVNode("div", {
								ref_key: "pinInputContainerRef",
								ref: pinInputContainerRef,
								class: "relative w-full space-y-3"
							}, [createVNode("div", { class: "flex w-full flex-col items-center justify-center space-y-3 py-2" }, [createVNode(unref(InputOTP_default), {
								id: "otp",
								modelValue: code.value,
								"onUpdate:modelValue": ($event) => code.value = $event,
								maxlength: 6,
								disabled: processing,
								autofocus: ""
							}, {
								default: withCtx(() => [createVNode(unref(InputOTPGroup_default), null, {
									default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(6, (index) => {
										return createVNode(unref(InputOTPSlot_default), {
											key: index,
											index: index - 1
										}, null, 8, ["index"]);
									}), 64))]),
									_: 1
								})]),
								_: 1
							}, 8, [
								"modelValue",
								"onUpdate:modelValue",
								"disabled"
							]), createVNode(InputError_default, { message: errors?.code }, null, 8, ["message"])]), createVNode("div", { class: "flex w-full items-center space-x-5" }, [createVNode(unref(Button_default), {
								type: "button",
								variant: "outline",
								class: "w-auto flex-1",
								onClick: ($event) => showVerificationStep.value = false,
								disabled: processing
							}, {
								default: withCtx(() => [createTextVNode(" Back ")]),
								_: 1
							}, 8, ["onClick", "disabled"]), createVNode(unref(Button_default), {
								type: "submit",
								class: "w-auto flex-1",
								disabled: processing || code.value.length < 6
							}, {
								default: withCtx(() => [createTextVNode(" Confirm ")]),
								_: 1
							}, 8, ["disabled"])])], 512)]),
							_: 1
						}, 16, ["onFinish", "onSuccess"]))])]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/TwoFactorSetupModal.vue
var _sfc_setup$2 = TwoFactorSetupModal_vue_vue_type_script_setup_true_lang_default.setup;
TwoFactorSetupModal_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/TwoFactorSetupModal.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var TwoFactorSetupModal_default = TwoFactorSetupModal_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ManageTwoFactor.vue?vue&type=script&setup=true&lang.ts
var ManageTwoFactor_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "ManageTwoFactor",
	__ssrInlineRender: true,
	props: {
		canManageTwoFactor: {
			type: Boolean,
			default: false
		},
		requiresConfirmation: {
			type: Boolean,
			default: false
		},
		twoFactorEnabled: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const { hasSetupData, clearTwoFactorAuthData } = useTwoFactorAuth();
		const showSetupModal = ref(false);
		onUnmounted(() => clearTwoFactorAuthData());
		return (_ctx, _push, _parent, _attrs) => {
			if (__props.canManageTwoFactor) {
				_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
				_push(ssrRenderComponent(Heading_default, {
					variant: "small",
					title: "Two-factor authentication",
					description: "Manage your two-factor authentication settings"
				}, null, _parent));
				if (!__props.twoFactorEnabled) {
					_push(`<div class="flex flex-col items-start justify-start space-y-4"><p class="text-sm text-muted-foreground"> When you enable two-factor authentication, you will be prompted for a secure pin during login. This pin can be retrieved from a TOTP-supported application on your phone. </p><div>`);
					if (unref(hasSetupData)) _push(ssrRenderComponent(unref(Button_default), { onClick: ($event) => showSetupModal.value = true }, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(ssrRenderComponent(unref(ShieldCheck), null, null, _parent, _scopeId));
								_push(`Continue setup `);
							} else return [createVNode(unref(ShieldCheck)), createTextVNode("Continue setup ")];
						}),
						_: 1
					}, _parent));
					else _push(ssrRenderComponent(unref(Form), mergeProps(unref(enable).form(), { onSuccess: ($event) => showSetupModal.value = true }), {
						default: withCtx(({ processing }, _push, _parent, _scopeId) => {
							if (_push) _push(ssrRenderComponent(unref(Button_default), {
								type: "submit",
								disabled: processing
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(` Enable 2FA `);
									else return [createTextVNode(" Enable 2FA ")];
								}),
								_: 2
							}, _parent, _scopeId));
							else return [createVNode(unref(Button_default), {
								type: "submit",
								disabled: processing
							}, {
								default: withCtx(() => [createTextVNode(" Enable 2FA ")]),
								_: 1
							}, 8, ["disabled"])];
						}),
						_: 1
					}, _parent));
					_push(`</div></div>`);
				} else {
					_push(`<div class="flex flex-col items-start justify-start space-y-4"><p class="text-sm text-muted-foreground"> You will be prompted for a secure, random pin during login, which you can retrieve from the TOTP-supported application on your phone. </p><div class="relative inline">`);
					_push(ssrRenderComponent(unref(Form), unref(disable).form(), {
						default: withCtx(({ processing }, _push, _parent, _scopeId) => {
							if (_push) _push(ssrRenderComponent(unref(Button_default), {
								variant: "destructive",
								type: "submit",
								disabled: processing
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(` Disable 2FA `);
									else return [createTextVNode(" Disable 2FA ")];
								}),
								_: 2
							}, _parent, _scopeId));
							else return [createVNode(unref(Button_default), {
								variant: "destructive",
								type: "submit",
								disabled: processing
							}, {
								default: withCtx(() => [createTextVNode(" Disable 2FA ")]),
								_: 1
							}, 8, ["disabled"])];
						}),
						_: 1
					}, _parent));
					_push(`</div>`);
					_push(ssrRenderComponent(TwoFactorRecoveryCodes_default, null, null, _parent));
					_push(`</div>`);
				}
				_push(ssrRenderComponent(TwoFactorSetupModal_default, {
					isOpen: showSetupModal.value,
					"onUpdate:isOpen": ($event) => showSetupModal.value = $event,
					requiresConfirmation: __props.requiresConfirmation,
					twoFactorEnabled: __props.twoFactorEnabled
				}, null, _parent));
				_push(`</div>`);
			} else _push(`<!---->`);
		};
	}
});
//#endregion
//#region resources/js/components/ManageTwoFactor.vue
var _sfc_setup$1 = ManageTwoFactor_vue_vue_type_script_setup_true_lang_default.setup;
ManageTwoFactor_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ManageTwoFactor.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var ManageTwoFactor_default = ManageTwoFactor_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/pages/settings/Security.vue?vue&type=script&setup=true&lang.ts
var Security_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	layout: { breadcrumbs: [{
		title: "Security settings",
		href: edit$1()
	}] },
	__name: "Security",
	__ssrInlineRender: true,
	props: {
		passwordRules: {},
		canManagePasskeys: { type: Boolean },
		passkeys: {},
		canManageTwoFactor: { type: Boolean },
		requiresConfirmation: { type: Boolean },
		twoFactorEnabled: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Security settings" }, null, _parent));
			_push(`<h1 class="sr-only">Security settings</h1><div class="space-y-6">`);
			_push(ssrRenderComponent(Heading_default, {
				variant: "small",
				title: "Update password",
				description: "Ensure your account is using a long, random password to stay secure"
			}, null, _parent));
			_push(ssrRenderComponent(unref(Form), mergeProps(unref(SecurityController).update.form(), {
				options: { preserveScroll: true },
				"reset-on-success": "",
				"reset-on-error": [
					"password",
					"password_confirmation",
					"current_password"
				],
				class: "space-y-6"
			}), {
				default: withCtx(({ errors, processing }, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="grid gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Label_default), { for: "current_password" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Current password`);
								else return [createTextVNode("Current password")];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(ssrRenderComponent(PasswordInput_default, {
							id: "current_password",
							name: "current_password",
							class: "mt-1 block w-full",
							autocomplete: "current-password",
							placeholder: "Current password"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(InputError_default, { message: errors.current_password }, null, _parent, _scopeId));
						_push(`</div><div class="grid gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Label_default), { for: "password" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`New password`);
								else return [createTextVNode("New password")];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(ssrRenderComponent(PasswordInput_default, {
							id: "password",
							name: "password",
							class: "mt-1 block w-full",
							autocomplete: "new-password",
							placeholder: "New password",
							passwordrules: props.passwordRules
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
							name: "password_confirmation",
							class: "mt-1 block w-full",
							autocomplete: "new-password",
							placeholder: "Confirm password",
							passwordrules: props.passwordRules
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(InputError_default, { message: errors.password_confirmation }, null, _parent, _scopeId));
						_push(`</div><div class="flex items-center gap-4"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Button_default), {
							disabled: processing,
							"data-test": "update-password-button"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Save `);
								else return [createTextVNode(" Save ")];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [
						createVNode("div", { class: "grid gap-2" }, [
							createVNode(unref(Label_default), { for: "current_password" }, {
								default: withCtx(() => [createTextVNode("Current password")]),
								_: 1
							}),
							createVNode(PasswordInput_default, {
								id: "current_password",
								name: "current_password",
								class: "mt-1 block w-full",
								autocomplete: "current-password",
								placeholder: "Current password"
							}),
							createVNode(InputError_default, { message: errors.current_password }, null, 8, ["message"])
						]),
						createVNode("div", { class: "grid gap-2" }, [
							createVNode(unref(Label_default), { for: "password" }, {
								default: withCtx(() => [createTextVNode("New password")]),
								_: 1
							}),
							createVNode(PasswordInput_default, {
								id: "password",
								name: "password",
								class: "mt-1 block w-full",
								autocomplete: "new-password",
								placeholder: "New password",
								passwordrules: props.passwordRules
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
								name: "password_confirmation",
								class: "mt-1 block w-full",
								autocomplete: "new-password",
								placeholder: "Confirm password",
								passwordrules: props.passwordRules
							}, null, 8, ["passwordrules"]),
							createVNode(InputError_default, { message: errors.password_confirmation }, null, 8, ["message"])
						]),
						createVNode("div", { class: "flex items-center gap-4" }, [createVNode(unref(Button_default), {
							disabled: processing,
							"data-test": "update-password-button"
						}, {
							default: withCtx(() => [createTextVNode(" Save ")]),
							_: 1
						}, 8, ["disabled"])])
					];
				}),
				_: 1
			}, _parent));
			_push(`</div>`);
			_push(ssrRenderComponent(ManageTwoFactor_default, {
				canManageTwoFactor: __props.canManageTwoFactor,
				requiresConfirmation: __props.requiresConfirmation,
				twoFactorEnabled: __props.twoFactorEnabled
			}, null, _parent));
			_push(ssrRenderComponent(ManagePasskeys_default, {
				canManagePasskeys: __props.canManagePasskeys,
				passkeys: __props.passkeys
			}, null, _parent));
			_push(`<!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/pages/settings/Security.vue
var _sfc_setup = Security_vue_vue_type_script_setup_true_lang_default.setup;
Security_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/settings/Security.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Security_default = Security_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { Security_default as default };

//# sourceMappingURL=Security-v1BsDBGK.js.map