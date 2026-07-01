import { t as initializeTheme } from "./assets/useAppearance-DAHt6sku.js";
import { n as cn, r as toUrl, t as Button_default } from "./assets/button-DHJnCoso.js";
import { t as Input_default } from "./assets/input-DEmK1n7Q.js";
import { t as Separator_default } from "./assets/separator-HaZ20jxp.js";
import { i as logout, n as home, t as dashboard } from "./assets/routes-DSDfhJr3.js";
import { t as edit } from "./assets/profile-C0rmUldE.js";
import { t as Heading_default } from "./assets/Heading-DS5EZX3A.js";
import { t as edit$1 } from "./assets/appearance-C9XoGQxF.js";
import { t as edit$2 } from "./assets/security-C4aqlBsk.js";
import { Link, createInertiaApp, router, usePage } from "@inertiajs/vue3";
import { Fragment, computed, createBlock, createCommentVNode, createTextVNode, createVNode, defineComponent, mergeProps, openBlock, readonly, ref, renderList, renderSlot, resolveDynamicComponent, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { renderToString, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderVNode } from "vue/server-renderer";
import { cva } from "class-variance-authority";
import { AvatarFallback, AvatarImage, AvatarRoot, DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle, DialogTrigger, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuItemIndicator, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuRoot, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Primitive, TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger, createContext, useForwardProps, useForwardPropsEmits } from "reka-ui";
import { AppWindow, Check, ChevronRight, ChevronsUpDown, Circle, CircleCheckIcon, Database, InfoIcon, LayoutGrid, Loader2Icon, LogOut, MoreHorizontal, OctagonXIcon, PanelLeftClose, PanelLeftOpen, ScrollText, Server, Settings, Shield, Timer, TriangleAlertIcon, X, XIcon } from "@lucide/vue";
import { defaultDocument, reactiveOmit, useEventListener, useMediaQuery, useVModel } from "@vueuse/core";
import { Toaster, toast } from "vue-sonner";
import createServer from "@inertiajs/vue3/server";
//#region resources/js/components/ui/sheet/Sheet.vue?vue&type=script&setup=true&lang.ts
var Sheet_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "Sheet",
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
			_push(ssrRenderComponent(unref(DialogRoot), mergeProps({ "data-slot": "sheet" }, unref(forwarded), _attrs), {
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
//#region resources/js/components/ui/sheet/Sheet.vue
var _sfc_setup$79 = Sheet_vue_vue_type_script_setup_true_lang_default.setup;
Sheet_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sheet/Sheet.vue");
	return _sfc_setup$79 ? _sfc_setup$79(props, ctx) : void 0;
};
var Sheet_default = Sheet_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/sheet/SheetClose.vue?vue&type=script&setup=true&lang.ts
var SheetClose_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SheetClose",
	__ssrInlineRender: true,
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DialogClose), mergeProps({ "data-slot": "sheet-close" }, props, _attrs), {
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
//#region resources/js/components/ui/sheet/SheetClose.vue
var _sfc_setup$78 = SheetClose_vue_vue_type_script_setup_true_lang_default.setup;
SheetClose_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sheet/SheetClose.vue");
	return _sfc_setup$78 ? _sfc_setup$78(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/sheet/SheetOverlay.vue?vue&type=script&setup=true&lang.ts
var SheetOverlay_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SheetOverlay",
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
			_push(ssrRenderComponent(unref(DialogOverlay), mergeProps({
				"data-slot": "sheet-overlay",
				class: unref(cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", props.class)
			}, unref(delegatedProps), _attrs), {
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
//#region resources/js/components/ui/sheet/SheetOverlay.vue
var _sfc_setup$77 = SheetOverlay_vue_vue_type_script_setup_true_lang_default.setup;
SheetOverlay_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sheet/SheetOverlay.vue");
	return _sfc_setup$77 ? _sfc_setup$77(props, ctx) : void 0;
};
var SheetOverlay_default = SheetOverlay_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/sheet/SheetContent.vue?vue&type=script&setup=true&lang.ts
var SheetContent_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	inheritAttrs: false,
	__name: "SheetContent",
	__ssrInlineRender: true,
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		side: { default: "right" },
		forceMount: { type: Boolean },
		disableOutsidePointerEvents: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
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
		const forwarded = useForwardPropsEmits(reactiveOmit(props, "class", "side"), emits);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DialogPortal), _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(SheetOverlay_default, null, null, _parent, _scopeId));
						_push(ssrRenderComponent(unref(DialogContent), mergeProps({
							"data-slot": "sheet-content",
							class: unref(cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", __props.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", __props.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", __props.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", __props.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", props.class)
						}, {
							..._ctx.$attrs,
							...unref(forwarded)
						}), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
									_push(ssrRenderComponent(unref(DialogClose), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) {
												_push(ssrRenderComponent(unref(X), { class: "size-4" }, null, _parent, _scopeId));
												_push(`<span class="sr-only"${_scopeId}>Close</span>`);
											} else return [createVNode(unref(X), { class: "size-4" }), createVNode("span", { class: "sr-only" }, "Close")];
										}),
										_: 1
									}, _parent, _scopeId));
								} else return [renderSlot(_ctx.$slots, "default"), createVNode(unref(DialogClose), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
									default: withCtx(() => [createVNode(unref(X), { class: "size-4" }), createVNode("span", { class: "sr-only" }, "Close")]),
									_: 1
								})];
							}),
							_: 3
						}, _parent, _scopeId));
					} else return [createVNode(SheetOverlay_default), createVNode(unref(DialogContent), mergeProps({
						"data-slot": "sheet-content",
						class: unref(cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", __props.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", __props.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", __props.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", __props.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", props.class)
					}, {
						..._ctx.$attrs,
						...unref(forwarded)
					}), {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default"), createVNode(unref(DialogClose), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
							default: withCtx(() => [createVNode(unref(X), { class: "size-4" }), createVNode("span", { class: "sr-only" }, "Close")]),
							_: 1
						})]),
						_: 3
					}, 16, ["class"])];
				}),
				_: 3
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/ui/sheet/SheetContent.vue
var _sfc_setup$76 = SheetContent_vue_vue_type_script_setup_true_lang_default.setup;
SheetContent_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sheet/SheetContent.vue");
	return _sfc_setup$76 ? _sfc_setup$76(props, ctx) : void 0;
};
var SheetContent_default = SheetContent_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/sheet/SheetDescription.vue?vue&type=script&setup=true&lang.ts
var SheetDescription_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SheetDescription",
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
		const delegatedProps = reactiveOmit(props, "class");
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DialogDescription), mergeProps({
				"data-slot": "sheet-description",
				class: unref(cn)("text-muted-foreground text-sm", props.class)
			}, unref(delegatedProps), _attrs), {
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
//#region resources/js/components/ui/sheet/SheetDescription.vue
var _sfc_setup$75 = SheetDescription_vue_vue_type_script_setup_true_lang_default.setup;
SheetDescription_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sheet/SheetDescription.vue");
	return _sfc_setup$75 ? _sfc_setup$75(props, ctx) : void 0;
};
var SheetDescription_default = SheetDescription_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/sheet/SheetFooter.vue?vue&type=script&setup=true&lang.ts
var SheetFooter_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SheetFooter",
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
				"data-slot": "sheet-footer",
				class: unref(cn)("mt-auto flex flex-col gap-2 p-4", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/sheet/SheetFooter.vue
var _sfc_setup$74 = SheetFooter_vue_vue_type_script_setup_true_lang_default.setup;
SheetFooter_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sheet/SheetFooter.vue");
	return _sfc_setup$74 ? _sfc_setup$74(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/sheet/SheetHeader.vue?vue&type=script&setup=true&lang.ts
var SheetHeader_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SheetHeader",
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
				"data-slot": "sheet-header",
				class: unref(cn)("flex flex-col gap-1.5 p-4", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/sheet/SheetHeader.vue
var _sfc_setup$73 = SheetHeader_vue_vue_type_script_setup_true_lang_default.setup;
SheetHeader_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sheet/SheetHeader.vue");
	return _sfc_setup$73 ? _sfc_setup$73(props, ctx) : void 0;
};
var SheetHeader_default = SheetHeader_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/sheet/SheetTitle.vue?vue&type=script&setup=true&lang.ts
var SheetTitle_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SheetTitle",
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
		const delegatedProps = reactiveOmit(props, "class");
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DialogTitle), mergeProps({
				"data-slot": "sheet-title",
				class: unref(cn)("text-foreground font-semibold", props.class)
			}, unref(delegatedProps), _attrs), {
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
//#region resources/js/components/ui/sheet/SheetTitle.vue
var _sfc_setup$72 = SheetTitle_vue_vue_type_script_setup_true_lang_default.setup;
SheetTitle_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sheet/SheetTitle.vue");
	return _sfc_setup$72 ? _sfc_setup$72(props, ctx) : void 0;
};
var SheetTitle_default = SheetTitle_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/sheet/SheetTrigger.vue?vue&type=script&setup=true&lang.ts
var SheetTrigger_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SheetTrigger",
	__ssrInlineRender: true,
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DialogTrigger), mergeProps({ "data-slot": "sheet-trigger" }, props, _attrs), {
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
//#region resources/js/components/ui/sheet/SheetTrigger.vue
var _sfc_setup$71 = SheetTrigger_vue_vue_type_script_setup_true_lang_default.setup;
SheetTrigger_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sheet/SheetTrigger.vue");
	return _sfc_setup$71 ? _sfc_setup$71(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/sidebar/utils.ts
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 3600 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var [useSidebar, provideSidebarContext] = createContext("Sidebar");
//#endregion
//#region resources/js/components/ui/sidebar/Sidebar.vue?vue&type=script&setup=true&lang.ts
var Sidebar_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	inheritAttrs: false,
	__name: "Sidebar",
	__ssrInlineRender: true,
	props: {
		side: { default: "left" },
		variant: { default: "sidebar" },
		collapsible: { default: "offcanvas" },
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
		const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
		return (_ctx, _push, _parent, _attrs) => {
			if (__props.collapsible === "none") {
				_push(`<div${ssrRenderAttrs(mergeProps({
					"data-slot": "sidebar",
					class: unref(cn)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", props.class)
				}, _ctx.$attrs, _attrs))}>`);
				ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
				_push(`</div>`);
			} else if (unref(isMobile)) _push(ssrRenderComponent(unref(Sheet_default), mergeProps({ open: unref(openMobile) }, _ctx.$attrs, { "onUpdate:open": unref(setOpenMobile) }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(SheetContent_default), {
						"data-sidebar": "sidebar",
						"data-slot": "sidebar",
						"data-mobile": "true",
						side: __props.side,
						class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
						style: { "--sidebar-width": unref(SIDEBAR_WIDTH_MOBILE) }
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(ssrRenderComponent(SheetHeader_default, { class: "sr-only" }, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) {
											_push(ssrRenderComponent(SheetTitle_default, null, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(`Sidebar`);
													else return [createTextVNode("Sidebar")];
												}),
												_: 1
											}, _parent, _scopeId));
											_push(ssrRenderComponent(SheetDescription_default, null, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(`Displays the mobile sidebar.`);
													else return [createTextVNode("Displays the mobile sidebar.")];
												}),
												_: 1
											}, _parent, _scopeId));
										} else return [createVNode(SheetTitle_default, null, {
											default: withCtx(() => [createTextVNode("Sidebar")]),
											_: 1
										}), createVNode(SheetDescription_default, null, {
											default: withCtx(() => [createTextVNode("Displays the mobile sidebar.")]),
											_: 1
										})];
									}),
									_: 1
								}, _parent, _scopeId));
								_push(`<div class="flex h-full w-full flex-col"${_scopeId}>`);
								ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
								_push(`</div>`);
							} else return [createVNode(SheetHeader_default, { class: "sr-only" }, {
								default: withCtx(() => [createVNode(SheetTitle_default, null, {
									default: withCtx(() => [createTextVNode("Sidebar")]),
									_: 1
								}), createVNode(SheetDescription_default, null, {
									default: withCtx(() => [createTextVNode("Displays the mobile sidebar.")]),
									_: 1
								})]),
								_: 1
							}), createVNode("div", { class: "flex h-full w-full flex-col" }, [renderSlot(_ctx.$slots, "default")])];
						}),
						_: 3
					}, _parent, _scopeId));
					else return [createVNode(unref(SheetContent_default), {
						"data-sidebar": "sidebar",
						"data-slot": "sidebar",
						"data-mobile": "true",
						side: __props.side,
						class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
						style: { "--sidebar-width": unref(SIDEBAR_WIDTH_MOBILE) }
					}, {
						default: withCtx(() => [createVNode(SheetHeader_default, { class: "sr-only" }, {
							default: withCtx(() => [createVNode(SheetTitle_default, null, {
								default: withCtx(() => [createTextVNode("Sidebar")]),
								_: 1
							}), createVNode(SheetDescription_default, null, {
								default: withCtx(() => [createTextVNode("Displays the mobile sidebar.")]),
								_: 1
							})]),
							_: 1
						}), createVNode("div", { class: "flex h-full w-full flex-col" }, [renderSlot(_ctx.$slots, "default")])]),
						_: 3
					}, 8, ["side", "style"])];
				}),
				_: 3
			}, _parent));
			else {
				_push(`<div${ssrRenderAttrs(mergeProps({
					class: "group peer text-sidebar-foreground hidden md:block",
					"data-slot": "sidebar",
					"data-state": unref(state),
					"data-collapsible": unref(state) === "collapsed" ? __props.collapsible : "",
					"data-variant": __props.variant,
					"data-side": __props.side
				}, _attrs))}><div class="${ssrRenderClass(unref(cn)("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", __props.variant === "floating" || __props.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"))}"></div><div${ssrRenderAttrs(mergeProps({ class: unref(cn)("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", __props.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", __props.variant === "floating" || __props.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", props.class) }, _ctx.$attrs))}><div data-sidebar="sidebar" class="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm">`);
				ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
				_push(`</div></div></div>`);
			}
		};
	}
});
//#endregion
//#region resources/js/components/ui/sidebar/Sidebar.vue
var _sfc_setup$70 = Sidebar_vue_vue_type_script_setup_true_lang_default.setup;
Sidebar_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/Sidebar.vue");
	return _sfc_setup$70 ? _sfc_setup$70(props, ctx) : void 0;
};
var Sidebar_default = Sidebar_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/sidebar/SidebarContent.vue?vue&type=script&setup=true&lang.ts
var SidebarContent_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarContent",
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
				"data-slot": "sidebar-content",
				"data-sidebar": "content",
				class: unref(cn)("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/sidebar/SidebarContent.vue
var _sfc_setup$69 = SidebarContent_vue_vue_type_script_setup_true_lang_default.setup;
SidebarContent_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarContent.vue");
	return _sfc_setup$69 ? _sfc_setup$69(props, ctx) : void 0;
};
var SidebarContent_default = SidebarContent_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/sidebar/SidebarFooter.vue?vue&type=script&setup=true&lang.ts
var SidebarFooter_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarFooter",
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
				"data-slot": "sidebar-footer",
				"data-sidebar": "footer",
				class: unref(cn)("flex flex-col gap-2 p-2", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/sidebar/SidebarFooter.vue
var _sfc_setup$68 = SidebarFooter_vue_vue_type_script_setup_true_lang_default.setup;
SidebarFooter_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarFooter.vue");
	return _sfc_setup$68 ? _sfc_setup$68(props, ctx) : void 0;
};
var SidebarFooter_default = SidebarFooter_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/sidebar/SidebarGroup.vue?vue&type=script&setup=true&lang.ts
var SidebarGroup_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarGroup",
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
				"data-slot": "sidebar-group",
				"data-sidebar": "group",
				class: unref(cn)("relative flex w-full min-w-0 flex-col p-2", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/sidebar/SidebarGroup.vue
var _sfc_setup$67 = SidebarGroup_vue_vue_type_script_setup_true_lang_default.setup;
SidebarGroup_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarGroup.vue");
	return _sfc_setup$67 ? _sfc_setup$67(props, ctx) : void 0;
};
var SidebarGroup_default = SidebarGroup_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/sidebar/SidebarGroupAction.vue?vue&type=script&setup=true&lang.ts
var SidebarGroupAction_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarGroupAction",
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
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				"data-slot": "sidebar-group-action",
				"data-sidebar": "group-action",
				as: __props.as,
				"as-child": __props.asChild,
				class: unref(cn)("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "group-data-[collapsible=icon]:hidden", props.class)
			}, _attrs), {
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
//#region resources/js/components/ui/sidebar/SidebarGroupAction.vue
var _sfc_setup$66 = SidebarGroupAction_vue_vue_type_script_setup_true_lang_default.setup;
SidebarGroupAction_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarGroupAction.vue");
	return _sfc_setup$66 ? _sfc_setup$66(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/sidebar/SidebarGroupContent.vue?vue&type=script&setup=true&lang.ts
var SidebarGroupContent_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarGroupContent",
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
				"data-slot": "sidebar-group-content",
				"data-sidebar": "group-content",
				class: unref(cn)("w-full text-sm", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/sidebar/SidebarGroupContent.vue
var _sfc_setup$65 = SidebarGroupContent_vue_vue_type_script_setup_true_lang_default.setup;
SidebarGroupContent_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarGroupContent.vue");
	return _sfc_setup$65 ? _sfc_setup$65(props, ctx) : void 0;
};
var SidebarGroupContent_default = SidebarGroupContent_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/sidebar/SidebarGroupLabel.vue?vue&type=script&setup=true&lang.ts
var SidebarGroupLabel_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarGroupLabel",
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
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				"data-slot": "sidebar-group-label",
				"data-sidebar": "group-label",
				as: __props.as,
				"as-child": __props.asChild,
				class: unref(cn)("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", props.class)
			}, _attrs), {
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
//#region resources/js/components/ui/sidebar/SidebarGroupLabel.vue
var _sfc_setup$64 = SidebarGroupLabel_vue_vue_type_script_setup_true_lang_default.setup;
SidebarGroupLabel_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarGroupLabel.vue");
	return _sfc_setup$64 ? _sfc_setup$64(props, ctx) : void 0;
};
var SidebarGroupLabel_default = SidebarGroupLabel_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/sidebar/SidebarHeader.vue?vue&type=script&setup=true&lang.ts
var SidebarHeader_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarHeader",
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
				"data-slot": "sidebar-header",
				"data-sidebar": "header",
				class: unref(cn)("flex flex-col gap-2 p-2", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/sidebar/SidebarHeader.vue
var _sfc_setup$63 = SidebarHeader_vue_vue_type_script_setup_true_lang_default.setup;
SidebarHeader_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarHeader.vue");
	return _sfc_setup$63 ? _sfc_setup$63(props, ctx) : void 0;
};
var SidebarHeader_default = SidebarHeader_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/sidebar/SidebarInput.vue?vue&type=script&setup=true&lang.ts
var SidebarInput_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarInput",
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
			_push(ssrRenderComponent(unref(Input_default), mergeProps({
				"data-slot": "sidebar-input",
				"data-sidebar": "input",
				class: unref(cn)("bg-background h-8 w-full shadow-none", props.class)
			}, _attrs), {
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
//#region resources/js/components/ui/sidebar/SidebarInput.vue
var _sfc_setup$62 = SidebarInput_vue_vue_type_script_setup_true_lang_default.setup;
SidebarInput_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarInput.vue");
	return _sfc_setup$62 ? _sfc_setup$62(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/sidebar/SidebarInset.vue?vue&type=script&setup=true&lang.ts
var SidebarInset_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarInset",
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
			_push(`<main${ssrRenderAttrs(mergeProps({
				"data-slot": "sidebar-inset",
				class: unref(cn)("bg-background relative flex w-full flex-1 flex-col", "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</main>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/sidebar/SidebarInset.vue
var _sfc_setup$61 = SidebarInset_vue_vue_type_script_setup_true_lang_default.setup;
SidebarInset_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarInset.vue");
	return _sfc_setup$61 ? _sfc_setup$61(props, ctx) : void 0;
};
var SidebarInset_default = SidebarInset_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/sidebar/SidebarMenu.vue?vue&type=script&setup=true&lang.ts
var SidebarMenu_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarMenu",
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
			_push(`<ul${ssrRenderAttrs(mergeProps({
				"data-slot": "sidebar-menu",
				"data-sidebar": "menu",
				class: unref(cn)("flex w-full min-w-0 flex-col gap-1", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</ul>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/sidebar/SidebarMenu.vue
var _sfc_setup$60 = SidebarMenu_vue_vue_type_script_setup_true_lang_default.setup;
SidebarMenu_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarMenu.vue");
	return _sfc_setup$60 ? _sfc_setup$60(props, ctx) : void 0;
};
var SidebarMenu_default = SidebarMenu_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/sidebar/SidebarMenuAction.vue?vue&type=script&setup=true&lang.ts
var SidebarMenuAction_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarMenuAction",
	__ssrInlineRender: true,
	props: {
		asChild: { type: Boolean },
		as: { default: "button" },
		showOnHover: { type: Boolean },
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
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				"data-slot": "sidebar-menu-action",
				"data-sidebar": "menu-action",
				class: unref(cn)("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", __props.showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0", props.class),
				as: __props.as,
				"as-child": __props.asChild
			}, _attrs), {
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
//#region resources/js/components/ui/sidebar/SidebarMenuAction.vue
var _sfc_setup$59 = SidebarMenuAction_vue_vue_type_script_setup_true_lang_default.setup;
SidebarMenuAction_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarMenuAction.vue");
	return _sfc_setup$59 ? _sfc_setup$59(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/sidebar/SidebarMenuBadge.vue?vue&type=script&setup=true&lang.ts
var SidebarMenuBadge_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarMenuBadge",
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
				"data-slot": "sidebar-menu-badge",
				"data-sidebar": "menu-badge",
				class: unref(cn)("text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/sidebar/SidebarMenuBadge.vue
var _sfc_setup$58 = SidebarMenuBadge_vue_vue_type_script_setup_true_lang_default.setup;
SidebarMenuBadge_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarMenuBadge.vue");
	return _sfc_setup$58 ? _sfc_setup$58(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/tooltip/Tooltip.vue?vue&type=script&setup=true&lang.ts
var Tooltip_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "Tooltip",
	__ssrInlineRender: true,
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean },
		delayDuration: {},
		disableHoverableContent: { type: Boolean },
		disableClosingTrigger: { type: Boolean },
		disabled: { type: Boolean },
		ignoreNonKeyboardFocus: { type: Boolean }
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(TooltipRoot), mergeProps({ "data-slot": "tooltip" }, unref(forwarded), _attrs), {
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
//#region resources/js/components/ui/tooltip/Tooltip.vue
var _sfc_setup$57 = Tooltip_vue_vue_type_script_setup_true_lang_default.setup;
Tooltip_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/tooltip/Tooltip.vue");
	return _sfc_setup$57 ? _sfc_setup$57(props, ctx) : void 0;
};
var Tooltip_default = Tooltip_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/tooltip/TooltipContent.vue?vue&type=script&setup=true&lang.ts
var TooltipContent_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	inheritAttrs: false,
	__name: "TooltipContent",
	__ssrInlineRender: true,
	props: {
		forceMount: { type: Boolean },
		ariaLabel: {},
		asChild: { type: Boolean },
		as: {},
		side: {},
		sideOffset: { default: 4 },
		align: {},
		alignOffset: {},
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		updatePositionStrategy: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["escapeKeyDown", "pointerDownOutside"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(TooltipPortal), _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(TooltipContent), mergeProps({ "data-slot": "tooltip-content" }, {
						...unref(forwarded),
						..._ctx.$attrs
					}, { class: unref(cn)("bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance", props.class) }), {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
								_push(ssrRenderComponent(unref(TooltipArrow), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" }, null, _parent, _scopeId));
							} else return [renderSlot(_ctx.$slots, "default"), createVNode(unref(TooltipArrow), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })];
						}),
						_: 3
					}, _parent, _scopeId));
					else return [createVNode(unref(TooltipContent), mergeProps({ "data-slot": "tooltip-content" }, {
						...unref(forwarded),
						..._ctx.$attrs
					}, { class: unref(cn)("bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance", props.class) }), {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default"), createVNode(unref(TooltipArrow), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })]),
						_: 3
					}, 16, ["class"])];
				}),
				_: 3
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/ui/tooltip/TooltipContent.vue
var _sfc_setup$56 = TooltipContent_vue_vue_type_script_setup_true_lang_default.setup;
TooltipContent_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/tooltip/TooltipContent.vue");
	return _sfc_setup$56 ? _sfc_setup$56(props, ctx) : void 0;
};
var TooltipContent_default = TooltipContent_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/tooltip/TooltipProvider.vue?vue&type=script&setup=true&lang.ts
var TooltipProvider_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "TooltipProvider",
	__ssrInlineRender: true,
	props: {
		delayDuration: { default: 0 },
		skipDelayDuration: {},
		disableHoverableContent: { type: Boolean },
		disableClosingTrigger: { type: Boolean },
		disabled: { type: Boolean },
		ignoreNonKeyboardFocus: { type: Boolean },
		content: {}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(TooltipProvider), mergeProps(props, _attrs), {
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
//#region resources/js/components/ui/tooltip/TooltipProvider.vue
var _sfc_setup$55 = TooltipProvider_vue_vue_type_script_setup_true_lang_default.setup;
TooltipProvider_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/tooltip/TooltipProvider.vue");
	return _sfc_setup$55 ? _sfc_setup$55(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/tooltip/TooltipTrigger.vue?vue&type=script&setup=true&lang.ts
var TooltipTrigger_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "TooltipTrigger",
	__ssrInlineRender: true,
	props: {
		reference: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(TooltipTrigger), mergeProps({ "data-slot": "tooltip-trigger" }, props, _attrs), {
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
//#region resources/js/components/ui/tooltip/TooltipTrigger.vue
var _sfc_setup$54 = TooltipTrigger_vue_vue_type_script_setup_true_lang_default.setup;
TooltipTrigger_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/tooltip/TooltipTrigger.vue");
	return _sfc_setup$54 ? _sfc_setup$54(props, ctx) : void 0;
};
var TooltipTrigger_default = TooltipTrigger_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/sidebar/SidebarMenuButtonChild.vue?vue&type=script&setup=true&lang.ts
var SidebarMenuButtonChild_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarMenuButtonChild",
	__ssrInlineRender: true,
	props: {
		variant: { default: "default" },
		size: { default: "default" },
		isActive: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		asChild: { type: Boolean },
		as: { default: "button" }
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				"data-slot": "sidebar-menu-button",
				"data-sidebar": "menu-button",
				"data-size": __props.size,
				"data-active": __props.isActive,
				class: unref(cn)(unref(sidebarMenuButtonVariants)({
					variant: __props.variant,
					size: __props.size
				}), props.class),
				as: __props.as,
				"as-child": __props.asChild
			}, _ctx.$attrs, _attrs), {
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
//#region resources/js/components/ui/sidebar/SidebarMenuButtonChild.vue
var _sfc_setup$53 = SidebarMenuButtonChild_vue_vue_type_script_setup_true_lang_default.setup;
SidebarMenuButtonChild_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarMenuButtonChild.vue");
	return _sfc_setup$53 ? _sfc_setup$53(props, ctx) : void 0;
};
var SidebarMenuButtonChild_default = SidebarMenuButtonChild_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/sidebar/SidebarMenuButton.vue?vue&type=script&setup=true&lang.ts
var SidebarMenuButton_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	inheritAttrs: false,
	__name: "SidebarMenuButton",
	__ssrInlineRender: true,
	props: {
		variant: { default: "default" },
		size: { default: "default" },
		isActive: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		asChild: { type: Boolean },
		as: { default: "button" },
		tooltip: {}
	},
	setup(__props) {
		const props = __props;
		const { isMobile, state } = useSidebar();
		const delegatedProps = reactiveOmit(props, "tooltip");
		return (_ctx, _push, _parent, _attrs) => {
			if (!__props.tooltip) _push(ssrRenderComponent(SidebarMenuButtonChild_default, mergeProps({
				...unref(delegatedProps),
				..._ctx.$attrs
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
			else _push(ssrRenderComponent(unref(Tooltip_default), _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(TooltipTrigger_default), { "as-child": "" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(SidebarMenuButtonChild_default, {
									...unref(delegatedProps),
									..._ctx.$attrs
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
										else return [renderSlot(_ctx.$slots, "default")];
									}),
									_: 3
								}, _parent, _scopeId));
								else return [createVNode(SidebarMenuButtonChild_default, {
									...unref(delegatedProps),
									..._ctx.$attrs
								}, {
									default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
									_: 3
								}, 16)];
							}),
							_: 3
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(TooltipContent_default), {
							side: "right",
							align: "center",
							hidden: unref(state) !== "collapsed" || unref(isMobile)
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) if (typeof __props.tooltip === "string") _push(`<!--[-->${ssrInterpolate(__props.tooltip)}<!--]-->`);
								else ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.tooltip), null, null), _parent, _scopeId);
								else return [typeof __props.tooltip === "string" ? (openBlock(), createBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(__props.tooltip), 1)], 64)) : (openBlock(), createBlock(resolveDynamicComponent(__props.tooltip), { key: 1 }))];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(unref(TooltipTrigger_default), { "as-child": "" }, {
						default: withCtx(() => [createVNode(SidebarMenuButtonChild_default, {
							...unref(delegatedProps),
							..._ctx.$attrs
						}, {
							default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
							_: 3
						}, 16)]),
						_: 3
					}), createVNode(unref(TooltipContent_default), {
						side: "right",
						align: "center",
						hidden: unref(state) !== "collapsed" || unref(isMobile)
					}, {
						default: withCtx(() => [typeof __props.tooltip === "string" ? (openBlock(), createBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(__props.tooltip), 1)], 64)) : (openBlock(), createBlock(resolveDynamicComponent(__props.tooltip), { key: 1 }))]),
						_: 1
					}, 8, ["hidden"])];
				}),
				_: 3
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/ui/sidebar/SidebarMenuButton.vue
var _sfc_setup$52 = SidebarMenuButton_vue_vue_type_script_setup_true_lang_default.setup;
SidebarMenuButton_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarMenuButton.vue");
	return _sfc_setup$52 ? _sfc_setup$52(props, ctx) : void 0;
};
var SidebarMenuButton_default = SidebarMenuButton_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/sidebar/SidebarMenuItem.vue?vue&type=script&setup=true&lang.ts
var SidebarMenuItem_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarMenuItem",
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
			_push(`<li${ssrRenderAttrs(mergeProps({
				"data-slot": "sidebar-menu-item",
				"data-sidebar": "menu-item",
				class: unref(cn)("group/menu-item relative", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</li>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/sidebar/SidebarMenuItem.vue
var _sfc_setup$51 = SidebarMenuItem_vue_vue_type_script_setup_true_lang_default.setup;
SidebarMenuItem_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarMenuItem.vue");
	return _sfc_setup$51 ? _sfc_setup$51(props, ctx) : void 0;
};
var SidebarMenuItem_default = SidebarMenuItem_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/skeleton/Skeleton.vue?vue&type=script&setup=true&lang.ts
var Skeleton_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "Skeleton",
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
				"data-slot": "skeleton",
				class: unref(cn)("animate-pulse rounded-md bg-primary/10", props.class)
			}, _attrs))}></div>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/skeleton/Skeleton.vue
var _sfc_setup$50 = Skeleton_vue_vue_type_script_setup_true_lang_default.setup;
Skeleton_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/skeleton/Skeleton.vue");
	return _sfc_setup$50 ? _sfc_setup$50(props, ctx) : void 0;
};
var Skeleton_default = Skeleton_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/sidebar/SidebarMenuSkeleton.vue?vue&type=script&setup=true&lang.ts
var SidebarMenuSkeleton_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarMenuSkeleton",
	__ssrInlineRender: true,
	props: {
		showIcon: { type: Boolean },
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
		const width = computed(() => {
			return `${Math.floor(Math.random() * 40) + 50}%`;
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				"data-slot": "sidebar-menu-skeleton",
				"data-sidebar": "menu-skeleton",
				class: unref(cn)("flex h-8 items-center gap-2 rounded-md px-2", props.class)
			}, _attrs))}>`);
			if (__props.showIcon) _push(ssrRenderComponent(unref(Skeleton_default), {
				class: "size-4 rounded-md",
				"data-sidebar": "menu-skeleton-icon"
			}, null, _parent));
			else _push(`<!---->`);
			_push(ssrRenderComponent(unref(Skeleton_default), {
				class: "h-4 max-w-(--skeleton-width) flex-1",
				"data-sidebar": "menu-skeleton-text",
				style: { "--skeleton-width": width.value }
			}, null, _parent));
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/sidebar/SidebarMenuSkeleton.vue
var _sfc_setup$49 = SidebarMenuSkeleton_vue_vue_type_script_setup_true_lang_default.setup;
SidebarMenuSkeleton_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarMenuSkeleton.vue");
	return _sfc_setup$49 ? _sfc_setup$49(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/sidebar/SidebarMenuSub.vue?vue&type=script&setup=true&lang.ts
var SidebarMenuSub_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarMenuSub",
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
			_push(`<ul${ssrRenderAttrs(mergeProps({
				"data-slot": "sidebar-menu-sub",
				"data-sidebar": "menu-badge",
				class: unref(cn)("border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</ul>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/sidebar/SidebarMenuSub.vue
var _sfc_setup$48 = SidebarMenuSub_vue_vue_type_script_setup_true_lang_default.setup;
SidebarMenuSub_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarMenuSub.vue");
	return _sfc_setup$48 ? _sfc_setup$48(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/sidebar/SidebarMenuSubButton.vue?vue&type=script&setup=true&lang.ts
var SidebarMenuSubButton_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarMenuSubButton",
	__ssrInlineRender: true,
	props: {
		asChild: { type: Boolean },
		as: { default: "a" },
		size: { default: "md" },
		isActive: { type: Boolean },
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
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				"data-slot": "sidebar-menu-sub-button",
				"data-sidebar": "menu-sub-button",
				as: __props.as,
				"as-child": __props.asChild,
				"data-size": __props.size,
				"data-active": __props.isActive,
				class: unref(cn)("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", __props.size === "sm" && "text-xs", __props.size === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", props.class)
			}, _attrs), {
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
//#region resources/js/components/ui/sidebar/SidebarMenuSubButton.vue
var _sfc_setup$47 = SidebarMenuSubButton_vue_vue_type_script_setup_true_lang_default.setup;
SidebarMenuSubButton_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarMenuSubButton.vue");
	return _sfc_setup$47 ? _sfc_setup$47(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/sidebar/SidebarMenuSubItem.vue?vue&type=script&setup=true&lang.ts
var SidebarMenuSubItem_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarMenuSubItem",
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
			_push(`<li${ssrRenderAttrs(mergeProps({
				"data-slot": "sidebar-menu-sub-item",
				"data-sidebar": "menu-sub-item",
				class: unref(cn)("group/menu-sub-item relative", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</li>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/sidebar/SidebarMenuSubItem.vue
var _sfc_setup$46 = SidebarMenuSubItem_vue_vue_type_script_setup_true_lang_default.setup;
SidebarMenuSubItem_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarMenuSubItem.vue");
	return _sfc_setup$46 ? _sfc_setup$46(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/sidebar/SidebarProvider.vue?vue&type=script&setup=true&lang.ts
var SidebarProvider_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarProvider",
	__ssrInlineRender: true,
	props: {
		defaultOpen: {
			type: Boolean,
			default: !defaultDocument?.cookie.includes(`${SIDEBAR_COOKIE_NAME}=false`)
		},
		open: {
			type: Boolean,
			default: void 0
		},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const isMobile = useMediaQuery("(max-width: 768px)");
		const openMobile = ref(false);
		const open = useVModel(props, "open", emits, {
			defaultValue: props.defaultOpen ?? false,
			passive: props.open === void 0
		});
		function setOpen(value) {
			open.value = value;
			document.cookie = `${SIDEBAR_COOKIE_NAME}=${open.value}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
		}
		function setOpenMobile(value) {
			openMobile.value = value;
		}
		function toggleSidebar() {
			return isMobile.value ? setOpenMobile(!openMobile.value) : setOpen(!open.value);
		}
		useEventListener("keydown", (event) => {
			if (event.key === "b" && (event.metaKey || event.ctrlKey)) {
				event.preventDefault();
				toggleSidebar();
			}
		});
		provideSidebarContext({
			state: computed(() => open.value ? "expanded" : "collapsed"),
			open,
			setOpen,
			isMobile,
			openMobile,
			setOpenMobile,
			toggleSidebar
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(TooltipProvider), mergeProps({ "delay-duration": 0 }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div${ssrRenderAttrs(mergeProps({
							"data-slot": "sidebar-wrapper",
							style: {
								"--sidebar-width": unref(SIDEBAR_WIDTH),
								"--sidebar-width-icon": unref(SIDEBAR_WIDTH_ICON)
							},
							class: unref(cn)("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", props.class)
						}, _ctx.$attrs))}${_scopeId}>`);
						ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
						_push(`</div>`);
					} else return [createVNode("div", mergeProps({
						"data-slot": "sidebar-wrapper",
						style: {
							"--sidebar-width": unref(SIDEBAR_WIDTH),
							"--sidebar-width-icon": unref(SIDEBAR_WIDTH_ICON)
						},
						class: unref(cn)("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", props.class)
					}, _ctx.$attrs), [renderSlot(_ctx.$slots, "default")], 16)];
				}),
				_: 3
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/ui/sidebar/SidebarProvider.vue
var _sfc_setup$45 = SidebarProvider_vue_vue_type_script_setup_true_lang_default.setup;
SidebarProvider_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarProvider.vue");
	return _sfc_setup$45 ? _sfc_setup$45(props, ctx) : void 0;
};
var SidebarProvider_default = SidebarProvider_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/sidebar/SidebarRail.vue?vue&type=script&setup=true&lang.ts
var SidebarRail_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarRail",
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
		const { toggleSidebar } = useSidebar();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<button${ssrRenderAttrs(mergeProps({
				"data-sidebar": "rail",
				"data-slot": "sidebar-rail",
				"aria-label": "Toggle Sidebar",
				tabindex: -1,
				title: "Toggle Sidebar",
				class: unref(cn)("hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</button>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/sidebar/SidebarRail.vue
var _sfc_setup$44 = SidebarRail_vue_vue_type_script_setup_true_lang_default.setup;
SidebarRail_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarRail.vue");
	return _sfc_setup$44 ? _sfc_setup$44(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/sidebar/SidebarSeparator.vue?vue&type=script&setup=true&lang.ts
var SidebarSeparator_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarSeparator",
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
			_push(ssrRenderComponent(unref(Separator_default), mergeProps({
				"data-slot": "sidebar-separator",
				"data-sidebar": "separator",
				class: unref(cn)("bg-sidebar-border mx-2 w-auto", props.class)
			}, _attrs), {
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
//#region resources/js/components/ui/sidebar/SidebarSeparator.vue
var _sfc_setup$43 = SidebarSeparator_vue_vue_type_script_setup_true_lang_default.setup;
SidebarSeparator_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarSeparator.vue");
	return _sfc_setup$43 ? _sfc_setup$43(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/sidebar/SidebarTrigger.vue?vue&type=script&setup=true&lang.ts
var SidebarTrigger_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SidebarTrigger",
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
		const { isMobile, state, toggleSidebar } = useSidebar();
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Button_default), mergeProps({
				"data-sidebar": "trigger",
				"data-slot": "sidebar-trigger",
				variant: "ghost",
				size: "icon",
				class: unref(cn)("h-7 w-7", props.class),
				onClick: unref(toggleSidebar)
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (unref(isMobile) || unref(state) === "collapsed") _push(ssrRenderComponent(unref(PanelLeftOpen), null, null, _parent, _scopeId));
						else _push(ssrRenderComponent(unref(PanelLeftClose), null, null, _parent, _scopeId));
						_push(`<span class="sr-only"${_scopeId}>Toggle sidebar</span>`);
					} else return [unref(isMobile) || unref(state) === "collapsed" ? (openBlock(), createBlock(unref(PanelLeftOpen), { key: 0 })) : (openBlock(), createBlock(unref(PanelLeftClose), { key: 1 })), createVNode("span", { class: "sr-only" }, "Toggle sidebar")];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/ui/sidebar/SidebarTrigger.vue
var _sfc_setup$42 = SidebarTrigger_vue_vue_type_script_setup_true_lang_default.setup;
SidebarTrigger_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarTrigger.vue");
	return _sfc_setup$42 ? _sfc_setup$42(props, ctx) : void 0;
};
var SidebarTrigger_default = SidebarTrigger_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/sidebar/index.ts
var sidebarMenuButtonVariants = cva("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
	variants: {
		variant: {
			default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
			outline: "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
		},
		size: {
			default: "h-8 text-sm",
			sm: "h-7 text-xs",
			lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
//#endregion
//#region resources/js/components/AppContent.vue?vue&type=script&setup=true&lang.ts
var AppContent_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AppContent",
	__ssrInlineRender: true,
	props: {
		variant: { default: "sidebar" },
		class: {}
	},
	setup(__props) {
		const props = __props;
		const className = computed(() => props.class);
		return (_ctx, _push, _parent, _attrs) => {
			if (props.variant === "sidebar") _push(ssrRenderComponent(unref(SidebarInset_default), mergeProps({ class: className.value }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
			else {
				_push(`<main${ssrRenderAttrs(mergeProps({ class: ["mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl", className.value] }, _attrs))}>`);
				ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
				_push(`</main>`);
			}
		};
	}
});
//#endregion
//#region resources/js/components/AppContent.vue
var _sfc_setup$41 = AppContent_vue_vue_type_script_setup_true_lang_default.setup;
AppContent_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/AppContent.vue");
	return _sfc_setup$41 ? _sfc_setup$41(props, ctx) : void 0;
};
var AppContent_default = AppContent_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/AppShell.vue?vue&type=script&setup=true&lang.ts
var AppShell_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AppShell",
	__ssrInlineRender: true,
	props: { variant: { default: "sidebar" } },
	setup(__props) {
		const isOpen = usePage().props.sidebarOpen;
		return (_ctx, _push, _parent, _attrs) => {
			if (__props.variant === "header") {
				_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-screen w-full flex-col" }, _attrs))}>`);
				ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
				_push(`</div>`);
			} else _push(ssrRenderComponent(unref(SidebarProvider_default), mergeProps({ "default-open": unref(isOpen) }, _attrs), {
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
//#region resources/js/components/AppShell.vue
var _sfc_setup$40 = AppShell_vue_vue_type_script_setup_true_lang_default.setup;
AppShell_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/AppShell.vue");
	return _sfc_setup$40 ? _sfc_setup$40(props, ctx) : void 0;
};
var AppShell_default = AppShell_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/AppLogoIcon.vue?vue&type=script&setup=true&lang.ts
var AppLogoIcon_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	inheritAttrs: false,
	__name: "AppLogoIcon",
	__ssrInlineRender: true,
	props: { className: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<svg${ssrRenderAttrs(mergeProps({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 42",
				class: __props.className
			}, _ctx.$attrs, _attrs))}><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.2 5.633 8.6.855 0 5.633v26.51l16.2 9 16.2-9v-8.442l7.6-4.223V9.856l-8.6-4.777-8.6 4.777V18.3l-5.6 3.111V5.633ZM38 18.301l-5.6 3.11v-6.157l5.6-3.11V18.3Zm-1.06-7.856-5.54 3.078-5.54-3.079 5.54-3.078 5.54 3.079ZM24.8 18.3v-6.157l5.6 3.111v6.158L24.8 18.3Zm-1 1.732 5.54 3.078-13.14 7.302-5.54-3.078 13.14-7.3v-.002Zm-16.2 7.89 7.6 4.222V38.3L2 30.966V7.92l5.6 3.111v16.892ZM8.6 9.3 3.06 6.222 8.6 3.143l5.54 3.08L8.6 9.3Zm21.8 15.51-13.2 7.334V38.3l13.2-7.334v-6.156ZM9.6 11.034l5.6-3.11v14.6l-5.6 3.11v-14.6Z"></path></svg>`);
		};
	}
});
//#endregion
//#region resources/js/components/AppLogoIcon.vue
var _sfc_setup$39 = AppLogoIcon_vue_vue_type_script_setup_true_lang_default.setup;
AppLogoIcon_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/AppLogoIcon.vue");
	return _sfc_setup$39 ? _sfc_setup$39(props, ctx) : void 0;
};
var AppLogoIcon_default = AppLogoIcon_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/AppLogo.vue?vue&type=script&setup=true&lang.ts
var AppLogo_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AppLogo",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[--><div class="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">`);
			_push(ssrRenderComponent(AppLogoIcon_default, { class: "size-5 fill-current text-white dark:text-black" }, null, _parent));
			_push(`</div><div class="ml-1 grid flex-1 text-left text-sm"><span class="mb-0.5 truncate leading-tight font-semibold">Laravel Starter Kit</span></div><!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/components/AppLogo.vue
var _sfc_setup$38 = AppLogo_vue_vue_type_script_setup_true_lang_default.setup;
AppLogo_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/AppLogo.vue");
	return _sfc_setup$38 ? _sfc_setup$38(props, ctx) : void 0;
};
var AppLogo_default = AppLogo_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/NavFooter.vue?vue&type=script&setup=true&lang.ts
var NavFooter_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "NavFooter",
	__ssrInlineRender: true,
	props: {
		items: {},
		class: {}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(SidebarGroup_default), mergeProps({ class: `group-data-[collapsible=icon]:p-0 ${_ctx.$props.class || ""}` }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(SidebarGroupContent_default), null, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(ssrRenderComponent(unref(SidebarMenu_default), null, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(`<!--[-->`);
										ssrRenderList(__props.items, (item) => {
											_push(ssrRenderComponent(unref(SidebarMenuItem_default), { key: item.title }, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(ssrRenderComponent(unref(SidebarMenuButton_default), {
														class: "text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100",
														"as-child": ""
													}, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) {
																_push(`<a${ssrRenderAttr("href", unref(toUrl)(item.href))} target="_blank" rel="noopener noreferrer"${_scopeId}>`);
																ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), null, null), _parent, _scopeId);
																_push(`<span${_scopeId}>${ssrInterpolate(item.title)}</span></a>`);
															} else return [createVNode("a", {
																href: unref(toUrl)(item.href),
																target: "_blank",
																rel: "noopener noreferrer"
															}, [(openBlock(), createBlock(resolveDynamicComponent(item.icon))), createVNode("span", null, toDisplayString(item.title), 1)], 8, ["href"])];
														}),
														_: 2
													}, _parent, _scopeId));
													else return [createVNode(unref(SidebarMenuButton_default), {
														class: "text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100",
														"as-child": ""
													}, {
														default: withCtx(() => [createVNode("a", {
															href: unref(toUrl)(item.href),
															target: "_blank",
															rel: "noopener noreferrer"
														}, [(openBlock(), createBlock(resolveDynamicComponent(item.icon))), createVNode("span", null, toDisplayString(item.title), 1)], 8, ["href"])]),
														_: 2
													}, 1024)];
												}),
												_: 2
											}, _parent, _scopeId));
										});
										_push(`<!--]-->`);
									} else return [(openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item) => {
										return openBlock(), createBlock(unref(SidebarMenuItem_default), { key: item.title }, {
											default: withCtx(() => [createVNode(unref(SidebarMenuButton_default), {
												class: "text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100",
												"as-child": ""
											}, {
												default: withCtx(() => [createVNode("a", {
													href: unref(toUrl)(item.href),
													target: "_blank",
													rel: "noopener noreferrer"
												}, [(openBlock(), createBlock(resolveDynamicComponent(item.icon))), createVNode("span", null, toDisplayString(item.title), 1)], 8, ["href"])]),
												_: 2
											}, 1024)]),
											_: 2
										}, 1024);
									}), 128))];
								}),
								_: 1
							}, _parent, _scopeId));
							else return [createVNode(unref(SidebarMenu_default), null, {
								default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item) => {
									return openBlock(), createBlock(unref(SidebarMenuItem_default), { key: item.title }, {
										default: withCtx(() => [createVNode(unref(SidebarMenuButton_default), {
											class: "text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100",
											"as-child": ""
										}, {
											default: withCtx(() => [createVNode("a", {
												href: unref(toUrl)(item.href),
												target: "_blank",
												rel: "noopener noreferrer"
											}, [(openBlock(), createBlock(resolveDynamicComponent(item.icon))), createVNode("span", null, toDisplayString(item.title), 1)], 8, ["href"])]),
											_: 2
										}, 1024)]),
										_: 2
									}, 1024);
								}), 128))]),
								_: 1
							})];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(unref(SidebarGroupContent_default), null, {
						default: withCtx(() => [createVNode(unref(SidebarMenu_default), null, {
							default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item) => {
								return openBlock(), createBlock(unref(SidebarMenuItem_default), { key: item.title }, {
									default: withCtx(() => [createVNode(unref(SidebarMenuButton_default), {
										class: "text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100",
										"as-child": ""
									}, {
										default: withCtx(() => [createVNode("a", {
											href: unref(toUrl)(item.href),
											target: "_blank",
											rel: "noopener noreferrer"
										}, [(openBlock(), createBlock(resolveDynamicComponent(item.icon))), createVNode("span", null, toDisplayString(item.title), 1)], 8, ["href"])]),
										_: 2
									}, 1024)]),
									_: 2
								}, 1024);
							}), 128))]),
							_: 1
						})]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/NavFooter.vue
var _sfc_setup$37 = NavFooter_vue_vue_type_script_setup_true_lang_default.setup;
NavFooter_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/NavFooter.vue");
	return _sfc_setup$37 ? _sfc_setup$37(props, ctx) : void 0;
};
var NavFooter_default = NavFooter_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/composables/useCurrentUrl.ts
var page = usePage();
var currentUrlReactive = computed(() => new URL(page.url, typeof window !== "undefined" ? window.location.origin : "http://localhost").pathname);
function useCurrentUrl() {
	function isCurrentUrl(urlToCheck, currentUrl, startsWith = false) {
		const urlToCompare = currentUrl ?? currentUrlReactive.value;
		const urlString = toUrl(urlToCheck);
		const comparePath = (path) => startsWith ? urlToCompare.startsWith(path) : path === urlToCompare;
		if (!urlString.startsWith("http")) return comparePath(urlString);
		try {
			return comparePath(new URL(urlString).pathname);
		} catch {
			return false;
		}
	}
	function isCurrentOrParentUrl(urlToCheck, currentUrl) {
		return isCurrentUrl(urlToCheck, currentUrl, true);
	}
	function whenCurrentUrl(urlToCheck, ifTrue, ifFalse = null) {
		return isCurrentUrl(urlToCheck) ? ifTrue : ifFalse;
	}
	return {
		currentUrl: readonly(currentUrlReactive),
		isCurrentUrl,
		isCurrentOrParentUrl,
		whenCurrentUrl
	};
}
//#endregion
//#region resources/js/components/NavMain.vue?vue&type=script&setup=true&lang.ts
var NavMain_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "NavMain",
	__ssrInlineRender: true,
	props: { items: {} },
	setup(__props) {
		const { isCurrentUrl } = useCurrentUrl();
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(SidebarGroup_default), mergeProps({ class: "px-2 py-0" }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(SidebarGroupLabel_default), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Platform`);
								else return [createTextVNode("Platform")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(SidebarMenu_default), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<!--[-->`);
									ssrRenderList(__props.items, (item) => {
										_push(ssrRenderComponent(unref(SidebarMenuItem_default), { key: item.title }, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(ssrRenderComponent(unref(SidebarMenuButton_default), {
													"as-child": "",
													"is-active": unref(isCurrentUrl)(item.href),
													tooltip: item.title
												}, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(ssrRenderComponent(unref(Link), { href: item.href }, {
															default: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) {
																	ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), null, null), _parent, _scopeId);
																	_push(`<span${_scopeId}>${ssrInterpolate(item.title)}</span>`);
																} else return [(openBlock(), createBlock(resolveDynamicComponent(item.icon))), createVNode("span", null, toDisplayString(item.title), 1)];
															}),
															_: 2
														}, _parent, _scopeId));
														else return [createVNode(unref(Link), { href: item.href }, {
															default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(item.icon))), createVNode("span", null, toDisplayString(item.title), 1)]),
															_: 2
														}, 1032, ["href"])];
													}),
													_: 2
												}, _parent, _scopeId));
												else return [createVNode(unref(SidebarMenuButton_default), {
													"as-child": "",
													"is-active": unref(isCurrentUrl)(item.href),
													tooltip: item.title
												}, {
													default: withCtx(() => [createVNode(unref(Link), { href: item.href }, {
														default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(item.icon))), createVNode("span", null, toDisplayString(item.title), 1)]),
														_: 2
													}, 1032, ["href"])]),
													_: 2
												}, 1032, ["is-active", "tooltip"])];
											}),
											_: 2
										}, _parent, _scopeId));
									});
									_push(`<!--]-->`);
								} else return [(openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item) => {
									return openBlock(), createBlock(unref(SidebarMenuItem_default), { key: item.title }, {
										default: withCtx(() => [createVNode(unref(SidebarMenuButton_default), {
											"as-child": "",
											"is-active": unref(isCurrentUrl)(item.href),
											tooltip: item.title
										}, {
											default: withCtx(() => [createVNode(unref(Link), { href: item.href }, {
												default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(item.icon))), createVNode("span", null, toDisplayString(item.title), 1)]),
												_: 2
											}, 1032, ["href"])]),
											_: 2
										}, 1032, ["is-active", "tooltip"])]),
										_: 2
									}, 1024);
								}), 128))];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(unref(SidebarGroupLabel_default), null, {
						default: withCtx(() => [createTextVNode("Platform")]),
						_: 1
					}), createVNode(unref(SidebarMenu_default), null, {
						default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item) => {
							return openBlock(), createBlock(unref(SidebarMenuItem_default), { key: item.title }, {
								default: withCtx(() => [createVNode(unref(SidebarMenuButton_default), {
									"as-child": "",
									"is-active": unref(isCurrentUrl)(item.href),
									tooltip: item.title
								}, {
									default: withCtx(() => [createVNode(unref(Link), { href: item.href }, {
										default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(item.icon))), createVNode("span", null, toDisplayString(item.title), 1)]),
										_: 2
									}, 1032, ["href"])]),
									_: 2
								}, 1032, ["is-active", "tooltip"])]),
								_: 2
							}, 1024);
						}), 128))]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/NavMain.vue
var _sfc_setup$36 = NavMain_vue_vue_type_script_setup_true_lang_default.setup;
NavMain_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/NavMain.vue");
	return _sfc_setup$36 ? _sfc_setup$36(props, ctx) : void 0;
};
var NavMain_default = NavMain_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/dropdown-menu/DropdownMenu.vue?vue&type=script&setup=true&lang.ts
var DropdownMenu_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "DropdownMenu",
	__ssrInlineRender: true,
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean },
		dir: {},
		modal: { type: Boolean }
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuRoot), mergeProps({ "data-slot": "dropdown-menu" }, unref(forwarded), _attrs), {
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
//#region resources/js/components/ui/dropdown-menu/DropdownMenu.vue
var _sfc_setup$35 = DropdownMenu_vue_vue_type_script_setup_true_lang_default.setup;
DropdownMenu_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenu.vue");
	return _sfc_setup$35 ? _sfc_setup$35(props, ctx) : void 0;
};
var DropdownMenu_default = DropdownMenu_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/dropdown-menu/DropdownMenuCheckboxItem.vue?vue&type=script&setup=true&lang.ts
var DropdownMenuCheckboxItem_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "DropdownMenuCheckboxItem",
	__ssrInlineRender: true,
	props: {
		modelValue: { type: [Boolean, String] },
		disabled: { type: Boolean },
		textValue: {},
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
	emits: ["select", "update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuCheckboxItem), mergeProps({ "data-slot": "dropdown-menu-checkbox-item" }, unref(forwarded), { class: unref(cn)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", props.class) }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center"${_scopeId}>`);
						_push(ssrRenderComponent(unref(DropdownMenuItemIndicator), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) ssrRenderSlot(_ctx.$slots, "indicator-icon", {}, () => {
									_push(ssrRenderComponent(unref(Check), { class: "size-4" }, null, _parent, _scopeId));
								}, _push, _parent, _scopeId);
								else return [renderSlot(_ctx.$slots, "indicator-icon", {}, () => [createVNode(unref(Check), { class: "size-4" })])];
							}),
							_: 3
						}, _parent, _scopeId));
						_push(`</span>`);
						ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					} else return [createVNode("span", { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, [createVNode(unref(DropdownMenuItemIndicator), null, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "indicator-icon", {}, () => [createVNode(unref(Check), { class: "size-4" })])]),
						_: 3
					})]), renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/ui/dropdown-menu/DropdownMenuCheckboxItem.vue
var _sfc_setup$34 = DropdownMenuCheckboxItem_vue_vue_type_script_setup_true_lang_default.setup;
DropdownMenuCheckboxItem_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuCheckboxItem.vue");
	return _sfc_setup$34 ? _sfc_setup$34(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/dropdown-menu/DropdownMenuContent.vue?vue&type=script&setup=true&lang.ts
var DropdownMenuContent_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	inheritAttrs: false,
	__name: "DropdownMenuContent",
	__ssrInlineRender: true,
	props: {
		forceMount: { type: Boolean },
		loop: { type: Boolean },
		memoDependencies: {},
		side: {},
		sideOffset: { default: 4 },
		sideFlip: { type: Boolean },
		align: {},
		alignOffset: {},
		alignFlip: { type: Boolean },
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		hideShiftedArrow: { type: Boolean },
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		updatePositionStrategy: {},
		disableUpdateOnLayoutShift: { type: Boolean },
		prioritizePosition: { type: Boolean },
		reference: {},
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
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuPortal), _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(DropdownMenuContent), mergeProps({ "data-slot": "dropdown-menu-content" }, {
						..._ctx.$attrs,
						...unref(forwarded)
					}, { class: unref(cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", props.class) }), {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
							else return [renderSlot(_ctx.$slots, "default")];
						}),
						_: 3
					}, _parent, _scopeId));
					else return [createVNode(unref(DropdownMenuContent), mergeProps({ "data-slot": "dropdown-menu-content" }, {
						..._ctx.$attrs,
						...unref(forwarded)
					}, { class: unref(cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", props.class) }), {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
						_: 3
					}, 16, ["class"])];
				}),
				_: 3
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/ui/dropdown-menu/DropdownMenuContent.vue
var _sfc_setup$33 = DropdownMenuContent_vue_vue_type_script_setup_true_lang_default.setup;
DropdownMenuContent_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuContent.vue");
	return _sfc_setup$33 ? _sfc_setup$33(props, ctx) : void 0;
};
var DropdownMenuContent_default = DropdownMenuContent_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/dropdown-menu/DropdownMenuGroup.vue?vue&type=script&setup=true&lang.ts
var DropdownMenuGroup_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "DropdownMenuGroup",
	__ssrInlineRender: true,
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuGroup), mergeProps({ "data-slot": "dropdown-menu-group" }, props, _attrs), {
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
//#region resources/js/components/ui/dropdown-menu/DropdownMenuGroup.vue
var _sfc_setup$32 = DropdownMenuGroup_vue_vue_type_script_setup_true_lang_default.setup;
DropdownMenuGroup_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuGroup.vue");
	return _sfc_setup$32 ? _sfc_setup$32(props, ctx) : void 0;
};
var DropdownMenuGroup_default = DropdownMenuGroup_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/dropdown-menu/DropdownMenuItem.vue?vue&type=script&setup=true&lang.ts
var DropdownMenuItem_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "DropdownMenuItem",
	__ssrInlineRender: true,
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		inset: { type: Boolean },
		variant: { default: "default" }
	},
	setup(__props) {
		const props = __props;
		const forwardedProps = useForwardProps(reactiveOmit(props, "inset", "variant", "class"));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuItem), mergeProps({
				"data-slot": "dropdown-menu-item",
				"data-inset": __props.inset ? "" : void 0,
				"data-variant": __props.variant
			}, unref(forwardedProps), { class: unref(cn)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", props.class) }, _attrs), {
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
//#region resources/js/components/ui/dropdown-menu/DropdownMenuItem.vue
var _sfc_setup$31 = DropdownMenuItem_vue_vue_type_script_setup_true_lang_default.setup;
DropdownMenuItem_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuItem.vue");
	return _sfc_setup$31 ? _sfc_setup$31(props, ctx) : void 0;
};
var DropdownMenuItem_default = DropdownMenuItem_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/dropdown-menu/DropdownMenuLabel.vue?vue&type=script&setup=true&lang.ts
var DropdownMenuLabel_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "DropdownMenuLabel",
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
		] },
		inset: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const forwardedProps = useForwardProps(reactiveOmit(props, "class", "inset"));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuLabel), mergeProps({
				"data-slot": "dropdown-menu-label",
				"data-inset": __props.inset ? "" : void 0
			}, unref(forwardedProps), { class: unref(cn)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", props.class) }, _attrs), {
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
//#region resources/js/components/ui/dropdown-menu/DropdownMenuLabel.vue
var _sfc_setup$30 = DropdownMenuLabel_vue_vue_type_script_setup_true_lang_default.setup;
DropdownMenuLabel_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuLabel.vue");
	return _sfc_setup$30 ? _sfc_setup$30(props, ctx) : void 0;
};
var DropdownMenuLabel_default = DropdownMenuLabel_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/dropdown-menu/DropdownMenuRadioGroup.vue?vue&type=script&setup=true&lang.ts
var DropdownMenuRadioGroup_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "DropdownMenuRadioGroup",
	__ssrInlineRender: true,
	props: {
		modelValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuRadioGroup), mergeProps({ "data-slot": "dropdown-menu-radio-group" }, unref(forwarded), _attrs), {
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
//#region resources/js/components/ui/dropdown-menu/DropdownMenuRadioGroup.vue
var _sfc_setup$29 = DropdownMenuRadioGroup_vue_vue_type_script_setup_true_lang_default.setup;
DropdownMenuRadioGroup_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuRadioGroup.vue");
	return _sfc_setup$29 ? _sfc_setup$29(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/dropdown-menu/DropdownMenuRadioItem.vue?vue&type=script&setup=true&lang.ts
var DropdownMenuRadioItem_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "DropdownMenuRadioItem",
	__ssrInlineRender: true,
	props: {
		value: {},
		disabled: { type: Boolean },
		textValue: {},
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
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuRadioItem), mergeProps({ "data-slot": "dropdown-menu-radio-item" }, unref(forwarded), { class: unref(cn)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", props.class) }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center"${_scopeId}>`);
						_push(ssrRenderComponent(unref(DropdownMenuItemIndicator), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) ssrRenderSlot(_ctx.$slots, "indicator-icon", {}, () => {
									_push(ssrRenderComponent(unref(Circle), { class: "size-2 fill-current" }, null, _parent, _scopeId));
								}, _push, _parent, _scopeId);
								else return [renderSlot(_ctx.$slots, "indicator-icon", {}, () => [createVNode(unref(Circle), { class: "size-2 fill-current" })])];
							}),
							_: 3
						}, _parent, _scopeId));
						_push(`</span>`);
						ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					} else return [createVNode("span", { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, [createVNode(unref(DropdownMenuItemIndicator), null, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "indicator-icon", {}, () => [createVNode(unref(Circle), { class: "size-2 fill-current" })])]),
						_: 3
					})]), renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/ui/dropdown-menu/DropdownMenuRadioItem.vue
var _sfc_setup$28 = DropdownMenuRadioItem_vue_vue_type_script_setup_true_lang_default.setup;
DropdownMenuRadioItem_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuRadioItem.vue");
	return _sfc_setup$28 ? _sfc_setup$28(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/dropdown-menu/DropdownMenuSeparator.vue?vue&type=script&setup=true&lang.ts
var DropdownMenuSeparator_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "DropdownMenuSeparator",
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
		const delegatedProps = reactiveOmit(props, "class");
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuSeparator), mergeProps({ "data-slot": "dropdown-menu-separator" }, unref(delegatedProps), { class: unref(cn)("bg-border -mx-1 my-1 h-px", props.class) }, _attrs), null, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/ui/dropdown-menu/DropdownMenuSeparator.vue
var _sfc_setup$27 = DropdownMenuSeparator_vue_vue_type_script_setup_true_lang_default.setup;
DropdownMenuSeparator_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuSeparator.vue");
	return _sfc_setup$27 ? _sfc_setup$27(props, ctx) : void 0;
};
var DropdownMenuSeparator_default = DropdownMenuSeparator_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/dropdown-menu/DropdownMenuShortcut.vue?vue&type=script&setup=true&lang.ts
var DropdownMenuShortcut_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "DropdownMenuShortcut",
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
			_push(`<span${ssrRenderAttrs(mergeProps({
				"data-slot": "dropdown-menu-shortcut",
				class: unref(cn)("text-muted-foreground ml-auto text-xs tracking-widest", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</span>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/dropdown-menu/DropdownMenuShortcut.vue
var _sfc_setup$26 = DropdownMenuShortcut_vue_vue_type_script_setup_true_lang_default.setup;
DropdownMenuShortcut_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuShortcut.vue");
	return _sfc_setup$26 ? _sfc_setup$26(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/dropdown-menu/DropdownMenuSub.vue?vue&type=script&setup=true&lang.ts
var DropdownMenuSub_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "DropdownMenuSub",
	__ssrInlineRender: true,
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean }
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuSub), mergeProps({ "data-slot": "dropdown-menu-sub" }, unref(forwarded), _attrs), {
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
//#region resources/js/components/ui/dropdown-menu/DropdownMenuSub.vue
var _sfc_setup$25 = DropdownMenuSub_vue_vue_type_script_setup_true_lang_default.setup;
DropdownMenuSub_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuSub.vue");
	return _sfc_setup$25 ? _sfc_setup$25(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/dropdown-menu/DropdownMenuSubContent.vue?vue&type=script&setup=true&lang.ts
var DropdownMenuSubContent_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "DropdownMenuSubContent",
	__ssrInlineRender: true,
	props: {
		forceMount: { type: Boolean },
		loop: { type: Boolean },
		memoDependencies: {},
		sideOffset: {},
		sideFlip: { type: Boolean },
		alignOffset: {},
		alignFlip: { type: Boolean },
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		hideShiftedArrow: { type: Boolean },
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		updatePositionStrategy: {},
		disableUpdateOnLayoutShift: { type: Boolean },
		prioritizePosition: { type: Boolean },
		reference: {},
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
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuSubContent), mergeProps({ "data-slot": "dropdown-menu-sub-content" }, unref(forwarded), { class: unref(cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", props.class) }, _attrs), {
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
//#region resources/js/components/ui/dropdown-menu/DropdownMenuSubContent.vue
var _sfc_setup$24 = DropdownMenuSubContent_vue_vue_type_script_setup_true_lang_default.setup;
DropdownMenuSubContent_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuSubContent.vue");
	return _sfc_setup$24 ? _sfc_setup$24(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/dropdown-menu/DropdownMenuSubTrigger.vue?vue&type=script&setup=true&lang.ts
var DropdownMenuSubTrigger_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "DropdownMenuSubTrigger",
	__ssrInlineRender: true,
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		inset: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const forwardedProps = useForwardProps(reactiveOmit(props, "class", "inset"));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuSubTrigger), mergeProps({ "data-slot": "dropdown-menu-sub-trigger" }, unref(forwardedProps), {
				"data-inset": __props.inset ? "" : void 0,
				class: unref(cn)("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground", props.class)
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
						_push(ssrRenderComponent(unref(ChevronRight), { class: "ml-auto size-4" }, null, _parent, _scopeId));
					} else return [renderSlot(_ctx.$slots, "default"), createVNode(unref(ChevronRight), { class: "ml-auto size-4" })];
				}),
				_: 3
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/ui/dropdown-menu/DropdownMenuSubTrigger.vue
var _sfc_setup$23 = DropdownMenuSubTrigger_vue_vue_type_script_setup_true_lang_default.setup;
DropdownMenuSubTrigger_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuSubTrigger.vue");
	return _sfc_setup$23 ? _sfc_setup$23(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/dropdown-menu/DropdownMenuTrigger.vue?vue&type=script&setup=true&lang.ts
var DropdownMenuTrigger_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "DropdownMenuTrigger",
	__ssrInlineRender: true,
	props: {
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	setup(__props) {
		const forwardedProps = useForwardProps(__props);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuTrigger), mergeProps({ "data-slot": "dropdown-menu-trigger" }, unref(forwardedProps), _attrs), {
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
//#region resources/js/components/ui/dropdown-menu/DropdownMenuTrigger.vue
var _sfc_setup$22 = DropdownMenuTrigger_vue_vue_type_script_setup_true_lang_default.setup;
DropdownMenuTrigger_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuTrigger.vue");
	return _sfc_setup$22 ? _sfc_setup$22(props, ctx) : void 0;
};
var DropdownMenuTrigger_default = DropdownMenuTrigger_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/avatar/Avatar.vue?vue&type=script&setup=true&lang.ts
var Avatar_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "Avatar",
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
			_push(ssrRenderComponent(unref(AvatarRoot), mergeProps({
				"data-slot": "avatar",
				class: unref(cn)("relative flex size-8 shrink-0 overflow-hidden rounded-full", props.class)
			}, _attrs), {
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
//#region resources/js/components/ui/avatar/Avatar.vue
var _sfc_setup$21 = Avatar_vue_vue_type_script_setup_true_lang_default.setup;
Avatar_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/avatar/Avatar.vue");
	return _sfc_setup$21 ? _sfc_setup$21(props, ctx) : void 0;
};
var Avatar_default = Avatar_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/avatar/AvatarFallback.vue?vue&type=script&setup=true&lang.ts
var AvatarFallback_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AvatarFallback",
	__ssrInlineRender: true,
	props: {
		delayMs: {},
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
			_push(ssrRenderComponent(unref(AvatarFallback), mergeProps({ "data-slot": "avatar-fallback" }, unref(delegatedProps), { class: unref(cn)("bg-muted flex size-full items-center justify-center rounded-full", props.class) }, _attrs), {
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
//#region resources/js/components/ui/avatar/AvatarFallback.vue
var _sfc_setup$20 = AvatarFallback_vue_vue_type_script_setup_true_lang_default.setup;
AvatarFallback_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/avatar/AvatarFallback.vue");
	return _sfc_setup$20 ? _sfc_setup$20(props, ctx) : void 0;
};
var AvatarFallback_default = AvatarFallback_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/avatar/AvatarImage.vue?vue&type=script&setup=true&lang.ts
var AvatarImage_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AvatarImage",
	__ssrInlineRender: true,
	props: {
		src: {},
		referrerPolicy: {},
		crossOrigin: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(AvatarImage), mergeProps({ "data-slot": "avatar-image" }, props, { class: "aspect-square size-full" }, _attrs), {
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
//#region resources/js/components/ui/avatar/AvatarImage.vue
var _sfc_setup$19 = AvatarImage_vue_vue_type_script_setup_true_lang_default.setup;
AvatarImage_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/avatar/AvatarImage.vue");
	return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
var AvatarImage_default = AvatarImage_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/composables/useInitials.ts
function getInitial(name) {
	return Array.from(name)[0] ?? "";
}
function getInitials(fullName) {
	if (!fullName) return "";
	const names = fullName.trim().split(/\s+/u).filter(Boolean);
	if (names.length === 0) return "";
	if (names.length === 1) return getInitial(names[0]).toUpperCase();
	return `${getInitial(names[0])}${getInitial(names[names.length - 1])}`.toUpperCase();
}
function useInitials() {
	return { getInitials };
}
//#endregion
//#region resources/js/components/UserInfo.vue?vue&type=script&setup=true&lang.ts
var UserInfo_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "UserInfo",
	__ssrInlineRender: true,
	props: {
		user: {},
		showEmail: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const { getInitials } = useInitials();
		const showAvatar = computed(() => props.user.avatar && props.user.avatar !== "");
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Avatar_default), { class: "h-8 w-8 overflow-hidden rounded-lg" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (showAvatar.value) _push(ssrRenderComponent(unref(AvatarImage_default), {
							src: __props.user.avatar,
							alt: __props.user.name
						}, null, _parent, _scopeId));
						else _push(`<!---->`);
						_push(ssrRenderComponent(unref(AvatarFallback_default), { class: "rounded-lg text-black dark:text-white" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(unref(getInitials)(__props.user.name))}`);
								else return [createTextVNode(toDisplayString(unref(getInitials)(__props.user.name)), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [showAvatar.value ? (openBlock(), createBlock(unref(AvatarImage_default), {
						key: 0,
						src: __props.user.avatar,
						alt: __props.user.name
					}, null, 8, ["src", "alt"])) : createCommentVNode("", true), createVNode(unref(AvatarFallback_default), { class: "rounded-lg text-black dark:text-white" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(getInitials)(__props.user.name)), 1)]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(`<div class="grid flex-1 text-left text-sm leading-tight"><span class="truncate font-medium">${ssrInterpolate(__props.user.name)}</span>`);
			if (__props.showEmail) _push(`<span class="truncate text-xs text-muted-foreground">${ssrInterpolate(__props.user.email)}</span>`);
			else _push(`<!---->`);
			_push(`</div><!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/components/UserInfo.vue
var _sfc_setup$18 = UserInfo_vue_vue_type_script_setup_true_lang_default.setup;
UserInfo_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/UserInfo.vue");
	return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
var UserInfo_default = UserInfo_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/UserMenuContent.vue?vue&type=script&setup=true&lang.ts
var UserMenuContent_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "UserMenuContent",
	__ssrInlineRender: true,
	props: { user: {} },
	setup(__props) {
		const handleLogout = () => {
			router.flushAll();
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(DropdownMenuLabel_default), { class: "p-0 font-normal" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm"${_scopeId}>`);
						_push(ssrRenderComponent(UserInfo_default, {
							user: __props.user,
							"show-email": true
						}, null, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "flex items-center gap-2 px-1 py-1.5 text-left text-sm" }, [createVNode(UserInfo_default, {
						user: __props.user,
						"show-email": true
					}, null, 8, ["user"])])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(unref(DropdownMenuSeparator_default), null, null, _parent));
			_push(ssrRenderComponent(unref(DropdownMenuGroup_default), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(DropdownMenuItem_default), { "as-child": true }, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(ssrRenderComponent(unref(Link), {
								class: "block w-full cursor-pointer",
								href: unref(edit)(),
								prefetch: ""
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(ssrRenderComponent(unref(Settings), { class: "mr-2 h-4 w-4" }, null, _parent, _scopeId));
										_push(` Settings `);
									} else return [createVNode(unref(Settings), { class: "mr-2 h-4 w-4" }), createTextVNode(" Settings ")];
								}),
								_: 1
							}, _parent, _scopeId));
							else return [createVNode(unref(Link), {
								class: "block w-full cursor-pointer",
								href: unref(edit)(),
								prefetch: ""
							}, {
								default: withCtx(() => [createVNode(unref(Settings), { class: "mr-2 h-4 w-4" }), createTextVNode(" Settings ")]),
								_: 1
							}, 8, ["href"])];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(unref(DropdownMenuItem_default), { "as-child": true }, {
						default: withCtx(() => [createVNode(unref(Link), {
							class: "block w-full cursor-pointer",
							href: unref(edit)(),
							prefetch: ""
						}, {
							default: withCtx(() => [createVNode(unref(Settings), { class: "mr-2 h-4 w-4" }), createTextVNode(" Settings ")]),
							_: 1
						}, 8, ["href"])]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(unref(DropdownMenuSeparator_default), null, null, _parent));
			_push(ssrRenderComponent(unref(DropdownMenuItem_default), { "as-child": true }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(Link), {
						class: "block w-full cursor-pointer",
						href: unref(logout)(),
						onClick: handleLogout,
						as: "button",
						"data-test": "logout-button"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(ssrRenderComponent(unref(LogOut), { class: "mr-2 h-4 w-4" }, null, _parent, _scopeId));
								_push(` Log out `);
							} else return [createVNode(unref(LogOut), { class: "mr-2 h-4 w-4" }), createTextVNode(" Log out ")];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(unref(Link), {
						class: "block w-full cursor-pointer",
						href: unref(logout)(),
						onClick: handleLogout,
						as: "button",
						"data-test": "logout-button"
					}, {
						default: withCtx(() => [createVNode(unref(LogOut), { class: "mr-2 h-4 w-4" }), createTextVNode(" Log out ")]),
						_: 1
					}, 8, ["href"])];
				}),
				_: 1
			}, _parent));
			_push(`<!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/components/UserMenuContent.vue
var _sfc_setup$17 = UserMenuContent_vue_vue_type_script_setup_true_lang_default.setup;
UserMenuContent_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/UserMenuContent.vue");
	return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
var UserMenuContent_default = UserMenuContent_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/NavUser.vue?vue&type=script&setup=true&lang.ts
var NavUser_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "NavUser",
	__ssrInlineRender: true,
	setup(__props) {
		const page = usePage();
		const user = computed(() => page.props.auth.user);
		const { isMobile, state } = useSidebar();
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(SidebarMenu_default), _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(SidebarMenuItem_default), null, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(ssrRenderComponent(unref(DropdownMenu_default), null, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(ssrRenderComponent(unref(DropdownMenuTrigger_default), { "as-child": "" }, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(ssrRenderComponent(unref(SidebarMenuButton_default), {
													size: "lg",
													class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
													"data-test": "sidebar-menu-button"
												}, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) {
															_push(ssrRenderComponent(UserInfo_default, { user: user.value }, null, _parent, _scopeId));
															_push(ssrRenderComponent(unref(ChevronsUpDown), { class: "ml-auto size-4" }, null, _parent, _scopeId));
														} else return [createVNode(UserInfo_default, { user: user.value }, null, 8, ["user"]), createVNode(unref(ChevronsUpDown), { class: "ml-auto size-4" })];
													}),
													_: 1
												}, _parent, _scopeId));
												else return [createVNode(unref(SidebarMenuButton_default), {
													size: "lg",
													class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
													"data-test": "sidebar-menu-button"
												}, {
													default: withCtx(() => [createVNode(UserInfo_default, { user: user.value }, null, 8, ["user"]), createVNode(unref(ChevronsUpDown), { class: "ml-auto size-4" })]),
													_: 1
												})];
											}),
											_: 1
										}, _parent, _scopeId));
										_push(ssrRenderComponent(unref(DropdownMenuContent_default), {
											class: "w-(--reka-dropdown-menu-trigger-width) min-w-56 rounded-lg",
											side: unref(isMobile) ? "bottom" : unref(state) === "collapsed" ? "left" : "bottom",
											align: "end",
											"side-offset": 4
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(ssrRenderComponent(UserMenuContent_default, { user: user.value }, null, _parent, _scopeId));
												else return [createVNode(UserMenuContent_default, { user: user.value }, null, 8, ["user"])];
											}),
											_: 1
										}, _parent, _scopeId));
									} else return [createVNode(unref(DropdownMenuTrigger_default), { "as-child": "" }, {
										default: withCtx(() => [createVNode(unref(SidebarMenuButton_default), {
											size: "lg",
											class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
											"data-test": "sidebar-menu-button"
										}, {
											default: withCtx(() => [createVNode(UserInfo_default, { user: user.value }, null, 8, ["user"]), createVNode(unref(ChevronsUpDown), { class: "ml-auto size-4" })]),
											_: 1
										})]),
										_: 1
									}), createVNode(unref(DropdownMenuContent_default), {
										class: "w-(--reka-dropdown-menu-trigger-width) min-w-56 rounded-lg",
										side: unref(isMobile) ? "bottom" : unref(state) === "collapsed" ? "left" : "bottom",
										align: "end",
										"side-offset": 4
									}, {
										default: withCtx(() => [createVNode(UserMenuContent_default, { user: user.value }, null, 8, ["user"])]),
										_: 1
									}, 8, ["side"])];
								}),
								_: 1
							}, _parent, _scopeId));
							else return [createVNode(unref(DropdownMenu_default), null, {
								default: withCtx(() => [createVNode(unref(DropdownMenuTrigger_default), { "as-child": "" }, {
									default: withCtx(() => [createVNode(unref(SidebarMenuButton_default), {
										size: "lg",
										class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
										"data-test": "sidebar-menu-button"
									}, {
										default: withCtx(() => [createVNode(UserInfo_default, { user: user.value }, null, 8, ["user"]), createVNode(unref(ChevronsUpDown), { class: "ml-auto size-4" })]),
										_: 1
									})]),
									_: 1
								}), createVNode(unref(DropdownMenuContent_default), {
									class: "w-(--reka-dropdown-menu-trigger-width) min-w-56 rounded-lg",
									side: unref(isMobile) ? "bottom" : unref(state) === "collapsed" ? "left" : "bottom",
									align: "end",
									"side-offset": 4
								}, {
									default: withCtx(() => [createVNode(UserMenuContent_default, { user: user.value }, null, 8, ["user"])]),
									_: 1
								}, 8, ["side"])]),
								_: 1
							})];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(unref(SidebarMenuItem_default), null, {
						default: withCtx(() => [createVNode(unref(DropdownMenu_default), null, {
							default: withCtx(() => [createVNode(unref(DropdownMenuTrigger_default), { "as-child": "" }, {
								default: withCtx(() => [createVNode(unref(SidebarMenuButton_default), {
									size: "lg",
									class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
									"data-test": "sidebar-menu-button"
								}, {
									default: withCtx(() => [createVNode(UserInfo_default, { user: user.value }, null, 8, ["user"]), createVNode(unref(ChevronsUpDown), { class: "ml-auto size-4" })]),
									_: 1
								})]),
								_: 1
							}), createVNode(unref(DropdownMenuContent_default), {
								class: "w-(--reka-dropdown-menu-trigger-width) min-w-56 rounded-lg",
								side: unref(isMobile) ? "bottom" : unref(state) === "collapsed" ? "left" : "bottom",
								align: "end",
								"side-offset": 4
							}, {
								default: withCtx(() => [createVNode(UserMenuContent_default, { user: user.value }, null, 8, ["user"])]),
								_: 1
							}, 8, ["side"])]),
							_: 1
						})]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/NavUser.vue
var _sfc_setup$16 = NavUser_vue_vue_type_script_setup_true_lang_default.setup;
NavUser_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/NavUser.vue");
	return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
var NavUser_default = NavUser_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/AppSidebar.vue?vue&type=script&setup=true&lang.ts
var AppSidebar_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AppSidebar",
	__ssrInlineRender: true,
	setup(__props) {
		const mainNavItems = [
			{
				title: "Dashboard",
				href: dashboard(),
				icon: LayoutGrid
			},
			{
				title: "Servers",
				href: "/servers",
				icon: Server
			},
			{
				title: "Web Apps",
				href: "#",
				icon: AppWindow
			},
			{
				title: "Databases",
				href: "#",
				icon: Database
			},
			{
				title: "Firewall",
				href: "#",
				icon: Shield
			},
			{
				title: "Cron Jobs",
				href: "#",
				icon: Timer
			},
			{
				title: "Backups",
				href: "#",
				icon: ScrollText
			}
		];
		const footerNavItems = [{
			title: "Documentation",
			href: "https://laravel.com/docs/starter-kits#vue",
			icon: null
		}];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Sidebar_default), {
				collapsible: "icon",
				variant: "inset"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(SidebarHeader_default), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(SidebarMenu_default), null, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(unref(SidebarMenuItem_default), null, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(ssrRenderComponent(unref(SidebarMenuButton_default), {
													size: "lg",
													"as-child": ""
												}, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(ssrRenderComponent(unref(Link), { href: unref(dashboard)() }, {
															default: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) _push(ssrRenderComponent(AppLogo_default, null, null, _parent, _scopeId));
																else return [createVNode(AppLogo_default)];
															}),
															_: 1
														}, _parent, _scopeId));
														else return [createVNode(unref(Link), { href: unref(dashboard)() }, {
															default: withCtx(() => [createVNode(AppLogo_default)]),
															_: 1
														}, 8, ["href"])];
													}),
													_: 1
												}, _parent, _scopeId));
												else return [createVNode(unref(SidebarMenuButton_default), {
													size: "lg",
													"as-child": ""
												}, {
													default: withCtx(() => [createVNode(unref(Link), { href: unref(dashboard)() }, {
														default: withCtx(() => [createVNode(AppLogo_default)]),
														_: 1
													}, 8, ["href"])]),
													_: 1
												})];
											}),
											_: 1
										}, _parent, _scopeId));
										else return [createVNode(unref(SidebarMenuItem_default), null, {
											default: withCtx(() => [createVNode(unref(SidebarMenuButton_default), {
												size: "lg",
												"as-child": ""
											}, {
												default: withCtx(() => [createVNode(unref(Link), { href: unref(dashboard)() }, {
													default: withCtx(() => [createVNode(AppLogo_default)]),
													_: 1
												}, 8, ["href"])]),
												_: 1
											})]),
											_: 1
										})];
									}),
									_: 1
								}, _parent, _scopeId));
								else return [createVNode(unref(SidebarMenu_default), null, {
									default: withCtx(() => [createVNode(unref(SidebarMenuItem_default), null, {
										default: withCtx(() => [createVNode(unref(SidebarMenuButton_default), {
											size: "lg",
											"as-child": ""
										}, {
											default: withCtx(() => [createVNode(unref(Link), { href: unref(dashboard)() }, {
												default: withCtx(() => [createVNode(AppLogo_default)]),
												_: 1
											}, 8, ["href"])]),
											_: 1
										})]),
										_: 1
									})]),
									_: 1
								})];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(SidebarContent_default), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(NavMain_default, { items: mainNavItems }, null, _parent, _scopeId));
								else return [createVNode(NavMain_default, { items: mainNavItems })];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(SidebarFooter_default), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(NavFooter_default, { items: footerNavItems }, null, _parent, _scopeId));
									_push(ssrRenderComponent(NavUser_default, null, null, _parent, _scopeId));
								} else return [createVNode(NavFooter_default, { items: footerNavItems }), createVNode(NavUser_default)];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						createVNode(unref(SidebarHeader_default), null, {
							default: withCtx(() => [createVNode(unref(SidebarMenu_default), null, {
								default: withCtx(() => [createVNode(unref(SidebarMenuItem_default), null, {
									default: withCtx(() => [createVNode(unref(SidebarMenuButton_default), {
										size: "lg",
										"as-child": ""
									}, {
										default: withCtx(() => [createVNode(unref(Link), { href: unref(dashboard)() }, {
											default: withCtx(() => [createVNode(AppLogo_default)]),
											_: 1
										}, 8, ["href"])]),
										_: 1
									})]),
									_: 1
								})]),
								_: 1
							})]),
							_: 1
						}),
						createVNode(unref(SidebarContent_default), null, {
							default: withCtx(() => [createVNode(NavMain_default, { items: mainNavItems })]),
							_: 1
						}),
						createVNode(unref(SidebarFooter_default), null, {
							default: withCtx(() => [createVNode(NavFooter_default, { items: footerNavItems }), createVNode(NavUser_default)]),
							_: 1
						})
					];
				}),
				_: 1
			}, _parent));
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`<!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/components/AppSidebar.vue
var _sfc_setup$15 = AppSidebar_vue_vue_type_script_setup_true_lang_default.setup;
AppSidebar_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/AppSidebar.vue");
	return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
var AppSidebar_default = AppSidebar_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/breadcrumb/Breadcrumb.vue?vue&type=script&setup=true&lang.ts
var Breadcrumb_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "Breadcrumb",
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
			_push(`<nav${ssrRenderAttrs(mergeProps({
				"aria-label": "breadcrumb",
				"data-slot": "breadcrumb",
				class: props.class
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</nav>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/breadcrumb/Breadcrumb.vue
var _sfc_setup$14 = Breadcrumb_vue_vue_type_script_setup_true_lang_default.setup;
Breadcrumb_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/breadcrumb/Breadcrumb.vue");
	return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
var Breadcrumb_default = Breadcrumb_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/breadcrumb/BreadcrumbEllipsis.vue?vue&type=script&setup=true&lang.ts
var BreadcrumbEllipsis_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "BreadcrumbEllipsis",
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
			_push(`<span${ssrRenderAttrs(mergeProps({
				"data-slot": "breadcrumb-ellipsis",
				role: "presentation",
				"aria-hidden": "true",
				class: unref(cn)("flex size-9 items-center justify-center", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, () => {
				_push(ssrRenderComponent(unref(MoreHorizontal), { class: "size-4" }, null, _parent));
			}, _push, _parent);
			_push(`<span class="sr-only">More</span></span>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/breadcrumb/BreadcrumbEllipsis.vue
var _sfc_setup$13 = BreadcrumbEllipsis_vue_vue_type_script_setup_true_lang_default.setup;
BreadcrumbEllipsis_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/breadcrumb/BreadcrumbEllipsis.vue");
	return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
//#endregion
//#region resources/js/components/ui/breadcrumb/BreadcrumbItem.vue?vue&type=script&setup=true&lang.ts
var BreadcrumbItem_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "BreadcrumbItem",
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
			_push(`<li${ssrRenderAttrs(mergeProps({
				"data-slot": "breadcrumb-item",
				class: unref(cn)("inline-flex items-center gap-1.5", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</li>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/breadcrumb/BreadcrumbItem.vue
var _sfc_setup$12 = BreadcrumbItem_vue_vue_type_script_setup_true_lang_default.setup;
BreadcrumbItem_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/breadcrumb/BreadcrumbItem.vue");
	return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
var BreadcrumbItem_default = BreadcrumbItem_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/breadcrumb/BreadcrumbLink.vue?vue&type=script&setup=true&lang.ts
var BreadcrumbLink_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "BreadcrumbLink",
	__ssrInlineRender: true,
	props: {
		asChild: { type: Boolean },
		as: { default: "a" },
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
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				"data-slot": "breadcrumb-link",
				as: __props.as,
				"as-child": __props.asChild,
				class: unref(cn)("hover:text-foreground transition-colors", props.class)
			}, _attrs), {
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
//#region resources/js/components/ui/breadcrumb/BreadcrumbLink.vue
var _sfc_setup$11 = BreadcrumbLink_vue_vue_type_script_setup_true_lang_default.setup;
BreadcrumbLink_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/breadcrumb/BreadcrumbLink.vue");
	return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
var BreadcrumbLink_default = BreadcrumbLink_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/breadcrumb/BreadcrumbList.vue?vue&type=script&setup=true&lang.ts
var BreadcrumbList_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "BreadcrumbList",
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
			_push(`<ol${ssrRenderAttrs(mergeProps({
				"data-slot": "breadcrumb-list",
				class: unref(cn)("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</ol>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/breadcrumb/BreadcrumbList.vue
var _sfc_setup$10 = BreadcrumbList_vue_vue_type_script_setup_true_lang_default.setup;
BreadcrumbList_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/breadcrumb/BreadcrumbList.vue");
	return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
var BreadcrumbList_default = BreadcrumbList_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/breadcrumb/BreadcrumbPage.vue?vue&type=script&setup=true&lang.ts
var BreadcrumbPage_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "BreadcrumbPage",
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
			_push(`<span${ssrRenderAttrs(mergeProps({
				"data-slot": "breadcrumb-page",
				role: "link",
				"aria-disabled": "true",
				"aria-current": "page",
				class: unref(cn)("text-foreground font-normal", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</span>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/breadcrumb/BreadcrumbPage.vue
var _sfc_setup$9 = BreadcrumbPage_vue_vue_type_script_setup_true_lang_default.setup;
BreadcrumbPage_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/breadcrumb/BreadcrumbPage.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var BreadcrumbPage_default = BreadcrumbPage_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/breadcrumb/BreadcrumbSeparator.vue?vue&type=script&setup=true&lang.ts
var BreadcrumbSeparator_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "BreadcrumbSeparator",
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
			_push(`<li${ssrRenderAttrs(mergeProps({
				"data-slot": "breadcrumb-separator",
				role: "presentation",
				"aria-hidden": "true",
				class: unref(cn)("[&>svg]:size-3.5", props.class)
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, () => {
				_push(ssrRenderComponent(unref(ChevronRight), null, null, _parent));
			}, _push, _parent);
			_push(`</li>`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/breadcrumb/BreadcrumbSeparator.vue
var _sfc_setup$8 = BreadcrumbSeparator_vue_vue_type_script_setup_true_lang_default.setup;
BreadcrumbSeparator_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/breadcrumb/BreadcrumbSeparator.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var BreadcrumbSeparator_default = BreadcrumbSeparator_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/Breadcrumbs.vue?vue&type=script&setup=true&lang.ts
var Breadcrumbs_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "Breadcrumbs",
	__ssrInlineRender: true,
	props: { breadcrumbs: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Breadcrumb_default), _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(BreadcrumbList_default), null, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<!--[-->`);
								ssrRenderList(__props.breadcrumbs, (item, index) => {
									_push(`<!--[-->`);
									_push(ssrRenderComponent(unref(BreadcrumbItem_default), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) if (index === __props.breadcrumbs.length - 1) _push(ssrRenderComponent(unref(BreadcrumbPage_default), null, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(`${ssrInterpolate(item.title)}`);
													else return [createTextVNode(toDisplayString(item.title), 1)];
												}),
												_: 2
											}, _parent, _scopeId));
											else _push(ssrRenderComponent(unref(BreadcrumbLink_default), { "as-child": "" }, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(ssrRenderComponent(unref(Link), { href: item.href }, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) _push(`${ssrInterpolate(item.title)}`);
															else return [createTextVNode(toDisplayString(item.title), 1)];
														}),
														_: 2
													}, _parent, _scopeId));
													else return [createVNode(unref(Link), { href: item.href }, {
														default: withCtx(() => [createTextVNode(toDisplayString(item.title), 1)]),
														_: 2
													}, 1032, ["href"])];
												}),
												_: 2
											}, _parent, _scopeId));
											else return [index === __props.breadcrumbs.length - 1 ? (openBlock(), createBlock(unref(BreadcrumbPage_default), { key: 0 }, {
												default: withCtx(() => [createTextVNode(toDisplayString(item.title), 1)]),
												_: 2
											}, 1024)) : (openBlock(), createBlock(unref(BreadcrumbLink_default), {
												key: 1,
												"as-child": ""
											}, {
												default: withCtx(() => [createVNode(unref(Link), { href: item.href }, {
													default: withCtx(() => [createTextVNode(toDisplayString(item.title), 1)]),
													_: 2
												}, 1032, ["href"])]),
												_: 2
											}, 1024))];
										}),
										_: 2
									}, _parent, _scopeId));
									if (index !== __props.breadcrumbs.length - 1) _push(ssrRenderComponent(unref(BreadcrumbSeparator_default), null, null, _parent, _scopeId));
									else _push(`<!---->`);
									_push(`<!--]-->`);
								});
								_push(`<!--]-->`);
							} else return [(openBlock(true), createBlock(Fragment, null, renderList(__props.breadcrumbs, (item, index) => {
								return openBlock(), createBlock(Fragment, { key: index }, [createVNode(unref(BreadcrumbItem_default), null, {
									default: withCtx(() => [index === __props.breadcrumbs.length - 1 ? (openBlock(), createBlock(unref(BreadcrumbPage_default), { key: 0 }, {
										default: withCtx(() => [createTextVNode(toDisplayString(item.title), 1)]),
										_: 2
									}, 1024)) : (openBlock(), createBlock(unref(BreadcrumbLink_default), {
										key: 1,
										"as-child": ""
									}, {
										default: withCtx(() => [createVNode(unref(Link), { href: item.href }, {
											default: withCtx(() => [createTextVNode(toDisplayString(item.title), 1)]),
											_: 2
										}, 1032, ["href"])]),
										_: 2
									}, 1024))]),
									_: 2
								}, 1024), index !== __props.breadcrumbs.length - 1 ? (openBlock(), createBlock(unref(BreadcrumbSeparator_default), { key: 0 })) : createCommentVNode("", true)], 64);
							}), 128))];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(unref(BreadcrumbList_default), null, {
						default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(__props.breadcrumbs, (item, index) => {
							return openBlock(), createBlock(Fragment, { key: index }, [createVNode(unref(BreadcrumbItem_default), null, {
								default: withCtx(() => [index === __props.breadcrumbs.length - 1 ? (openBlock(), createBlock(unref(BreadcrumbPage_default), { key: 0 }, {
									default: withCtx(() => [createTextVNode(toDisplayString(item.title), 1)]),
									_: 2
								}, 1024)) : (openBlock(), createBlock(unref(BreadcrumbLink_default), {
									key: 1,
									"as-child": ""
								}, {
									default: withCtx(() => [createVNode(unref(Link), { href: item.href }, {
										default: withCtx(() => [createTextVNode(toDisplayString(item.title), 1)]),
										_: 2
									}, 1032, ["href"])]),
									_: 2
								}, 1024))]),
								_: 2
							}, 1024), index !== __props.breadcrumbs.length - 1 ? (openBlock(), createBlock(unref(BreadcrumbSeparator_default), { key: 0 })) : createCommentVNode("", true)], 64);
						}), 128))]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/Breadcrumbs.vue
var _sfc_setup$7 = Breadcrumbs_vue_vue_type_script_setup_true_lang_default.setup;
Breadcrumbs_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Breadcrumbs.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var Breadcrumbs_default = Breadcrumbs_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/AppSidebarHeader.vue?vue&type=script&setup=true&lang.ts
var AppSidebarHeader_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AppSidebarHeader",
	__ssrInlineRender: true,
	props: { breadcrumbs: { default: () => [] } },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<header${ssrRenderAttrs(mergeProps({ class: "flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border/70 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4" }, _attrs))}><div class="flex items-center gap-2">`);
			_push(ssrRenderComponent(unref(SidebarTrigger_default), { class: "-ml-1" }, null, _parent));
			if (__props.breadcrumbs && __props.breadcrumbs.length > 0) _push(ssrRenderComponent(Breadcrumbs_default, { breadcrumbs: __props.breadcrumbs }, null, _parent));
			else _push(`<!---->`);
			_push(`</div></header>`);
		};
	}
});
//#endregion
//#region resources/js/components/AppSidebarHeader.vue
var _sfc_setup$6 = AppSidebarHeader_vue_vue_type_script_setup_true_lang_default.setup;
AppSidebarHeader_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/AppSidebarHeader.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var AppSidebarHeader_default = AppSidebarHeader_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/sonner/Sonner.vue?vue&type=script&setup=true&lang.ts
var Sonner_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "Sonner",
	__ssrInlineRender: true,
	props: {
		id: {},
		invert: { type: Boolean },
		theme: {},
		position: {},
		closeButtonPosition: {},
		hotkey: {},
		richColors: { type: Boolean },
		expand: { type: Boolean },
		duration: {},
		gap: {},
		visibleToasts: {},
		closeButton: { type: Boolean },
		toastOptions: {},
		class: {},
		style: {},
		offset: {},
		mobileOffset: {},
		dir: {},
		swipeDirections: {},
		icons: {},
		containerAriaLabel: {}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Toaster), mergeProps({
				class: unref(cn)("toaster group", props.class),
				style: {
					"--normal-bg": "var(--popover)",
					"--normal-text": "var(--popover-foreground)",
					"--normal-border": "var(--border)",
					"--border-radius": "var(--radius)"
				}
			}, props, _attrs), {
				"success-icon": withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(CircleCheckIcon), { class: "size-4" }, null, _parent, _scopeId));
					else return [createVNode(unref(CircleCheckIcon), { class: "size-4" })];
				}),
				"info-icon": withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(InfoIcon), { class: "size-4" }, null, _parent, _scopeId));
					else return [createVNode(unref(InfoIcon), { class: "size-4" })];
				}),
				"warning-icon": withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(TriangleAlertIcon), { class: "size-4" }, null, _parent, _scopeId));
					else return [createVNode(unref(TriangleAlertIcon), { class: "size-4" })];
				}),
				"error-icon": withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(OctagonXIcon), { class: "size-4" }, null, _parent, _scopeId));
					else return [createVNode(unref(OctagonXIcon), { class: "size-4" })];
				}),
				"loading-icon": withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div${_scopeId}>`);
						_push(ssrRenderComponent(unref(Loader2Icon), { class: "size-4 animate-spin" }, null, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", null, [createVNode(unref(Loader2Icon), { class: "size-4 animate-spin" })])];
				}),
				"close-icon": withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(XIcon), { class: "size-4" }, null, _parent, _scopeId));
					else return [createVNode(unref(XIcon), { class: "size-4" })];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/components/ui/sonner/Sonner.vue
var _sfc_setup$5 = Sonner_vue_vue_type_script_setup_true_lang_default.setup;
Sonner_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sonner/Sonner.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var Sonner_default = Sonner_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/layouts/app/AppSidebarLayout.vue?vue&type=script&setup=true&lang.ts
var AppSidebarLayout_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AppSidebarLayout",
	__ssrInlineRender: true,
	props: { breadcrumbs: { default: () => [] } },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AppShell_default, mergeProps({ variant: "sidebar" }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(AppSidebar_default, null, null, _parent, _scopeId));
						_push(ssrRenderComponent(AppContent_default, {
							variant: "sidebar",
							class: "overflow-x-hidden"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(AppSidebarHeader_default, { breadcrumbs: __props.breadcrumbs }, null, _parent, _scopeId));
									ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
								} else return [createVNode(AppSidebarHeader_default, { breadcrumbs: __props.breadcrumbs }, null, 8, ["breadcrumbs"]), renderSlot(_ctx.$slots, "default")];
							}),
							_: 3
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(Sonner_default), null, null, _parent, _scopeId));
					} else return [
						createVNode(AppSidebar_default),
						createVNode(AppContent_default, {
							variant: "sidebar",
							class: "overflow-x-hidden"
						}, {
							default: withCtx(() => [createVNode(AppSidebarHeader_default, { breadcrumbs: __props.breadcrumbs }, null, 8, ["breadcrumbs"]), renderSlot(_ctx.$slots, "default")]),
							_: 3
						}),
						createVNode(unref(Sonner_default))
					];
				}),
				_: 3
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/layouts/app/AppSidebarLayout.vue
var _sfc_setup$4 = AppSidebarLayout_vue_vue_type_script_setup_true_lang_default.setup;
AppSidebarLayout_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/app/AppSidebarLayout.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var AppSidebarLayout_default = AppSidebarLayout_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/layouts/AppLayout.vue?vue&type=script&setup=true&lang.ts
var AppLayout_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AppLayout",
	__ssrInlineRender: true,
	props: { breadcrumbs: { default: () => [] } },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AppSidebarLayout_default, mergeProps({ breadcrumbs: __props.breadcrumbs }, _attrs), {
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
//#region resources/js/layouts/AppLayout.vue
var _sfc_setup$3 = AppLayout_vue_vue_type_script_setup_true_lang_default.setup;
AppLayout_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/AppLayout.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var AppLayout_default = AppLayout_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/layouts/auth/AuthSimpleLayout.vue?vue&type=script&setup=true&lang.ts
var AuthSimpleLayout_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AuthSimpleLayout",
	__ssrInlineRender: true,
	props: {
		title: {},
		description: {}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10" }, _attrs))}><div class="w-full max-w-sm"><div class="flex flex-col gap-8"><div class="flex flex-col items-center gap-4">`);
			_push(ssrRenderComponent(unref(Link), {
				href: unref(home)(),
				class: "flex flex-col items-center gap-2 font-medium"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="mb-1 flex h-9 w-9 items-center justify-center rounded-md"${_scopeId}>`);
						_push(ssrRenderComponent(AppLogoIcon_default, { class: "size-9 fill-current text-[var(--foreground)] dark:text-white" }, null, _parent, _scopeId));
						_push(`</div><span class="sr-only"${_scopeId}>${ssrInterpolate(__props.title)}</span>`);
					} else return [createVNode("div", { class: "mb-1 flex h-9 w-9 items-center justify-center rounded-md" }, [createVNode(AppLogoIcon_default, { class: "size-9 fill-current text-[var(--foreground)] dark:text-white" })]), createVNode("span", { class: "sr-only" }, toDisplayString(__props.title), 1)];
				}),
				_: 1
			}, _parent));
			_push(`<div class="space-y-2 text-center"><h1 class="text-xl font-medium">${ssrInterpolate(__props.title)}</h1><p class="text-center text-sm text-muted-foreground">${ssrInterpolate(__props.description)}</p></div></div>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div></div></div>`);
		};
	}
});
//#endregion
//#region resources/js/layouts/auth/AuthSimpleLayout.vue
var _sfc_setup$2 = AuthSimpleLayout_vue_vue_type_script_setup_true_lang_default.setup;
AuthSimpleLayout_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/auth/AuthSimpleLayout.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var AuthSimpleLayout_default = AuthSimpleLayout_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/layouts/AuthLayout.vue?vue&type=script&setup=true&lang.ts
var AuthLayout_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AuthLayout",
	__ssrInlineRender: true,
	props: {
		title: { default: "" },
		description: { default: "" }
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AuthSimpleLayout_default, mergeProps({
				title: __props.title,
				description: __props.description
			}, _attrs), {
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
//#region resources/js/layouts/AuthLayout.vue
var _sfc_setup$1 = AuthLayout_vue_vue_type_script_setup_true_lang_default.setup;
AuthLayout_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/AuthLayout.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var AuthLayout_default = AuthLayout_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/layouts/settings/Layout.vue?vue&type=script&setup=true&lang.ts
var Layout_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "Layout",
	__ssrInlineRender: true,
	setup(__props) {
		const sidebarNavItems = [
			{
				title: "Profile",
				href: edit()
			},
			{
				title: "Security",
				href: edit$2()
			},
			{
				title: "Appearance",
				href: edit$1()
			}
		];
		const { isCurrentOrParentUrl } = useCurrentUrl();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 py-6" }, _attrs))}>`);
			_push(ssrRenderComponent(Heading_default, {
				title: "Settings",
				description: "Manage your profile and account settings"
			}, null, _parent));
			_push(`<div class="flex flex-col lg:flex-row lg:space-x-12"><aside class="w-full max-w-xl lg:w-48"><nav class="flex flex-col space-y-1 space-x-0" aria-label="Settings"><!--[-->`);
			ssrRenderList(sidebarNavItems, (item) => {
				_push(ssrRenderComponent(unref(Button_default), {
					key: unref(toUrl)(item.href),
					variant: "ghost",
					class: ["w-full justify-start", { "bg-muted": unref(isCurrentOrParentUrl)(item.href) }],
					"as-child": ""
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(ssrRenderComponent(unref(Link), { href: item.href }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), { class: "h-4 w-4" }, null), _parent, _scopeId);
									_push(` ${ssrInterpolate(item.title)}`);
								} else return [(openBlock(), createBlock(resolveDynamicComponent(item.icon), { class: "h-4 w-4" })), createTextVNode(" " + toDisplayString(item.title), 1)];
							}),
							_: 2
						}, _parent, _scopeId));
						else return [createVNode(unref(Link), { href: item.href }, {
							default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(item.icon), { class: "h-4 w-4" })), createTextVNode(" " + toDisplayString(item.title), 1)]),
							_: 2
						}, 1032, ["href"])];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></nav></aside>`);
			_push(ssrRenderComponent(unref(Separator_default), { class: "my-6 lg:hidden" }, null, _parent));
			_push(`<div class="flex-1 md:max-w-2xl"><section class="max-w-xl space-y-12">`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</section></div></div></div>`);
		};
	}
});
//#endregion
//#region resources/js/layouts/settings/Layout.vue
var _sfc_setup = Layout_vue_vue_type_script_setup_true_lang_default.setup;
Layout_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/settings/Layout.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Layout_default = Layout_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/lib/flashToast.ts
function initializeFlashToast() {
	router.on("flash", (event) => {
		const data = (event.detail?.flash)?.toast;
		if (!data) return;
		toast[data.type](data.message);
	});
}
//#endregion
//#region resources/js/app.ts
var appName = "ServerPanel";
var render = await createInertiaApp({
	resolve: async (name, page) => {
		const pages = /* #__PURE__ */ Object.assign({
			"./pages/Dashboard.vue": () => import("./assets/Dashboard-D3t9VLMO.js"),
			"./pages/Welcome.vue": () => import("./assets/Welcome-BUhrzkgl.js"),
			"./pages/auth/ConfirmPassword.vue": () => import("./assets/ConfirmPassword-C6uijzza.js"),
			"./pages/auth/ForgotPassword.vue": () => import("./assets/ForgotPassword-NvExggKh.js"),
			"./pages/auth/Login.vue": () => import("./assets/Login-BXTbSPJy.js"),
			"./pages/auth/Register.vue": () => import("./assets/Register-CS-3FADm.js"),
			"./pages/auth/ResetPassword.vue": () => import("./assets/ResetPassword-C0OPD0aT.js"),
			"./pages/auth/TwoFactorChallenge.vue": () => import("./assets/TwoFactorChallenge-C3CF9DoG.js"),
			"./pages/auth/VerifyEmail.vue": () => import("./assets/VerifyEmail-BhZXhkP6.js"),
			"./pages/servers/Index.vue": () => import("./assets/Index-PGlzILeE.js"),
			"./pages/settings/Appearance.vue": () => import("./assets/Appearance-UvhpP3sW.js"),
			"./pages/settings/Profile.vue": () => import("./assets/Profile-BHCwBBTX.js"),
			"./pages/settings/Security.vue": () => import("./assets/Security-v1BsDBGK.js")
		});
		const module = await (pages[`./pages/${name}.vue`] || pages[`./Pages/${name}.vue`])?.();
		if (!module) throw new Error(`Page not found: ${name}`);
		return module.default ?? module;
	},
	title: (title) => title ? `${title} - ${appName}` : appName,
	layout: (name) => {
		switch (true) {
			case name === "Welcome": return null;
			case name.startsWith("auth/"): return AuthLayout_default;
			case name.startsWith("settings/"): return [AppLayout_default, Layout_default];
			default: return AppLayout_default;
		}
	},
	progress: { color: "#4B5563" }
});
var renderPage = (page) => render(page, renderToString);
createServer(renderPage);
initializeTheme();
initializeFlashToast();
//#endregion
export { renderPage as default };

//# sourceMappingURL=app.js.map