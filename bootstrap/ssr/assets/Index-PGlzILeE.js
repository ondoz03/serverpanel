import { n as cn, t as Button_default } from "./button-DHJnCoso.js";
import { n as queryParams } from "./wayfinder-BrhwLpUM.js";
import { a as Card_default, i as CardContent_default, n as CardHeader_default, t as CardTitle_default } from "./card-DQ1WCodk.js";
import { Head, Link } from "@inertiajs/vue3";
import { Fragment, createBlock, createTextVNode, createVNode, defineComponent, mergeProps, openBlock, renderList, renderSlot, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderStyle } from "vue/server-renderer";
import { cva } from "class-variance-authority";
import { Primitive } from "reka-ui";
import { Activity, Circle, HardDrive, MemoryStick, Network, Plus, Server } from "@lucide/vue";
import { reactiveOmit } from "@vueuse/core";
//#region resources/js/components/ui/badge/Badge.vue?vue&type=script&setup=true&lang.ts
var Badge_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "Badge",
	__ssrInlineRender: true,
	props: {
		asChild: { type: Boolean },
		as: {},
		variant: {},
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
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				"data-slot": "badge",
				class: unref(cn)(unref(badgeVariants)({ variant: __props.variant }), props.class)
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
//#region resources/js/components/ui/badge/Badge.vue
var _sfc_setup$1 = Badge_vue_vue_type_script_setup_true_lang_default.setup;
Badge_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/badge/Badge.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Badge_default = Badge_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/badge/index.ts
var badgeVariants = cva("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
		secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
		destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
		outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
	} },
	defaultVariants: { variant: "default" }
});
//#endregion
//#region resources/js/routes/servers/index.ts
/**
* @see \App\Http\Controllers\Server\ServerController::index
* @see app/Http/Controllers/Server/ServerController.php:11
* @route '/servers'
*/
var index = (options) => ({
	url: index.url(options),
	method: "get"
});
index.definition = {
	methods: ["get", "head"],
	url: "/servers"
};
/**
* @see \App\Http\Controllers\Server\ServerController::index
* @see app/Http/Controllers/Server/ServerController.php:11
* @route '/servers'
*/
index.url = (options) => {
	return index.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Server\ServerController::index
* @see app/Http/Controllers/Server/ServerController.php:11
* @route '/servers'
*/
index.get = (options) => ({
	url: index.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Server\ServerController::index
* @see app/Http/Controllers/Server/ServerController.php:11
* @route '/servers'
*/
index.head = (options) => ({
	url: index.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\Server\ServerController::index
* @see app/Http/Controllers/Server/ServerController.php:11
* @route '/servers'
*/
var indexForm = (options) => ({
	action: index.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Server\ServerController::index
* @see app/Http/Controllers/Server/ServerController.php:11
* @route '/servers'
*/
indexForm.get = (options) => ({
	action: index.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Server\ServerController::index
* @see app/Http/Controllers/Server/ServerController.php:11
* @route '/servers'
*/
indexForm.head = (options) => ({
	action: index.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
index.form = indexForm;
var servers = { index: Object.assign(index, index) };
//#endregion
//#region resources/js/pages/servers/Index.vue?vue&type=script&setup=true&lang.ts
var Index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	layout: { breadcrumbs: [{
		title: "Servers",
		href: servers.index()
	}] },
	__name: "Index",
	__ssrInlineRender: true,
	props: { servers: {} },
	setup(__props) {
		function formatBytes(bytes) {
			return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
		}
		function formatUptime(seconds) {
			const days = Math.floor(seconds / 86400);
			const hours = Math.floor(seconds % 86400 / 3600);
			if (days > 0) return `${days}d ${hours}h`;
			return `${hours}h`;
		}
		function statusVariant(status) {
			switch (status) {
				case "active": return "success";
				case "provisioning": return "warning";
				case "error": return "destructive";
				default: return "secondary";
			}
		}
		function usageColor(percent) {
			if (percent > 90) return "bg-red-500";
			if (percent > 70) return "bg-yellow-500";
			return "bg-green-500";
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Servers" }, null, _parent));
			_push(`<div class="flex flex-col gap-6 p-4"><div class="flex items-center justify-between"><div><h1 class="text-2xl font-bold tracking-tight">Servers</h1><p class="text-sm text-muted-foreground">Manage your connected servers</p></div>`);
			_push(ssrRenderComponent(unref(Button_default), { "as-child": "" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(Link), { href: unref(servers).index() }, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(ssrRenderComponent(unref(Plus), { class: "mr-2 h-4 w-4" }, null, _parent, _scopeId));
								_push(` Add Server `);
							} else return [createVNode(unref(Plus), { class: "mr-2 h-4 w-4" }), createTextVNode(" Add Server ")];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(unref(Link), { href: unref(servers).index() }, {
						default: withCtx(() => [createVNode(unref(Plus), { class: "mr-2 h-4 w-4" }), createTextVNode(" Add Server ")]),
						_: 1
					}, 8, ["href"])];
				}),
				_: 1
			}, _parent));
			_push(`</div>`);
			if (unref(servers).length === 0) {
				_push(`<div class="flex flex-col items-center justify-center rounded-xl border border-dashed py-16">`);
				_push(ssrRenderComponent(unref(Server), { class: "mb-4 h-12 w-12 text-muted-foreground" }, null, _parent));
				_push(`<h2 class="text-lg font-medium">No servers yet</h2><p class="mb-4 text-sm text-muted-foreground">Connect your first server to get started</p>`);
				_push(ssrRenderComponent(unref(Button_default), { "as-child": "" }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(ssrRenderComponent(unref(Link), { href: unref(servers).index() }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(Plus), { class: "mr-2 h-4 w-4" }, null, _parent, _scopeId));
									_push(` Add Your First Server `);
								} else return [createVNode(unref(Plus), { class: "mr-2 h-4 w-4" }), createTextVNode(" Add Your First Server ")];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [createVNode(unref(Link), { href: unref(servers).index() }, {
							default: withCtx(() => [createVNode(unref(Plus), { class: "mr-2 h-4 w-4" }), createTextVNode(" Add Your First Server ")]),
							_: 1
						}, 8, ["href"])];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else {
				_push(`<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
				ssrRenderList(unref(servers), (server) => {
					_push(`<div>`);
					_push(ssrRenderComponent(unref(Card_default), { class: "overflow-hidden transition-shadow hover:shadow-md" }, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(ssrRenderComponent(unref(CardHeader_default), { class: "pb-3" }, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) {
											_push(`<div class="flex items-start justify-between"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"${_scopeId}>`);
											_push(ssrRenderComponent(unref(Server), { class: "h-5 w-5 text-primary" }, null, _parent, _scopeId));
											_push(`</div><div${_scopeId}>`);
											_push(ssrRenderComponent(unref(CardTitle_default), { class: "text-base" }, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(ssrRenderComponent(unref(Link), {
														href: unref(servers)(),
														class: "hover:underline"
													}, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) _push(`${ssrInterpolate(server.name)}`);
															else return [createTextVNode(toDisplayString(server.name), 1)];
														}),
														_: 2
													}, _parent, _scopeId));
													else return [createVNode(unref(Link), {
														href: unref(servers)(),
														class: "hover:underline"
													}, {
														default: withCtx(() => [createTextVNode(toDisplayString(server.name), 1)]),
														_: 2
													}, 1032, ["href"])];
												}),
												_: 2
											}, _parent, _scopeId));
											_push(`<p class="text-xs text-muted-foreground"${_scopeId}>${ssrInterpolate(server.ip_address)}</p></div></div>`);
											_push(ssrRenderComponent(unref(Badge_default), { variant: statusVariant(server.status) }, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) {
														_push(ssrRenderComponent(unref(Circle), { class: "mr-1 h-2 w-2 fill-current" }, null, _parent, _scopeId));
														_push(` ${ssrInterpolate(server.status)}`);
													} else return [createVNode(unref(Circle), { class: "mr-1 h-2 w-2 fill-current" }), createTextVNode(" " + toDisplayString(server.status), 1)];
												}),
												_: 2
											}, _parent, _scopeId));
											_push(`</div>`);
										} else return [createVNode("div", { class: "flex items-start justify-between" }, [createVNode("div", { class: "flex items-center gap-3" }, [createVNode("div", { class: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10" }, [createVNode(unref(Server), { class: "h-5 w-5 text-primary" })]), createVNode("div", null, [createVNode(unref(CardTitle_default), { class: "text-base" }, {
											default: withCtx(() => [createVNode(unref(Link), {
												href: unref(servers)(),
												class: "hover:underline"
											}, {
												default: withCtx(() => [createTextVNode(toDisplayString(server.name), 1)]),
												_: 2
											}, 1032, ["href"])]),
											_: 2
										}, 1024), createVNode("p", { class: "text-xs text-muted-foreground" }, toDisplayString(server.ip_address), 1)])]), createVNode(unref(Badge_default), { variant: statusVariant(server.status) }, {
											default: withCtx(() => [createVNode(unref(Circle), { class: "mr-1 h-2 w-2 fill-current" }), createTextVNode(" " + toDisplayString(server.status), 1)]),
											_: 2
										}, 1032, ["variant"])])];
									}),
									_: 2
								}, _parent, _scopeId));
								_push(ssrRenderComponent(unref(CardContent_default), { class: "space-y-4" }, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) {
											_push(`<div class="flex items-center gap-4 text-xs text-muted-foreground"${_scopeId}><span class="font-medium text-foreground"${_scopeId}>${ssrInterpolate(server.os)}</span><span${_scopeId}>${ssrInterpolate(server.provider)}</span><span${_scopeId}>${ssrInterpolate(server.datacenter)}</span></div><div class="space-y-2"${_scopeId}><div class="flex items-center justify-between text-xs"${_scopeId}><span class="flex items-center gap-1"${_scopeId}>`);
											_push(ssrRenderComponent(unref(Activity), { class: "h-3 w-3" }, null, _parent, _scopeId));
											_push(` CPU </span><span${_scopeId}>${ssrInterpolate(server.cpu_usage)}%</span></div><div class="h-1.5 overflow-hidden rounded-full bg-secondary"${_scopeId}><div class="${ssrRenderClass(["h-full rounded-full transition-all", usageColor(server.cpu_usage)])}" style="${ssrRenderStyle({ width: server.cpu_usage + "%" })}"${_scopeId}></div></div><div class="flex items-center justify-between text-xs"${_scopeId}><span class="flex items-center gap-1"${_scopeId}>`);
											_push(ssrRenderComponent(unref(MemoryStick), { class: "h-3 w-3" }, null, _parent, _scopeId));
											_push(` RAM </span><span${_scopeId}>${ssrInterpolate(formatBytes(server.memory_used))} / ${ssrInterpolate(formatBytes(server.memory_total))}</span></div><div class="h-1.5 overflow-hidden rounded-full bg-secondary"${_scopeId}><div class="${ssrRenderClass(["h-full rounded-full transition-all", usageColor(server.memory_used / server.memory_total * 100)])}" style="${ssrRenderStyle({ width: server.memory_used / server.memory_total * 100 + "%" })}"${_scopeId}></div></div><div class="flex items-center justify-between text-xs"${_scopeId}><span class="flex items-center gap-1"${_scopeId}>`);
											_push(ssrRenderComponent(unref(HardDrive), { class: "h-3 w-3" }, null, _parent, _scopeId));
											_push(` Disk </span><span${_scopeId}>${ssrInterpolate(formatBytes(server.disk_used))} / ${ssrInterpolate(formatBytes(server.disk_total))}</span></div><div class="h-1.5 overflow-hidden rounded-full bg-secondary"${_scopeId}><div class="${ssrRenderClass(["h-full rounded-full transition-all", usageColor(server.disk_used / server.disk_total * 100)])}" style="${ssrRenderStyle({ width: server.disk_used / server.disk_total * 100 + "%" })}"${_scopeId}></div></div></div><div class="flex items-center justify-between border-t pt-3 text-xs text-muted-foreground"${_scopeId}><span class="flex items-center gap-1"${_scopeId}>`);
											_push(ssrRenderComponent(unref(Network), { class: "h-3 w-3" }, null, _parent, _scopeId));
											_push(` Uptime ${ssrInterpolate(formatUptime(server.uptime))}</span><div class="flex gap-1"${_scopeId}><!--[-->`);
											ssrRenderList(server.services, (svc) => {
												_push(ssrRenderComponent(unref(Badge_default), {
													key: svc.name,
													variant: "outline",
													class: "text-[10px]"
												}, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(`${ssrInterpolate(svc.name)}`);
														else return [createTextVNode(toDisplayString(svc.name), 1)];
													}),
													_: 2
												}, _parent, _scopeId));
											});
											_push(`<!--]--></div></div>`);
										} else return [
											createVNode("div", { class: "flex items-center gap-4 text-xs text-muted-foreground" }, [
												createVNode("span", { class: "font-medium text-foreground" }, toDisplayString(server.os), 1),
												createVNode("span", null, toDisplayString(server.provider), 1),
												createVNode("span", null, toDisplayString(server.datacenter), 1)
											]),
											createVNode("div", { class: "space-y-2" }, [
												createVNode("div", { class: "flex items-center justify-between text-xs" }, [createVNode("span", { class: "flex items-center gap-1" }, [createVNode(unref(Activity), { class: "h-3 w-3" }), createTextVNode(" CPU ")]), createVNode("span", null, toDisplayString(server.cpu_usage) + "%", 1)]),
												createVNode("div", { class: "h-1.5 overflow-hidden rounded-full bg-secondary" }, [createVNode("div", {
													class: ["h-full rounded-full transition-all", usageColor(server.cpu_usage)],
													style: { width: server.cpu_usage + "%" }
												}, null, 6)]),
												createVNode("div", { class: "flex items-center justify-between text-xs" }, [createVNode("span", { class: "flex items-center gap-1" }, [createVNode(unref(MemoryStick), { class: "h-3 w-3" }), createTextVNode(" RAM ")]), createVNode("span", null, toDisplayString(formatBytes(server.memory_used)) + " / " + toDisplayString(formatBytes(server.memory_total)), 1)]),
												createVNode("div", { class: "h-1.5 overflow-hidden rounded-full bg-secondary" }, [createVNode("div", {
													class: ["h-full rounded-full transition-all", usageColor(server.memory_used / server.memory_total * 100)],
													style: { width: server.memory_used / server.memory_total * 100 + "%" }
												}, null, 6)]),
												createVNode("div", { class: "flex items-center justify-between text-xs" }, [createVNode("span", { class: "flex items-center gap-1" }, [createVNode(unref(HardDrive), { class: "h-3 w-3" }), createTextVNode(" Disk ")]), createVNode("span", null, toDisplayString(formatBytes(server.disk_used)) + " / " + toDisplayString(formatBytes(server.disk_total)), 1)]),
												createVNode("div", { class: "h-1.5 overflow-hidden rounded-full bg-secondary" }, [createVNode("div", {
													class: ["h-full rounded-full transition-all", usageColor(server.disk_used / server.disk_total * 100)],
													style: { width: server.disk_used / server.disk_total * 100 + "%" }
												}, null, 6)])
											]),
											createVNode("div", { class: "flex items-center justify-between border-t pt-3 text-xs text-muted-foreground" }, [createVNode("span", { class: "flex items-center gap-1" }, [createVNode(unref(Network), { class: "h-3 w-3" }), createTextVNode(" Uptime " + toDisplayString(formatUptime(server.uptime)), 1)]), createVNode("div", { class: "flex gap-1" }, [(openBlock(true), createBlock(Fragment, null, renderList(server.services, (svc) => {
												return openBlock(), createBlock(unref(Badge_default), {
													key: svc.name,
													variant: "outline",
													class: "text-[10px]"
												}, {
													default: withCtx(() => [createTextVNode(toDisplayString(svc.name), 1)]),
													_: 2
												}, 1024);
											}), 128))])])
										];
									}),
									_: 2
								}, _parent, _scopeId));
							} else return [createVNode(unref(CardHeader_default), { class: "pb-3" }, {
								default: withCtx(() => [createVNode("div", { class: "flex items-start justify-between" }, [createVNode("div", { class: "flex items-center gap-3" }, [createVNode("div", { class: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10" }, [createVNode(unref(Server), { class: "h-5 w-5 text-primary" })]), createVNode("div", null, [createVNode(unref(CardTitle_default), { class: "text-base" }, {
									default: withCtx(() => [createVNode(unref(Link), {
										href: unref(servers)(),
										class: "hover:underline"
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(server.name), 1)]),
										_: 2
									}, 1032, ["href"])]),
									_: 2
								}, 1024), createVNode("p", { class: "text-xs text-muted-foreground" }, toDisplayString(server.ip_address), 1)])]), createVNode(unref(Badge_default), { variant: statusVariant(server.status) }, {
									default: withCtx(() => [createVNode(unref(Circle), { class: "mr-1 h-2 w-2 fill-current" }), createTextVNode(" " + toDisplayString(server.status), 1)]),
									_: 2
								}, 1032, ["variant"])])]),
								_: 2
							}, 1024), createVNode(unref(CardContent_default), { class: "space-y-4" }, {
								default: withCtx(() => [
									createVNode("div", { class: "flex items-center gap-4 text-xs text-muted-foreground" }, [
										createVNode("span", { class: "font-medium text-foreground" }, toDisplayString(server.os), 1),
										createVNode("span", null, toDisplayString(server.provider), 1),
										createVNode("span", null, toDisplayString(server.datacenter), 1)
									]),
									createVNode("div", { class: "space-y-2" }, [
										createVNode("div", { class: "flex items-center justify-between text-xs" }, [createVNode("span", { class: "flex items-center gap-1" }, [createVNode(unref(Activity), { class: "h-3 w-3" }), createTextVNode(" CPU ")]), createVNode("span", null, toDisplayString(server.cpu_usage) + "%", 1)]),
										createVNode("div", { class: "h-1.5 overflow-hidden rounded-full bg-secondary" }, [createVNode("div", {
											class: ["h-full rounded-full transition-all", usageColor(server.cpu_usage)],
											style: { width: server.cpu_usage + "%" }
										}, null, 6)]),
										createVNode("div", { class: "flex items-center justify-between text-xs" }, [createVNode("span", { class: "flex items-center gap-1" }, [createVNode(unref(MemoryStick), { class: "h-3 w-3" }), createTextVNode(" RAM ")]), createVNode("span", null, toDisplayString(formatBytes(server.memory_used)) + " / " + toDisplayString(formatBytes(server.memory_total)), 1)]),
										createVNode("div", { class: "h-1.5 overflow-hidden rounded-full bg-secondary" }, [createVNode("div", {
											class: ["h-full rounded-full transition-all", usageColor(server.memory_used / server.memory_total * 100)],
											style: { width: server.memory_used / server.memory_total * 100 + "%" }
										}, null, 6)]),
										createVNode("div", { class: "flex items-center justify-between text-xs" }, [createVNode("span", { class: "flex items-center gap-1" }, [createVNode(unref(HardDrive), { class: "h-3 w-3" }), createTextVNode(" Disk ")]), createVNode("span", null, toDisplayString(formatBytes(server.disk_used)) + " / " + toDisplayString(formatBytes(server.disk_total)), 1)]),
										createVNode("div", { class: "h-1.5 overflow-hidden rounded-full bg-secondary" }, [createVNode("div", {
											class: ["h-full rounded-full transition-all", usageColor(server.disk_used / server.disk_total * 100)],
											style: { width: server.disk_used / server.disk_total * 100 + "%" }
										}, null, 6)])
									]),
									createVNode("div", { class: "flex items-center justify-between border-t pt-3 text-xs text-muted-foreground" }, [createVNode("span", { class: "flex items-center gap-1" }, [createVNode(unref(Network), { class: "h-3 w-3" }), createTextVNode(" Uptime " + toDisplayString(formatUptime(server.uptime)), 1)]), createVNode("div", { class: "flex gap-1" }, [(openBlock(true), createBlock(Fragment, null, renderList(server.services, (svc) => {
										return openBlock(), createBlock(unref(Badge_default), {
											key: svc.name,
											variant: "outline",
											class: "text-[10px]"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(svc.name), 1)]),
											_: 2
										}, 1024);
									}), 128))])])
								]),
								_: 2
							}, 1024)];
						}),
						_: 2
					}, _parent));
					_push(`</div>`);
				});
				_push(`<!--]--></div>`);
			}
			_push(`</div><!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/pages/servers/Index.vue
var _sfc_setup = Index_vue_vue_type_script_setup_true_lang_default.setup;
Index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/servers/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Index_default = Index_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { Index_default as default };

//# sourceMappingURL=Index-PGlzILeE.js.map