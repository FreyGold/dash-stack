"use client";
import {
   dashboardItems,
   pagesItems,
   settingsItems,
} from "../../../../services/constants/MENU_ITEMS";
import SidebarItem from "./SidebarItem";
import { useSidebar } from "@/services/context/SidebarContext";

function DashboardSidebar() {
   const { activeId, setActiveId } = useSidebar();
   return (
      <div className="min-w-61 bg-foreground flex-col flex py-6 items-center">
         <h1 className="font-extrabold text-xl text-black mb-8">
            <span className="text-primary">Dash</span>Stack
         </h1>
         {dashboardItems.map((item) => (
            <SidebarItem
               key={item.id}
               icon={item.icon}
               title={item.title}
               onClick={() => setActiveId(item.id)}
               isActive={item.id === activeId}
            />
         ))}
         <div className="border-background border/80 border w-full my-3"></div>
         <div className="w-full mt-1 mb-3">
            <h3 className="pl-12 text-black/60 text-xs tracking-wide">PAGES</h3>
         </div>
         {pagesItems.map((item) => (
            <SidebarItem
               key={item.id}
               icon={item.icon}
               title={item.title}
               onClick={() => setActiveId(item.id)}
               isActive={item.id === activeId}
            />
         ))}
         <div className="border-background border/80 border w-full my-3"></div>
         <div className="w-full my-1"></div>
         {settingsItems.map((item) => (
            <SidebarItem
               key={item.id}
               icon={item.icon}
               title={item.title}
               onClick={() => setActiveId(item.id)}
               isActive={item.id === activeId}
            />
         ))}
      </div>
   );
}

export default DashboardSidebar;
