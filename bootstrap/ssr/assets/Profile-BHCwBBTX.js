import { t as Button_default } from "./button-DHJnCoso.js";
import { t as Input_default } from "./input-DEmK1n7Q.js";
import { n as queryParams } from "./wayfinder-BrhwLpUM.js";
import { t as edit$1 } from "./profile-C0rmUldE.js";
import { t as Heading_default } from "./Heading-DS5EZX3A.js";
import { t as InputError_default } from "./InputError-CH3UMoP5.js";
import { t as PasswordInput_default } from "./PasswordInput-D2x5rKA1.js";
import { t as Label_default } from "./label-Fr_CsYDc.js";
import { t as send } from "./verification-B4VXILzx.js";
import { a as DialogDescription_default, c as Dialog_default, i as DialogFooter_default, n as DialogTitle_default, o as DialogContent_default, r as DialogHeader_default, s as DialogClose_default, t as DialogTrigger_default } from "./dialog-DANPXjKB.js";
import { Form, Head, Link, usePage } from "@inertiajs/vue3";
import { computed, createBlock, createCommentVNode, createTextVNode, createVNode, defineComponent, mergeProps, openBlock, unref, useSSRContext, useTemplateRef, withCtx } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/actions/App/Http/Controllers/Settings/ProfileController.ts
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:20
* @route '/settings/profile'
*/
var edit = (options) => ({
	url: edit.url(options),
	method: "get"
});
edit.definition = {
	methods: ["get", "head"],
	url: "/settings/profile"
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:20
* @route '/settings/profile'
*/
edit.url = (options) => {
	return edit.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:20
* @route '/settings/profile'
*/
edit.get = (options) => ({
	url: edit.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:20
* @route '/settings/profile'
*/
edit.head = (options) => ({
	url: edit.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:20
* @route '/settings/profile'
*/
var editForm = (options) => ({
	action: edit.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:20
* @route '/settings/profile'
*/
editForm.get = (options) => ({
	action: edit.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:20
* @route '/settings/profile'
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
* @see \App\Http\Controllers\Settings\ProfileController::update
* @see app/Http/Controllers/Settings/ProfileController.php:31
* @route '/settings/profile'
*/
var update = (options) => ({
	url: update.url(options),
	method: "patch"
});
update.definition = {
	methods: ["patch"],
	url: "/settings/profile"
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::update
* @see app/Http/Controllers/Settings/ProfileController.php:31
* @route '/settings/profile'
*/
update.url = (options) => {
	return update.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::update
* @see app/Http/Controllers/Settings/ProfileController.php:31
* @route '/settings/profile'
*/
update.patch = (options) => ({
	url: update.url(options),
	method: "patch"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::update
* @see app/Http/Controllers/Settings/ProfileController.php:31
* @route '/settings/profile'
*/
var updateForm = (options) => ({
	action: update.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PATCH",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::update
* @see app/Http/Controllers/Settings/ProfileController.php:31
* @route '/settings/profile'
*/
updateForm.patch = (options) => ({
	action: update.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PATCH",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
update.form = updateForm;
/**
* @see \App\Http\Controllers\Settings\ProfileController::destroy
* @see app/Http/Controllers/Settings/ProfileController.php:49
* @route '/settings/profile'
*/
var destroy = (options) => ({
	url: destroy.url(options),
	method: "delete"
});
destroy.definition = {
	methods: ["delete"],
	url: "/settings/profile"
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::destroy
* @see app/Http/Controllers/Settings/ProfileController.php:49
* @route '/settings/profile'
*/
destroy.url = (options) => {
	return destroy.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::destroy
* @see app/Http/Controllers/Settings/ProfileController.php:49
* @route '/settings/profile'
*/
destroy.delete = (options) => ({
	url: destroy.url(options),
	method: "delete"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::destroy
* @see app/Http/Controllers/Settings/ProfileController.php:49
* @route '/settings/profile'
*/
var destroyForm = (options) => ({
	action: destroy.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::destroy
* @see app/Http/Controllers/Settings/ProfileController.php:49
* @route '/settings/profile'
*/
destroyForm.delete = (options) => ({
	action: destroy.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
destroy.form = destroyForm;
var ProfileController = {
	edit,
	update,
	destroy
};
//#endregion
//#region resources/js/components/DeleteUser.vue?vue&type=script&setup=true&lang.ts
var DeleteUser_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "DeleteUser",
	__ssrInlineRender: true,
	setup(__props) {
		const passwordInput = useTemplateRef("passwordInput");
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
			_push(ssrRenderComponent(Heading_default, {
				variant: "small",
				title: "Delete account",
				description: "Delete your account and all of its resources"
			}, null, _parent));
			_push(`<div class="space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10"><div class="relative space-y-0.5 text-red-600 dark:text-red-100"><p class="font-medium">Warning</p><p class="text-sm"> Please proceed with caution, this cannot be undone. </p></div>`);
			_push(ssrRenderComponent(unref(Dialog_default), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(DialogTrigger_default), { "as-child": "" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(Button_default), {
									variant: "destructive",
									"data-test": "delete-user-button"
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`Delete account`);
										else return [createTextVNode("Delete account")];
									}),
									_: 1
								}, _parent, _scopeId));
								else return [createVNode(unref(Button_default), {
									variant: "destructive",
									"data-test": "delete-user-button"
								}, {
									default: withCtx(() => [createTextVNode("Delete account")]),
									_: 1
								})];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(DialogContent_default), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(Form), mergeProps(unref(ProfileController).destroy.form(), {
									"reset-on-success": "",
									onError: () => passwordInput.value?.focus(),
									options: { preserveScroll: true },
									class: "space-y-6"
								}), {
									default: withCtx(({ errors, processing, reset, clearErrors }, _push, _parent, _scopeId) => {
										if (_push) {
											_push(ssrRenderComponent(unref(DialogHeader_default), { class: "space-y-3" }, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) {
														_push(ssrRenderComponent(unref(DialogTitle_default), null, {
															default: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) _push(`Are you sure you want to delete your account?`);
																else return [createTextVNode("Are you sure you want to delete your account?")];
															}),
															_: 2
														}, _parent, _scopeId));
														_push(ssrRenderComponent(unref(DialogDescription_default), null, {
															default: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) _push(` Once your account is deleted, all of its resources and data will also be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. `);
																else return [createTextVNode(" Once your account is deleted, all of its resources and data will also be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ")];
															}),
															_: 2
														}, _parent, _scopeId));
													} else return [createVNode(unref(DialogTitle_default), null, {
														default: withCtx(() => [createTextVNode("Are you sure you want to delete your account?")]),
														_: 1
													}), createVNode(unref(DialogDescription_default), null, {
														default: withCtx(() => [createTextVNode(" Once your account is deleted, all of its resources and data will also be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ")]),
														_: 1
													})];
												}),
												_: 2
											}, _parent, _scopeId));
											_push(`<div class="grid gap-2"${_scopeId}>`);
											_push(ssrRenderComponent(unref(Label_default), {
												for: "password",
												class: "sr-only"
											}, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(`Password`);
													else return [createTextVNode("Password")];
												}),
												_: 2
											}, _parent, _scopeId));
											_push(ssrRenderComponent(PasswordInput_default, {
												id: "password",
												name: "password",
												ref_key: "passwordInput",
												ref: passwordInput,
												placeholder: "Password"
											}, null, _parent, _scopeId));
											_push(ssrRenderComponent(InputError_default, { message: errors.password }, null, _parent, _scopeId));
											_push(`</div>`);
											_push(ssrRenderComponent(unref(DialogFooter_default), { class: "gap-2" }, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) {
														_push(ssrRenderComponent(unref(DialogClose_default), { "as-child": "" }, {
															default: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) _push(ssrRenderComponent(unref(Button_default), {
																	variant: "secondary",
																	onClick: () => {
																		clearErrors();
																		reset();
																	}
																}, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) _push(` Cancel `);
																		else return [createTextVNode(" Cancel ")];
																	}),
																	_: 2
																}, _parent, _scopeId));
																else return [createVNode(unref(Button_default), {
																	variant: "secondary",
																	onClick: () => {
																		clearErrors();
																		reset();
																	}
																}, {
																	default: withCtx(() => [createTextVNode(" Cancel ")]),
																	_: 1
																}, 8, ["onClick"])];
															}),
															_: 2
														}, _parent, _scopeId));
														_push(ssrRenderComponent(unref(Button_default), {
															type: "submit",
															variant: "destructive",
															disabled: processing,
															"data-test": "confirm-delete-user-button"
														}, {
															default: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) _push(` Delete account `);
																else return [createTextVNode(" Delete account ")];
															}),
															_: 2
														}, _parent, _scopeId));
													} else return [createVNode(unref(DialogClose_default), { "as-child": "" }, {
														default: withCtx(() => [createVNode(unref(Button_default), {
															variant: "secondary",
															onClick: () => {
																clearErrors();
																reset();
															}
														}, {
															default: withCtx(() => [createTextVNode(" Cancel ")]),
															_: 1
														}, 8, ["onClick"])]),
														_: 2
													}, 1024), createVNode(unref(Button_default), {
														type: "submit",
														variant: "destructive",
														disabled: processing,
														"data-test": "confirm-delete-user-button"
													}, {
														default: withCtx(() => [createTextVNode(" Delete account ")]),
														_: 1
													}, 8, ["disabled"])];
												}),
												_: 2
											}, _parent, _scopeId));
										} else return [
											createVNode(unref(DialogHeader_default), { class: "space-y-3" }, {
												default: withCtx(() => [createVNode(unref(DialogTitle_default), null, {
													default: withCtx(() => [createTextVNode("Are you sure you want to delete your account?")]),
													_: 1
												}), createVNode(unref(DialogDescription_default), null, {
													default: withCtx(() => [createTextVNode(" Once your account is deleted, all of its resources and data will also be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ")]),
													_: 1
												})]),
												_: 1
											}),
											createVNode("div", { class: "grid gap-2" }, [
												createVNode(unref(Label_default), {
													for: "password",
													class: "sr-only"
												}, {
													default: withCtx(() => [createTextVNode("Password")]),
													_: 1
												}),
												createVNode(PasswordInput_default, {
													id: "password",
													name: "password",
													ref_key: "passwordInput",
													ref: passwordInput,
													placeholder: "Password"
												}, null, 512),
												createVNode(InputError_default, { message: errors.password }, null, 8, ["message"])
											]),
											createVNode(unref(DialogFooter_default), { class: "gap-2" }, {
												default: withCtx(() => [createVNode(unref(DialogClose_default), { "as-child": "" }, {
													default: withCtx(() => [createVNode(unref(Button_default), {
														variant: "secondary",
														onClick: () => {
															clearErrors();
															reset();
														}
													}, {
														default: withCtx(() => [createTextVNode(" Cancel ")]),
														_: 1
													}, 8, ["onClick"])]),
													_: 2
												}, 1024), createVNode(unref(Button_default), {
													type: "submit",
													variant: "destructive",
													disabled: processing,
													"data-test": "confirm-delete-user-button"
												}, {
													default: withCtx(() => [createTextVNode(" Delete account ")]),
													_: 1
												}, 8, ["disabled"])]),
												_: 2
											}, 1024)
										];
									}),
									_: 1
								}, _parent, _scopeId));
								else return [createVNode(unref(Form), mergeProps(unref(ProfileController).destroy.form(), {
									"reset-on-success": "",
									onError: () => passwordInput.value?.focus(),
									options: { preserveScroll: true },
									class: "space-y-6"
								}), {
									default: withCtx(({ errors, processing, reset, clearErrors }) => [
										createVNode(unref(DialogHeader_default), { class: "space-y-3" }, {
											default: withCtx(() => [createVNode(unref(DialogTitle_default), null, {
												default: withCtx(() => [createTextVNode("Are you sure you want to delete your account?")]),
												_: 1
											}), createVNode(unref(DialogDescription_default), null, {
												default: withCtx(() => [createTextVNode(" Once your account is deleted, all of its resources and data will also be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ")]),
												_: 1
											})]),
											_: 1
										}),
										createVNode("div", { class: "grid gap-2" }, [
											createVNode(unref(Label_default), {
												for: "password",
												class: "sr-only"
											}, {
												default: withCtx(() => [createTextVNode("Password")]),
												_: 1
											}),
											createVNode(PasswordInput_default, {
												id: "password",
												name: "password",
												ref_key: "passwordInput",
												ref: passwordInput,
												placeholder: "Password"
											}, null, 512),
											createVNode(InputError_default, { message: errors.password }, null, 8, ["message"])
										]),
										createVNode(unref(DialogFooter_default), { class: "gap-2" }, {
											default: withCtx(() => [createVNode(unref(DialogClose_default), { "as-child": "" }, {
												default: withCtx(() => [createVNode(unref(Button_default), {
													variant: "secondary",
													onClick: () => {
														clearErrors();
														reset();
													}
												}, {
													default: withCtx(() => [createTextVNode(" Cancel ")]),
													_: 1
												}, 8, ["onClick"])]),
												_: 2
											}, 1024), createVNode(unref(Button_default), {
												type: "submit",
												variant: "destructive",
												disabled: processing,
												"data-test": "confirm-delete-user-button"
											}, {
												default: withCtx(() => [createTextVNode(" Delete account ")]),
												_: 1
											}, 8, ["disabled"])]),
											_: 2
										}, 1024)
									]),
									_: 1
								}, 16, ["onError"])];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(unref(DialogTrigger_default), { "as-child": "" }, {
						default: withCtx(() => [createVNode(unref(Button_default), {
							variant: "destructive",
							"data-test": "delete-user-button"
						}, {
							default: withCtx(() => [createTextVNode("Delete account")]),
							_: 1
						})]),
						_: 1
					}), createVNode(unref(DialogContent_default), null, {
						default: withCtx(() => [createVNode(unref(Form), mergeProps(unref(ProfileController).destroy.form(), {
							"reset-on-success": "",
							onError: () => passwordInput.value?.focus(),
							options: { preserveScroll: true },
							class: "space-y-6"
						}), {
							default: withCtx(({ errors, processing, reset, clearErrors }) => [
								createVNode(unref(DialogHeader_default), { class: "space-y-3" }, {
									default: withCtx(() => [createVNode(unref(DialogTitle_default), null, {
										default: withCtx(() => [createTextVNode("Are you sure you want to delete your account?")]),
										_: 1
									}), createVNode(unref(DialogDescription_default), null, {
										default: withCtx(() => [createTextVNode(" Once your account is deleted, all of its resources and data will also be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ")]),
										_: 1
									})]),
									_: 1
								}),
								createVNode("div", { class: "grid gap-2" }, [
									createVNode(unref(Label_default), {
										for: "password",
										class: "sr-only"
									}, {
										default: withCtx(() => [createTextVNode("Password")]),
										_: 1
									}),
									createVNode(PasswordInput_default, {
										id: "password",
										name: "password",
										ref_key: "passwordInput",
										ref: passwordInput,
										placeholder: "Password"
									}, null, 512),
									createVNode(InputError_default, { message: errors.password }, null, 8, ["message"])
								]),
								createVNode(unref(DialogFooter_default), { class: "gap-2" }, {
									default: withCtx(() => [createVNode(unref(DialogClose_default), { "as-child": "" }, {
										default: withCtx(() => [createVNode(unref(Button_default), {
											variant: "secondary",
											onClick: () => {
												clearErrors();
												reset();
											}
										}, {
											default: withCtx(() => [createTextVNode(" Cancel ")]),
											_: 1
										}, 8, ["onClick"])]),
										_: 2
									}, 1024), createVNode(unref(Button_default), {
										type: "submit",
										variant: "destructive",
										disabled: processing,
										"data-test": "confirm-delete-user-button"
									}, {
										default: withCtx(() => [createTextVNode(" Delete account ")]),
										_: 1
									}, 8, ["disabled"])]),
									_: 2
								}, 1024)
							]),
							_: 1
						}, 16, ["onError"])]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(`</div></div>`);
		};
	}
});
//#endregion
//#region resources/js/components/DeleteUser.vue
var _sfc_setup$1 = DeleteUser_vue_vue_type_script_setup_true_lang_default.setup;
DeleteUser_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/DeleteUser.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var DeleteUser_default = DeleteUser_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/pages/settings/Profile.vue?vue&type=script&setup=true&lang.ts
var Profile_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	layout: { breadcrumbs: [{
		title: "Profile settings",
		href: edit$1()
	}] },
	__name: "Profile",
	__ssrInlineRender: true,
	setup(__props) {
		const page = usePage();
		const user = computed(() => page.props.auth.user);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Profile settings" }, null, _parent));
			_push(`<h1 class="sr-only">Profile settings</h1><div class="flex flex-col space-y-6">`);
			_push(ssrRenderComponent(Heading_default, {
				variant: "small",
				title: "Profile",
				description: "Update your name and email address"
			}, null, _parent));
			_push(ssrRenderComponent(unref(Form), mergeProps(unref(ProfileController).update.form(), { class: "space-y-6" }), {
				default: withCtx(({ errors, processing }, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="grid gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Label_default), { for: "name" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Name`);
								else return [createTextVNode("Name")];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(Input_default), {
							id: "name",
							class: "mt-1 block w-full",
							name: "name",
							"default-value": user.value.name,
							required: "",
							autocomplete: "name",
							placeholder: "Full name"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(InputError_default, {
							class: "mt-2",
							message: errors.name
						}, null, _parent, _scopeId));
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
							class: "mt-1 block w-full",
							name: "email",
							"default-value": user.value.email,
							required: "",
							autocomplete: "username",
							placeholder: "Email address"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(InputError_default, {
							class: "mt-2",
							message: errors.email
						}, null, _parent, _scopeId));
						_push(`</div>`);
						if (unref(page).props.mustVerifyEmail && !user.value.email_verified_at) {
							_push(`<div${_scopeId}><p class="-mt-4 text-sm text-muted-foreground"${_scopeId}> Your email address is unverified. `);
							_push(ssrRenderComponent(unref(Link), {
								href: unref(send)(),
								as: "button",
								class: "text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(` Click here to re-send the verification email. `);
									else return [createTextVNode(" Click here to re-send the verification email. ")];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</p>`);
							if (unref(page).props.status === "verification-link-sent") _push(`<div class="mt-2 text-sm font-medium text-green-600"${_scopeId}> A new verification link has been sent to your email address. </div>`);
							else _push(`<!---->`);
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`<div class="flex items-center gap-4"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Button_default), {
							disabled: processing,
							"data-test": "update-profile-button"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Save`);
								else return [createTextVNode("Save")];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [
						createVNode("div", { class: "grid gap-2" }, [
							createVNode(unref(Label_default), { for: "name" }, {
								default: withCtx(() => [createTextVNode("Name")]),
								_: 1
							}),
							createVNode(unref(Input_default), {
								id: "name",
								class: "mt-1 block w-full",
								name: "name",
								"default-value": user.value.name,
								required: "",
								autocomplete: "name",
								placeholder: "Full name"
							}, null, 8, ["default-value"]),
							createVNode(InputError_default, {
								class: "mt-2",
								message: errors.name
							}, null, 8, ["message"])
						]),
						createVNode("div", { class: "grid gap-2" }, [
							createVNode(unref(Label_default), { for: "email" }, {
								default: withCtx(() => [createTextVNode("Email address")]),
								_: 1
							}),
							createVNode(unref(Input_default), {
								id: "email",
								type: "email",
								class: "mt-1 block w-full",
								name: "email",
								"default-value": user.value.email,
								required: "",
								autocomplete: "username",
								placeholder: "Email address"
							}, null, 8, ["default-value"]),
							createVNode(InputError_default, {
								class: "mt-2",
								message: errors.email
							}, null, 8, ["message"])
						]),
						unref(page).props.mustVerifyEmail && !user.value.email_verified_at ? (openBlock(), createBlock("div", { key: 0 }, [createVNode("p", { class: "-mt-4 text-sm text-muted-foreground" }, [createTextVNode(" Your email address is unverified. "), createVNode(unref(Link), {
							href: unref(send)(),
							as: "button",
							class: "text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
						}, {
							default: withCtx(() => [createTextVNode(" Click here to re-send the verification email. ")]),
							_: 1
						}, 8, ["href"])]), unref(page).props.status === "verification-link-sent" ? (openBlock(), createBlock("div", {
							key: 0,
							class: "mt-2 text-sm font-medium text-green-600"
						}, " A new verification link has been sent to your email address. ")) : createCommentVNode("", true)])) : createCommentVNode("", true),
						createVNode("div", { class: "flex items-center gap-4" }, [createVNode(unref(Button_default), {
							disabled: processing,
							"data-test": "update-profile-button"
						}, {
							default: withCtx(() => [createTextVNode("Save")]),
							_: 1
						}, 8, ["disabled"])])
					];
				}),
				_: 1
			}, _parent));
			_push(`</div>`);
			_push(ssrRenderComponent(DeleteUser_default, null, null, _parent));
			_push(`<!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/pages/settings/Profile.vue
var _sfc_setup = Profile_vue_vue_type_script_setup_true_lang_default.setup;
Profile_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/settings/Profile.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Profile_default = Profile_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { Profile_default as default };

//# sourceMappingURL=Profile-BHCwBBTX.js.map