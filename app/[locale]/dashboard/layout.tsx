"use client";

import { DashboardHeader } from "@/components/layouts";
import { DashboardSidebarMinimal } from "@/components/layouts/";
import DashboardSidebar from "@/components/layouts/sidebar/dashboardSidebarComponents/DashboardSidebar";
import SidebarDrawer from "@/components/layouts/sidebar/SidebarDrawer";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    };

    checkSession();
  }, [supabase, router]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 920);
      if (window.innerWidth < 920) setIsOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gridCols = isOpen
    ? "grid-cols-[240px_1fr]"
    : "grid-cols-[min-content_1fr]";

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div
      className={`w-screen h-screen grid ${gridCols} font-nunito rtl:font-noto overflow-scroll`}
    >
      {isOpen && !isMobile && <DashboardSidebar />}

      {!isOpen && !isMobile && (
        <DashboardSidebarMinimal setIsOpen={setIsOpen} isOpen={isOpen} />
      )}

      {isMobile && <SidebarDrawer setIsOpen={setIsOpen} isOpen={isOpen} />}

      <div className="grid grid-rows-[min-content_1fr] col-start-2 col-end-auto">
        <DashboardHeader
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          isMobile={isMobile}
        />
        <div className="row-start-2 row-end-auto border-t border-l border-border/50 px-8 pt-8 bg-background">
          {children}
        </div>
      </div>
    </div>
  );
}
