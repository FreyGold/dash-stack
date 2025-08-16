"use client";

import {
   dashboardItems,
   pagesItems,
   settingsItems,
} from "@/services/constants";
import SidebarMinimalItem from "./dashboardSidebarComponents/SidebarMinimalItem";
import { Dispatch, SetStateAction } from "react";
import { AlignJustify } from "lucide-react";
import { useSidebar } from "@/services/context/SidebarContext";

function SidebarMinimal({
   isOpen,
   setIsOpen,
}: {
   isOpen: boolean;
   setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
   const { activeId, setActiveId } = useSidebar();

   return (
      <div className="min-w-21 flex-col flex py-6 items-center h-full">
         <div>
            <AlignJustify
               width={24}
               height={25}
               className="cursor-pointer mb-6 bottom-0.5 relative "
               onClick={() => setIsOpen(!isOpen)}
            />
         </div>

         {dashboardItems.map((item) => (
            <SidebarMinimalItem
               url={item.url}
               key={item.id}
               icon={item.icon}
               onClick={() => {
                  setActiveId(item.id);
               }}
               isActive={item.url === activeId}
            />
         ))}
         {pagesItems.map((item) => (
            <SidebarMinimalItem
               url={item.url}
               key={item.id}
               icon={item.icon}
               onClick={() => setActiveId(item.id)}
               isActive={item.url === activeId}
            />
         ))}
         {settingsItems.map((item) => (
            <SidebarMinimalItem
               url={item.url}
               key={item.id}
               icon={item.icon}
               onClick={() => setActiveId(item.id)}
               isActive={item.url === activeId}
            />
         ))}
      </div>
   );
}

export default SidebarMinimal;
