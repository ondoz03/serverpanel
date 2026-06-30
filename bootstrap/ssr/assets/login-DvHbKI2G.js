import { n as cn } from "./button-DHJnCoso.js";
import { n as queryParams } from "./wayfinder-BrhwLpUM.js";
import { computed, defineComponent, mergeProps, renderSlot, unref, useSSRContext, withCtx } from "vue";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { useForwardProps, useForwardPropsEmits } from "reka-ui";
import { MinusIcon } from "@lucide/vue";
import { reactiveOmit } from "@vueuse/core";
import { OTPInput, useVueOTPContext } from "vue-input-otp";
//#region resources/js/components/ui/input-otp/InputOTP.vue?vue&type=script&setup=true&lang.ts
var InputOTP_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "InputOTP",
	__ssrInlineRender: true,
	props: {
		maxlength: {},
		textAlign: {},
		inputmode: {},
		containerClass: {},
		pushPasswordManagerStrategy: {},
		noScriptCssFallback: {},
		defaultValue: {},
		pasteTransformer: { type: Function },
		accept: {},
		alt: {},
		autocomplete: {},
		autofocus: { type: Boolean },
		capture: { type: [Boolean, String] },
		checked: { type: [
			Boolean,
			Array,
			Set
		] },
		crossorigin: {},
		disabled: { type: Boolean },
		enterKeyHint: {},
		form: {},
		formaction: {},
		formenctype: {},
		formmethod: {},
		formnovalidate: { type: Boolean },
		formtarget: {},
		height: {},
		indeterminate: { type: Boolean },
		list: {},
		max: {},
		min: {},
		minlength: {},
		multiple: { type: Boolean },
		name: {},
		pattern: {},
		placeholder: {},
		readonly: { type: Boolean },
		required: { type: Boolean },
		size: {},
		src: {},
		step: {},
		type: {},
		value: {},
		width: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"complete",
		"change",
		"select",
		"input",
		"focus",
		"blur",
		"mouseover",
		"mouseleave",
		"paste"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(OTPInput), mergeProps(unref(forwarded), {
				"container-class": unref(cn)("flex items-center gap-2 has-disabled:opacity-50", props.class),
				"data-slot": "input-otp",
				class: "disabled:cursor-not-allowed"
			}, _attrs), {
				default: withCtx((slotProps, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", slotProps, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default", slotProps)];
				}),
				_: 3
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/ui/input-otp/InputOTP.vue
var _sfc_setup$3 = InputOTP_vue_vue_type_script_setup_true_lang_default.setup;
InputOTP_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/input-otp/InputOTP.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var InputOTP_default = InputOTP_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/input-otp/InputOTPGroup.vue?vue&type=script&setup=true&lang.ts
var InputOTPGroup_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "InputOTPGroup",
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
		const forwarded = useForwardProps(reactiveOmit(props, "class"));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ "data-slot": "input-otp-group" }, unref(forwarded), { class: unref(cn)("flex items-center", props.class) }, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/input-otp/InputOTPGroup.vue
var _sfc_setup$2 = InputOTPGroup_vue_vue_type_script_setup_true_lang_default.setup;
InputOTPGroup_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/input-otp/InputOTPGroup.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var InputOTPGroup_default = InputOTPGroup_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/input-otp/InputOTPSeparator.vue?vue&type=script&setup=true&lang.ts
var InputOTPSeparator_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "InputOTPSeparator",
	__ssrInlineRender: true,
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(__props) {
		const forwarded = useForwardProps(__props);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				"data-slot": "input-otp-separator",
				role: "separator"
			}, unref(forwarded), _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, () => {
				_push(ssrRenderComponent(unref(MinusIcon), null, null, _parent));
			}, _push, _parent);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/input-otp/InputOTPSeparator.vue
var _sfc_setup$1 = InputOTPSeparator_vue_vue_type_script_setup_true_lang_default.setup;
InputOTPSeparator_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/input-otp/InputOTPSeparator.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/input-otp/InputOTPSlot.vue?vue&type=script&setup=true&lang.ts
var InputOTPSlot_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "InputOTPSlot",
	__ssrInlineRender: true,
	props: {
		index: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(__props) {
		const props = __props;
		const forwarded = useForwardProps(reactiveOmit(props, "class"));
		const context = useVueOTPContext();
		const slot = computed(() => context?.value.slots[props.index]);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps(unref(forwarded), {
				"data-slot": "input-otp-slot",
				"data-active": slot.value?.isActive,
				class: unref(cn)("data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]", props.class)
			}, _attrs))}>${ssrInterpolate(slot.value?.char)} `);
			if (slot.value?.hasFakeCaret) _push(`<div class="pointer-events-none absolute inset-0 flex items-center justify-center"><div class="animate-caret-blink bg-foreground h-4 w-px duration-1000"></div></div>`);
			else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/input-otp/InputOTPSlot.vue
var _sfc_setup = InputOTPSlot_vue_vue_type_script_setup_true_lang_default.setup;
InputOTPSlot_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/input-otp/InputOTPSlot.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var InputOTPSlot_default = InputOTPSlot_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/routes/two-factor/login/index.ts
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::store
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:56
* @route '/two-factor-challenge'
*/
var store = (options) => ({
	url: store.url(options),
	method: "post"
});
store.definition = {
	methods: ["post"],
	url: "/two-factor-challenge"
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::store
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:56
* @route '/two-factor-challenge'
*/
store.url = (options) => {
	return store.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::store
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:56
* @route '/two-factor-challenge'
*/
store.post = (options) => ({
	url: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::store
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:56
* @route '/two-factor-challenge'
*/
var storeForm = (options) => ({
	action: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::store
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:56
* @route '/two-factor-challenge'
*/
storeForm.post = (options) => ({
	action: store.url(options),
	method: "post"
});
store.form = storeForm;
var login = { store: Object.assign(store, store) };
//#endregion
export { InputOTP_default as a, InputOTPGroup_default as i, store as n, InputOTPSlot_default as r, login as t };

//# sourceMappingURL=login-DvHbKI2G.js.map