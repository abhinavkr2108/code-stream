import AppSidebar from "@/components/shared/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <SidebarProvider>
        <AppSidebar />

        <main className="flex-grow">
          <SidebarTrigger />
          {/* <SidebarTrigger className="text-primary-foreground" /> */}
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
