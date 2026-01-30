import React from "react";
import {
  FileText,
  Wallet,
  Building2,
  File,
  History,
  Settings,
  Users,
  Home,
  LogOut,
} from "lucide-react";
import { Link as LinkIcon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@repo/ui/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/ui/components/ui/tooltip";
import Link from "next/link";
import { User } from "@/store/auth-store";

const navigations = [
  { name: "Tableau de bord", href: "/dashboard", icon: Home },
  { name: "Contrats", href: "/dashboard/contracts", icon: FileText },
  { name: "Wallets", href: "/dashboard/wallets", icon: Wallet },
  { name: "Organisations", href: "/dashboard/organizations", icon: Building2 },
  { name: "Transactions", href: "/dashboard/transactions", icon: LinkIcon },
  { name: "Templates", href: "/dashboard/templates-view", icon: File },
  { name: "Audit Logs", href: "/dashboard/audit", icon: History },
  { name: "Configuration", href: "/dashboard/config", icon: Settings },
  { name: "Fichiers", href: "/dashboard/files", icon: FileText },
];

interface SidebarAdminProps {
  user: User | null;
  logout: () => void;
}

export function SidebarAdmin({ user, logout }: SidebarAdminProps) {
  return (
    <Sidebar>
      <SidebarContent className="flex flex-col h-full">
        {/* 🔹 Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Artifex</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigations.map((item, idx) => (
                <SidebarMenuItem key={idx}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-muted"
                    >
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* 🔻 User section (bottom) */}
        <div className="mt-auto border-t px-3 py-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-medium">
                {user?.name ?? "Utilisateur"}
              </span>
              <span className="text-xs text-muted-foreground truncate">
                {user?.email}
              </span>
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={logout}
                    className="rounded-md p-2 transition hover:bg-destructive/10 hover:text-destructive"
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <span>Logout</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
