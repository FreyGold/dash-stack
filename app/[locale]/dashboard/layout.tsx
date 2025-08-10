"use client";
import { DashboardHeader } from "@/components/layouts";
import { DashboardSidebarMinimal } from "@/components/layouts/";
import DashboardSidebar from "@/components/layouts/sidebar/dashboardSidebarComponents/DashboardSidebar";
import SidebarDrawer from "@/components/layouts/sidebar/SidebarDrawer";
import { useState } from "react";

function Layout({ children }: { children: React.ReactNode }) {
   const [isOpen, setIsOpen] = useState(true);
   return (
      <div className="w-screen h-screen flex font-nunito overflow-scroll overflow-x-hidden">
         {isOpen && <DashboardSidebar />}

         {/* {isOpen && <div className="min-w-60"></div>} */}
         {!isOpen && (
            <DashboardSidebarMinimal setIsOpen={setIsOpen} isOpen={isOpen} />
         )}
         {/* <SidebarDrawer setIsOpen={setIsOpen} isOpen={isOpen} /> */}
         <div className="flex flex-col w-full h-full">
            <DashboardHeader setIsOpen={setIsOpen} isOpen={isOpen} />
            <div className="flex-1 border-t border-l border-border/50">
               {children}
            </div>
         </div>
      </div>
   );
}

export default Layout;
