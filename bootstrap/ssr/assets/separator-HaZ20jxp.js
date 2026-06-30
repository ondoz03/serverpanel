import { n as cn } from "./button-DHJnCoso.js";
import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { Separator } from "reka-ui";
import { reactiveOmit } from "@vueuse/core";
//#region resources/js/components/ui/separator/Separator.vue?vue&type=script&setup=true&lang.ts
var Separator_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "Separator",
	__ssrInlineRender: true,
	props: {
		orientation: { default: "horizontal" },
		decorative: {
			type: Boolean,
			default: true
		},
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
			_push(ssrRenderComponent(unref(Separator), mergeProps({ "data-slot": "separator" }, unref(delegatedProps), { class: unref(cn)("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", props.class) }, _attrs), null, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/ui/separator/Separator.vue
var _sfc_setup = Separator_vue_vue_type_script_setup_true_lang_default.setup;
Separator_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/separator/Separator.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Separator_default = Separator_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { Separator_default as t };

//# sourceMappingURL=separator-HaZ20jxp.js.map