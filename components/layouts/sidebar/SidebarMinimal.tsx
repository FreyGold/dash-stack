"use client";

import {
   dashboardItems,
   pagesItems,
   settingsItems,
} from "@/services/constants";
import SidebarMinimalItem from "./dashboardSidebarComponents/SidebarMinimalItem";
import { Dispatch, SetStateAction, useState } from "react";
import { ListIcon } from "@phosphor-icons/react";
import { AlignJustify } from "lucide-react";

function SidebarMinimal({
   isOpen,
   setIsOpen,
}: {
   isOpen: boolean;
   setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
   const [activeId, setActiveId] = useState("dashboard");

   return (
      <div className="min-w-21 flex-col flex py-6 items-center">
         <AlignJustify
            width={24}
            height={25}
            className="cursor-pointer mb-4 bottom-0.5 relative"
            onClick={() => setIsOpen(!isOpen)}
         />

         {dashboardItems.map((item) => (
            <SidebarMinimalItem
               key={item.id}
               icon={item.icon}
               onClick={() => {
                  setActiveId(item.id);
               }}
               isActive={item.id === activeId}
            />
         ))}
         {pagesItems.map((item) => (
            <SidebarMinimalItem
               key={item.id}
               icon={item.icon}
               onClick={() => setActiveId(item.id)}
               isActive={item.id === activeId}
            />
         ))}
         {settingsItems.map((item) => (
            <SidebarMinimalItem
               key={item.id}
               icon={item.icon}
               onClick={() => setActiveId(item.id)}
               isActive={item.id === activeId}
            />
         ))}
      </div>
   );
}

export default SidebarMinimal;
