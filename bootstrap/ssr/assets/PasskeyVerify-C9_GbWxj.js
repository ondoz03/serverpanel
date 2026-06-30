import { t as Button_default } from "./button-DHJnCoso.js";
import { t as Separator_default } from "./separator-HaZ20jxp.js";
import { t as InputError_default } from "./InputError-CH3UMoP5.js";
import { t as Spinner_default } from "./spinner-ntep3OqV.js";
import { router } from "@inertiajs/vue3";
import { createBlock, createTextVNode, defineComponent, openBlock, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { KeyRound } from "@lucide/vue";
import { usePasskeyVerify } from "@laravel/passkeys/vue";
//#region resources/js/components/PasskeyVerify.vue?vue&type=script&setup=true&lang.ts
var PasskeyVerify_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "PasskeyVerify",
	__ssrInlineRender: true,
	props: {
		routes: {},
		label: {},
		loadingLabel: {},
		separator: {}
	},
	setup(__props) {
		const props = __props;
		const { verify, isLoading, error, isSupported } = usePasskeyVerify({
			...props.routes ? { routes: {
				options: props.routes.options.url,
				submit: props.routes.submit.url
			} } : {},
			onSuccess: (response) => {
				router.visit(response.redirect ?? "/dashboard");
			}
		});
		return (_ctx, _push, _parent, _attrs) => {
			if (unref(isSupported)) {
				_push(`<div${ssrRenderAttrs(_attrs)}><div class="grid gap-2">`);
				_push(ssrRenderComponent(unref(Button_default), {
					type: "button",
					variant: "outline",
					class: "w-full",
					onClick: unref(verify),
					disabled: unref(isLoading)
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							if (unref(isLoading)) _push(ssrRenderComponent(unref(Spinner_default), null, null, _parent, _scopeId));
							else _push(ssrRenderComponent(unref(KeyRound), { class: "h-4 w-4" }, null, _parent, _scopeId));
							_push(` ${ssrInterpolate(unref(isLoading) ? props.loadingLabel ?? "Authenticating..." : props.label ?? "Sign in with a passkey")}`);
						} else return [unref(isLoading) ? (openBlock(), createBlock(unref(Spinner_default), { key: 0 })) : (openBlock(), createBlock(unref(KeyRound), {
							key: 1,
							class: "h-4 w-4"
						})), createTextVNode(" " + toDisplayString(unref(isLoading) ? props.loadingLabel ?? "Authenticating..." : props.label ?? "Sign in with a passkey"), 1)];
					}),
					_: 1
				}, _parent));
				if (unref(error)) {
					_push(`<div class="text-center">`);
					_push(ssrRenderComponent(InputError_default, { message: unref(error) }, null, _parent));
					_push(`</div>`);
				} else _push(`<!---->`);
				_push(`</div><div class="relative my-6"><div class="absolute inset-0 flex items-center">`);
				_push(ssrRenderComponent(unref(Separator_default), { class: "w-full" }, null, _parent));
				_push(`</div><div class="relative flex justify-center text-xs uppercase"><span class="bg-background px-2 text-muted-foreground">${ssrInterpolate(props.separator ?? "Or continue with email")}</span></div></div></div>`);
			} else _push(`<!---->`);
		};
	}
});
//#endregion
//#region resources/js/components/PasskeyVerify.vue
var _sfc_setup = PasskeyVerify_vue_vue_type_script_setup_true_lang_default.setup;
PasskeyVerify_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/PasskeyVerify.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var PasskeyVerify_default = PasskeyVerify_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { PasskeyVerify_default as t };

//# sourceMappingURL=PasskeyVerify-C9_GbWxj.js.map