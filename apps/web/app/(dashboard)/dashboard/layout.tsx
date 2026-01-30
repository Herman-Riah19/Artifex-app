"use client";

import {
  SidebarProvider,
  SidebarTrigger,
} from "@repo/ui/components/ui/sidebar";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import { SidebarAdmin } from "@/components/sidebar/sidebar-admin";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      logout();
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <SidebarProvider>
        <SidebarAdmin user={user} logout={handleLogout} />
        <main className="flex-1 overflow-auto">
          <SidebarTrigger />
          <div className="p-6">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
}
