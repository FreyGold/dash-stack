"use client";

import { DashboardHeader } from "@/components/layouts";
import { DashboardSidebarMinimal } from "@/components/layouts/";
import DashboardSidebar from "@/components/layouts/sidebar/dashboardSidebarComponents/DashboardSidebar";
import SidebarDrawer from "@/components/layouts/sidebar/SidebarDrawer";
import { useEffect, useState } from "react";

function LayoutDashboard({ children }: { children: React.ReactNode }) {
   const [isOpen, setIsOpen] = useState(true);
   const [isMobile, setIsMobile] = useState(false);

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
         {isOpen && !isMobile && <DashboardSidebar isMobile={isMobile} />}
         {!isOpen && !isMobile && (
            <DashboardSidebarMinimal setIsOpen={setIsOpen} isOpen={isOpen} />
         )}
         {isMobile && (
            <SidebarDrawer
               setIsOpen={setIsOpen}
               isOpen={isOpen}
               isMobile={isMobile}
            />
         )}

         <div className="grid grid-rows-[min-content_1fr] lg:col-start-2 col-end-auto items-center">
            {/* <div className="flex flex-col col-start-2 col-end-auto"> */}
            <DashboardHeader
               setIsOpen={setIsOpen}
               isOpen={isOpen}
               isMobile={isMobile}
            />

            {/* <div className="flex-1 border-t border-l border-border/50 md:px-8 px-2 pt-8 bg-background"> */}
            <div className="row-start-2 row-end-auto border-t border-s border-border/50 md:px-8 px-2 pt-8 bg-background h-full overflow-x-hidden">
               {children}
            </div>
         </div>
      </div>
   );
}

export default LayoutDashboard;
