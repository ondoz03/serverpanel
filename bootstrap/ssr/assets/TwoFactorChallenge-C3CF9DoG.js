import { t as Button_default } from "./button-DHJnCoso.js";
import { t as Input_default } from "./input-DEmK1n7Q.js";
import { t as InputError_default } from "./InputError-CH3UMoP5.js";
import { a as InputOTP_default, i as InputOTPGroup_default, n as store, r as InputOTPSlot_default } from "./login-DvHbKI2G.js";
import { Form, Head, setLayoutProps } from "@inertiajs/vue3";
import { Fragment, computed, createBlock, createTextVNode, createVNode, defineComponent, mergeProps, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, watchEffect, withCtx } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/pages/auth/TwoFactorChallenge.vue?vue&type=script&setup=true&lang.ts
var TwoFactorChallenge_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "TwoFactorChallenge",
	__ssrInlineRender: true,
	setup(__props) {
		const showRecoveryInput = ref(false);
		const code = ref("");
		const authConfigContent = computed(() => {
			if (showRecoveryInput.value) return {
				title: "Recovery code",
				description: "Please confirm access to your account by entering one of your emergency recovery codes.",
				buttonText: "login using an authentication code"
			};
			return {
				title: "Authentication code",
				description: "Enter the authentication code provided by your authenticator application.",
				buttonText: "login using a recovery code"
			};
		});
		watchEffect(() => {
			setLayoutProps({
				title: authConfigContent.value.title,
				description: authConfigContent.value.description
			});
		});
		const toggleRecoveryMode = (clearErrors) => {
			showRecoveryInput.value = !showRecoveryInput.value;
			clearErrors();
			code.value = "";
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Two-factor authentication" }, null, _parent));
			_push(`<div class="space-y-6">`);
			if (!showRecoveryInput.value) _push(ssrRenderComponent(unref(Form), mergeProps(unref(store).form(), {
				class: "space-y-4",
				"reset-on-error": "",
				onError: ($event) => code.value = ""
			}), {
				default: withCtx(({ errors, processing, clearErrors }, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<input type="hidden" name="code"${ssrRenderAttr("value", code.value)}${_scopeId}><div class="flex flex-col items-center justify-center space-y-3 text-center"${_scopeId}><div class="flex w-full items-center justify-center"${_scopeId}>`);
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
						_push(`</div>`);
						_push(ssrRenderComponent(InputError_default, { message: errors.code }, null, _parent, _scopeId));
						_push(`</div>`);
						_push(ssrRenderComponent(unref(Button_default), {
							type: "submit",
							class: "w-full",
							disabled: processing
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Continue`);
								else return [createTextVNode("Continue")];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(`<div class="text-center text-sm text-muted-foreground"${_scopeId}><span${_scopeId}>or you can </span><button type="button" class="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"${_scopeId}>${ssrInterpolate(authConfigContent.value.buttonText)}</button></div>`);
					} else return [
						createVNode("input", {
							type: "hidden",
							name: "code",
							value: code.value
						}, null, 8, ["value"]),
						createVNode("div", { class: "flex flex-col items-center justify-center space-y-3 text-center" }, [createVNode("div", { class: "flex w-full items-center justify-center" }, [createVNode(unref(InputOTP_default), {
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
						])]), createVNode(InputError_default, { message: errors.code }, null, 8, ["message"])]),
						createVNode(unref(Button_default), {
							type: "submit",
							class: "w-full",
							disabled: processing
						}, {
							default: withCtx(() => [createTextVNode("Continue")]),
							_: 1
						}, 8, ["disabled"]),
						createVNode("div", { class: "text-center text-sm text-muted-foreground" }, [createVNode("span", null, "or you can "), createVNode("button", {
							type: "button",
							class: "text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500",
							onClick: () => toggleRecoveryMode(clearErrors)
						}, toDisplayString(authConfigContent.value.buttonText), 9, ["onClick"])])
					];
				}),
				_: 1
			}, _parent));
			else _push(ssrRenderComponent(unref(Form), mergeProps(unref(store).form(), {
				class: "space-y-4",
				"reset-on-error": ""
			}), {
				default: withCtx(({ errors, processing, clearErrors }, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Input_default), {
							name: "recovery_code",
							type: "text",
							placeholder: "Enter recovery code",
							autofocus: showRecoveryInput.value,
							required: ""
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(InputError_default, { message: errors.recovery_code }, null, _parent, _scopeId));
						_push(ssrRenderComponent(unref(Button_default), {
							type: "submit",
							class: "w-full",
							disabled: processing
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Continue`);
								else return [createTextVNode("Continue")];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(`<div class="text-center text-sm text-muted-foreground"${_scopeId}><span${_scopeId}>or you can </span><button type="button" class="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"${_scopeId}>${ssrInterpolate(authConfigContent.value.buttonText)}</button></div>`);
					} else return [
						createVNode(unref(Input_default), {
							name: "recovery_code",
							type: "text",
							placeholder: "Enter recovery code",
							autofocus: showRecoveryInput.value,
							required: ""
						}, null, 8, ["autofocus"]),
						createVNode(InputError_default, { message: errors.recovery_code }, null, 8, ["message"]),
						createVNode(unref(Button_default), {
							type: "submit",
							class: "w-full",
							disabled: processing
						}, {
							default: withCtx(() => [createTextVNode("Continue")]),
							_: 1
						}, 8, ["disabled"]),
						createVNode("div", { class: "text-center text-sm text-muted-foreground" }, [createVNode("span", null, "or you can "), createVNode("button", {
							type: "button",
							class: "text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500",
							onClick: () => toggleRecoveryMode(clearErrors)
						}, toDisplayString(authConfigContent.value.buttonText), 9, ["onClick"])])
					];
				}),
				_: 1
			}, _parent));
			_push(`</div><!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/pages/auth/TwoFactorChallenge.vue
var _sfc_setup = TwoFactorChallenge_vue_vue_type_script_setup_true_lang_default.setup;
TwoFactorChallenge_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/auth/TwoFactorChallenge.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var TwoFactorChallenge_default = TwoFactorChallenge_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { TwoFactorChallenge_default as default };

//# sourceMappingURL=TwoFactorChallenge-C3CF9DoG.js.map