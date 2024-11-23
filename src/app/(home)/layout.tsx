"use client";

import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <div className="flex flex-1 flex-col">
          {/* Navbar */}
          <Navbar />

          {/* Children (Page Content) */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}
