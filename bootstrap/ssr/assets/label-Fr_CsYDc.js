import { n as cn } from "./button-DHJnCoso.js";
import { defineComponent, mergeProps, renderSlot, unref, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { Label } from "reka-ui";
import { reactiveOmit } from "@vueuse/core";
//#region resources/js/components/ui/label/Label.vue?vue&type=script&setup=true&lang.ts
var Label_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "Label",
	__ssrInlineRender: true,
	props: {
		for: {},
		asChild: { type: Boolean },
		as: {},
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
		const delegatedProps = reactiveOmit(props, "class");
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Label), mergeProps({ "data-slot": "label" }, unref(delegatedProps), { class: unref(cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", props.class) }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/ui/label/Label.vue
var _sfc_setup = Label_vue_vue_type_script_setup_true_lang_default.setup;
Label_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/label/Label.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Label_default = Label_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { Label_default as t };

//# sourceMappingURL=label-Fr_CsYDc.js.map