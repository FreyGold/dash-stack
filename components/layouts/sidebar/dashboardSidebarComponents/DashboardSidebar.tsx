"use client";
import { useTranslations } from "next-intl";
import {
   dashboardItems,
   pagesItems,
   settingsItems,
} from "../../../../services/constants/MENU_ITEMS";
import SidebarItem from "./SidebarItem";
import { useSidebar } from "@/services/context/SidebarContext";
import { Button, Popover } from "antd";
import { XIcon } from "lucide-react";
import LanguageSwitcher from "../../header/LanguageSwitcher";
import Image from "next/image";
import { DownCircleOutlined } from "@ant-design/icons";

function DashboardSidebar({
   closeHandler,
   isMobile,
   locale,
}: {
   closeHandler?: () => void;
   isMobile: boolean;
   locale?: string;
}) {
   const { activeId } = useSidebar();
   const t = useTranslations("dashboard");
   console.log(activeId);
   return (
      <div
         className={`min-w-61 bg-foreground flex-col flex items-center ${
            isMobile ? "" : "py-6"
         }`}>
         {!isMobile && (
            <h1 className="font-extrabold text-xl text-text mb-8">
               <span className="text-primary">Dash</span>Stack
            </h1>
         )}
         {isMobile && (
            <div className="flex justify-between items-center w-full mb-8 ps-3.5">
               <h1 className="font-extrabold text-xl text-text ms-2.5">
                  <span className="text-primary">Dash</span>Stack
               </h1>
               <Button
                  onClick={closeHandler}
                  type="text"
                  className="py-0 relative">
                  <XIcon size={24} />
               </Button>
            </div>
         )}
         {isMobile && (
            <div className="flex items-center justify-between mb-6 w-full px-3">
               <div className="profile flex items-center w-full justify-between">
                  <div className="flex items-center gap-3">
                     <Image
                        src={"/95bca3ecaf6d28d115834f85b6163b6e58e91c7c.png"}
                        width={50}
                        height={52}
                        className="rounded-full mb-1"
                        alt={"avatar"}></Image>
                     <div className="flex-col gap-1 mt-1">
                        <h3 className="text-sm">Moni Roy</h3>
                        <h4 className="text-xs">Admin</h4>
                     </div>
                  </div>
                  <Popover
                     content={
                        <div className="flex flex-col gap-2">
                           <LanguageSwitcher />
                        </div>
                     }
                     placement={locale === "ar" ? "bottomLeft" : "bottomRight"}>
                     <Button type="text" icon={<DownCircleOutlined />}></Button>
                  </Popover>
               </div>
            </div>
         )}

         {dashboardItems.map((item) => (
            <SidebarItem
               url={item.url}
               key={item.id}
               icon={item.icon}
               title={
                  t
                     .raw("sections.dashboardSidebar")
                     .find(
                        (obj: { id: string; title: string }) =>
                           obj.id === item.id
                     )?.["title"]
               }
               onClick={() => {
                  closeHandler?.();
                  // setActiveId(() => item.url);
               }}
               isActive={item.url === activeId}
            />
         ))}
         <div className="border-background border/80 border w-full my-3"></div>
         <div className="w-full mt-1 mb-3">
            <h3 className="ps-12 text-text/60 text-xs tracking-wide">PAGES</h3>
         </div>
         {pagesItems.map((item) => (
            <SidebarItem
               url={item.url}
               key={item.id}
               icon={item.icon}
               onClick={() => {
                  closeHandler?.();
                  // setActiveId(() => item.url);
               }}
               title={
                  t
                     .raw("sections.dashboardSidebar")
                     .find(
                        (obj: { id: string; title: string }) =>
                           obj.id === item.id
                     )?.["title"]
               }
               isActive={item.url === activeId}
            />
         ))}
         <div className="border-background border/80 border w-full my-3"></div>
         <div className="w-full my-1"></div>
         {settingsItems.map((item) => (
            <SidebarItem
               url={item.url}
               key={item.id}
               icon={item.icon}
               onClick={() => {
                  closeHandler?.();
                  // setActiveId(() => item.url);
               }}
               title={
                  t
                     .raw("sections.dashboardSidebar")
                     .find(
                        (obj: { id: string; title: string }) =>
                           obj.id === item.id
                     )?.["title"]
               }
               isActive={item.url === activeId}
            />
         ))}
      </div>
   );
}

export default DashboardSidebar;
