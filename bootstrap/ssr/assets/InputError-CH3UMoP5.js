import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
//#region resources/js/components/InputError.vue?vue&type=script&setup=true&lang.ts
var InputError_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "InputError",
	__ssrInlineRender: true,
	props: { message: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps(_attrs, { style: __props.message ? null : { display: "none" } }))}><p class="text-sm text-red-600 dark:text-red-500">${ssrInterpolate(__props.message)}</p></div>`);
		};
	}
});
//#endregion
//#region resources/js/components/InputError.vue
var _sfc_setup = InputError_vue_vue_type_script_setup_true_lang_default.setup;
InputError_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/InputError.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var InputError_default = InputError_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { InputError_default as t };

//# sourceMappingURL=InputError-CH3UMoP5.js.map