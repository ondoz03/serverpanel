import { n as cn, t as Button_default } from "./button-DHJnCoso.js";
import { createBlock, createCommentVNode, createTextVNode, createVNode, defineComponent, mergeProps, openBlock, renderSlot, unref, useSSRContext, withCtx } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle, DialogTrigger, useForwardProps, useForwardPropsEmits } from "reka-ui";
import { X } from "@lucide/vue";
import { reactiveOmit } from "@vueuse/core";
//#region resources/js/components/ui/dialog/Dialog.vue?vue&type=script&setup=true&lang.ts
var Dialog_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "Dialog",
	__ssrInlineRender: true,
	props: {
		open: { type: Boolean },
		defaultOpen: { type: Boolean },
		modal: { type: Boolean },
		unmountOnHide: { type: Boolean }
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DialogRoot), mergeProps({ "data-slot": "dialog" }, unref(forwarded), _attrs), {
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
//#region resources/js/components/ui/dialog/Dialog.vue
var _sfc_setup$9 = Dialog_vue_vue_type_script_setup_true_lang_default.setup;
Dialog_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dialog/Dialog.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var Dialog_default = Dialog_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/dialog/DialogClose.vue?vue&type=script&setup=true&lang.ts
var DialogClose_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "DialogClose",
	__ssrInlineRender: true,
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DialogClose), mergeProps({ "data-slot": "dialog-close" }, props, _attrs), {
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
//#region resources/js/components/ui/dialog/DialogClose.vue
var _sfc_setup$8 = DialogClose_vue_vue_type_script_setup_true_lang_default.setup;
DialogClose_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dialog/DialogClose.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var DialogClose_default = DialogClose_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/dialog/DialogOverlay.vue?vue&type=script&setup=true&lang.ts
var DialogOverlay_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "DialogOverlay",
	__ssrInlineRender: true,
	props: {
		forceMount: { type: Boolean },
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
			_push(ssrRenderComponent(unref(DialogOverlay), mergeProps({ "data-slot": "dialog-overlay" }, unref(delegatedProps), { class: unref(cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", props.class) }, _attrs), {
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
//#region resources/js/components/ui/dialog/DialogOverlay.vue
var _sfc_setup$7 = DialogOverlay_vue_vue_type_script_setup_true_lang_default.setup;
DialogOverlay_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dialog/DialogOverlay.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var DialogOverlay_default = DialogOverlay_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/dialog/DialogContent.vue?vue&type=script&setup=true&lang.ts
var DialogContent_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	inheritAttrs: false,
	__name: "DialogContent",
	__ssrInlineRender: true,
	props: {
		forceMount: { type: Boolean },
		disableOutsidePointerEvents: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		showCloseButton: {
			type: Boolean,
			default: true
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DialogPortal), _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(DialogOverlay_default, null, null, _parent, _scopeId));
						_push(ssrRenderComponent(unref(DialogContent), mergeProps({ "data-slot": "dialog-content" }, {
							..._ctx.$attrs,
							...unref(forwarded)
						}, { class: unref(cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", props.class) }), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
									if (__props.showCloseButton) _push(ssrRenderComponent(unref(DialogClose), {
										"data-slot": "dialog-close",
										class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) {
												_push(ssrRenderComponent(unref(X), null, null, _parent, _scopeId));
												_push(`<span class="sr-only"${_scopeId}>Close</span>`);
											} else return [createVNode(unref(X)), createVNode("span", { class: "sr-only" }, "Close")];
										}),
										_: 1
									}, _parent, _scopeId));
									else _push(`<!---->`);
								} else return [renderSlot(_ctx.$slots, "default"), __props.showCloseButton ? (openBlock(), createBlock(unref(DialogClose), {
									key: 0,
									"data-slot": "dialog-close",
									class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
								}, {
									default: withCtx(() => [createVNode(unref(X)), createVNode("span", { class: "sr-only" }, "Close")]),
									_: 1
								})) : createCommentVNode("", true)];
							}),
							_: 3
						}, _parent, _scopeId));
					} else return [createVNode(DialogOverlay_default), createVNode(unref(DialogContent), mergeProps({ "data-slot": "dialog-content" }, {
						..._ctx.$attrs,
						...unref(forwarded)
					}, { class: unref(cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", props.class) }), {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default"), __props.showCloseButton ? (openBlock(), createBlock(unref(DialogClose), {
							key: 0,
							"data-slot": "dialog-close",
							class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
						}, {
							default: withCtx(() => [createVNode(unref(X)), createVNode("span", { class: "sr-only" }, "Close")]),
							_: 1
						})) : createCommentVNode("", true)]),
						_: 3
					}, 16, ["class"])];
				}),
				_: 3
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/ui/dialog/DialogContent.vue
var _sfc_setup$6 = DialogContent_vue_vue_type_script_setup_true_lang_default.setup;
DialogContent_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dialog/DialogContent.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var DialogContent_default = DialogContent_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/dialog/DialogDescription.vue?vue&type=script&setup=true&lang.ts
var DialogDescription_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "DialogDescription",
	__ssrInlineRender: true,
	props: {
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
		const forwardedProps = useForwardProps(reactiveOmit(props, "class"));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DialogDescription), mergeProps({ "data-slot": "dialog-description" }, unref(forwardedProps), { class: unref(cn)("text-muted-foreground text-sm", props.class) }, _attrs), {
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
//#region resources/js/components/ui/dialog/DialogDescription.vue
var _sfc_setup$5 = DialogDescription_vue_vue_type_script_setup_true_lang_default.setup;
DialogDescription_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dialog/DialogDescription.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var DialogDescription_default = DialogDescription_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/dialog/DialogFooter.vue?vue&type=script&setup=true&lang.ts
var DialogFooter_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "DialogFooter",
	__ssrInlineRender: true,
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		showCloseButton: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				"data-slot": "dialog-footer",
				class: unref(cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			if (__props.showCloseButton) _push(ssrRenderComponent(unref(DialogClose), { "as-child": "" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(Button_default), { variant: "outline" }, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(` Close `);
							else return [createTextVNode(" Close ")];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(unref(Button_default), { variant: "outline" }, {
						default: withCtx(() => [createTextVNode(" Close ")]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/dialog/DialogFooter.vue
var _sfc_setup$4 = DialogFooter_vue_vue_type_script_setup_true_lang_default.setup;
DialogFooter_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dialog/DialogFooter.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var DialogFooter_default = DialogFooter_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/dialog/DialogHeader.vue?vue&type=script&setup=true&lang.ts
var DialogHeader_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "DialogHeader",
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
				"data-slot": "dialog-header",
				class: unref(cn)("flex flex-col gap-2 text-center sm:text-left", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/dialog/DialogHeader.vue
var _sfc_setup$3 = DialogHeader_vue_vue_type_script_setup_true_lang_default.setup;
DialogHeader_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dialog/DialogHeader.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var DialogHeader_default = DialogHeader_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/dialog/DialogScrollContent.vue?vue&type=script&setup=true&lang.ts
var DialogScrollContent_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	inheritAttrs: false,
	__name: "DialogScrollContent",
	__ssrInlineRender: true,
	props: {
		forceMount: { type: Boolean },
		disableOutsidePointerEvents: { type: Boolean },
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
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DialogPortal), _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(DialogOverlay), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(ssrRenderComponent(unref(DialogContent), mergeProps({ class: unref(cn)("relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full", props.class) }, {
								..._ctx.$attrs,
								...unref(forwarded)
							}, { onPointerDownOutside: (event) => {
								const originalEvent = event.detail.originalEvent;
								const target = originalEvent.target;
								if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) event.preventDefault();
							} }), {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
										_push(ssrRenderComponent(unref(DialogClose), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) {
													_push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent, _scopeId));
													_push(`<span class="sr-only"${_scopeId}>Close</span>`);
												} else return [createVNode(unref(X), { class: "w-4 h-4" }), createVNode("span", { class: "sr-only" }, "Close")];
											}),
											_: 1
										}, _parent, _scopeId));
									} else return [renderSlot(_ctx.$slots, "default"), createVNode(unref(DialogClose), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
										default: withCtx(() => [createVNode(unref(X), { class: "w-4 h-4" }), createVNode("span", { class: "sr-only" }, "Close")]),
										_: 1
									})];
								}),
								_: 3
							}, _parent, _scopeId));
							else return [createVNode(unref(DialogContent), mergeProps({ class: unref(cn)("relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full", props.class) }, {
								..._ctx.$attrs,
								...unref(forwarded)
							}, { onPointerDownOutside: (event) => {
								const originalEvent = event.detail.originalEvent;
								const target = originalEvent.target;
								if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) event.preventDefault();
							} }), {
								default: withCtx(() => [renderSlot(_ctx.$slots, "default"), createVNode(unref(DialogClose), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
									default: withCtx(() => [createVNode(unref(X), { class: "w-4 h-4" }), createVNode("span", { class: "sr-only" }, "Close")]),
									_: 1
								})]),
								_: 3
							}, 16, ["class", "onPointerDownOutside"])];
						}),
						_: 3
					}, _parent, _scopeId));
					else return [createVNode(unref(DialogOverlay), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
						default: withCtx(() => [createVNode(unref(DialogContent), mergeProps({ class: unref(cn)("relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full", props.class) }, {
							..._ctx.$attrs,
							...unref(forwarded)
						}, { onPointerDownOutside: (event) => {
							const originalEvent = event.detail.originalEvent;
							const target = originalEvent.target;
							if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) event.preventDefault();
						} }), {
							default: withCtx(() => [renderSlot(_ctx.$slots, "default"), createVNode(unref(DialogClose), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
								default: withCtx(() => [createVNode(unref(X), { class: "w-4 h-4" }), createVNode("span", { class: "sr-only" }, "Close")]),
								_: 1
							})]),
							_: 3
						}, 16, ["class", "onPointerDownOutside"])]),
						_: 3
					})];
				}),
				_: 3
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/ui/dialog/DialogScrollContent.vue
var _sfc_setup$2 = DialogScrollContent_vue_vue_type_script_setup_true_lang_default.setup;
DialogScrollContent_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dialog/DialogScrollContent.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/dialog/DialogTitle.vue?vue&type=script&setup=true&lang.ts
var DialogTitle_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "DialogTitle",
	__ssrInlineRender: true,
	props: {
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
		const forwardedProps = useForwardProps(reactiveOmit(props, "class"));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DialogTitle), mergeProps({ "data-slot": "dialog-title" }, unref(forwardedProps), { class: unref(cn)("text-lg leading-none font-semibold", props.class) }, _attrs), {
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
//#region resources/js/components/ui/dialog/DialogTitle.vue
var _sfc_setup$1 = DialogTitle_vue_vue_type_script_setup_true_lang_default.setup;
DialogTitle_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dialog/DialogTitle.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var DialogTitle_default = DialogTitle_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/dialog/DialogTrigger.vue?vue&type=script&setup=true&lang.ts
var DialogTrigger_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "DialogTrigger",
	__ssrInlineRender: true,
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DialogTrigger), mergeProps({ "data-slot": "dialog-trigger" }, props, _attrs), {
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
//#region resources/js/components/ui/dialog/DialogTrigger.vue
var _sfc_setup = DialogTrigger_vue_vue_type_script_setup_true_lang_default.setup;
DialogTrigger_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dialog/DialogTrigger.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var DialogTrigger_default = DialogTrigger_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { DialogDescription_default as a, Dialog_default as c, DialogFooter_default as i, DialogTitle_default as n, DialogContent_default as o, DialogHeader_default as r, DialogClose_default as s, DialogTrigger_default as t };

//# sourceMappingURL=dialog-DANPXjKB.js.map