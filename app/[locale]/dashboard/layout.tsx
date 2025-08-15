"use client";

import { DashboardHeader } from "@/components/layouts";
import { DashboardSidebarMinimal } from "@/components/layouts/";
import DashboardSidebar from "@/components/layouts/sidebar/dashboardSidebarComponents/DashboardSidebar";
import SidebarDrawer from "@/components/layouts/sidebar/SidebarDrawer";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import { Spin } from "antd";
import { Loader2 } from "lucide-react";
function Layout({ children }: { children: React.ReactNode }) {
   const [isOpen, setIsOpen] = useState(true);
   const [isMobile, setIsMobile] = useState(false);
   const supabase = createClientComponentClient();
   const router = useRouter();

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth < 920);
         if (window.innerWidth < 920) setIsOpen(false);
      };

      handleResize();

      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   const gridCols = isOpen
      ? "grid-cols-[240px_1fr]"
      : "grid-cols-[min-content_1fr]";
   return (
      <div
         className={`w-screen h-screen grid ${
            isMobile ? "grid-cols-1" : gridCols
         } font-nunito rtl:font-noto overflow-scroll`}>
         {/* Sidebar loads immediately */}
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

            {/* Main content area with loading state */}
            <div className="row-start-2 row-end-auto border-t border-l border-border/50 px-8 pt-8 bg-background">
               {children}
            </div>
         </div>
      </div>
   );
}

export default Layout;
