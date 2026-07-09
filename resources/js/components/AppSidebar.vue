<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { AppWindow, Database, LayoutGrid, ScrollText, Server as ServerIcon, Shield, Timer } from '@lucide/vue';
import AppLogo from '@/components/AppLogo.vue';
import NavFooter from '@/components/NavFooter.vue';
import NavMain from '@/components/NavMain.vue';
import NavUser from '@/components/NavUser.vue';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import backups from '@/routes/backups';
import cronJobs from '@/routes/cron-jobs';
import databases from '@/routes/databases';
import firewall from '@/routes/firewall';
import servers from '@/routes/servers';
import webApps from '@/routes/web-apps';
import type { NavItem } from '@/types';

const mainNavItems: NavItem[] = [
    { title: 'Dashboard', href: dashboard(), icon: LayoutGrid },
    { title: 'Servers', href: servers.index(), icon: ServerIcon },
    { title: 'Web Apps', href: webApps.index(), icon: AppWindow },
    { title: 'Databases', href: databases.index(), icon: Database },
    { title: 'Firewall', href: firewall.index(), icon: Shield },
    { title: 'Cron Jobs', href: cronJobs.index(), icon: Timer },
    { title: 'Backups', href: backups.index(), icon: ScrollText },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#vue',
        icon: null as unknown as NavItem['icon'],
    },
];
</script>

<template>
    <Sidebar collapsible="icon" variant="inset">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" as-child>
                        <Link :href="dashboard()">
                            <AppLogo />
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
            <NavMain :items="mainNavItems" />
        </SidebarContent>

        <SidebarFooter>
            <NavFooter :items="footerNavItems" />
            <NavUser />
        </SidebarFooter>
    </Sidebar>
    <slot />
</template>
