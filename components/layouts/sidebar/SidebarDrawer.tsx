"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Button, Drawer } from "antd";
import DashboardSidebar from "./dashboardSidebarComponents/DashboardSidebar";
import { XIcon } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";

const SidebarDrawer = ({
   isOpen,
   setIsOpen,
   isMobile,
}: {
   isOpen: boolean;
   setIsOpen: Dispatch<SetStateAction<boolean>>;
   isMobile: boolean;
}) => {
   const pathname = usePathname();
   const locale = pathname.split("/")[1];

   const showDrawer = () => {
      setIsOpen(true);
   };

   const onClose = () => {
      setIsOpen(false);
   };
   const width = window.innerWidth > 420 ? "400px" : "100%";
   return (
      <Drawer
         placement={locale === "ar" ? "right" : "left"}
         onClose={onClose}
         open={isOpen}
         mask={true}
         maskClosable={true}
         zIndex={1000}
         width={width}
         destroyOnHidden={false}
         styles={{
            header: {
               height: 0,
               padding: 0,
               minHeight: 0,
               display: "none",
            },
         }}>
         <DashboardSidebar
            closeHandler={onClose}
            isMobile={isMobile}
            locale={locale}
         />
      </Drawer>
   );
};

export default SidebarDrawer;
