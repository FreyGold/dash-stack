"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Button, Drawer } from "antd";
import DashboardSidebar from "./dashboardSidebarComponents/DashboardSidebar";
import { XIcon } from "@phosphor-icons/react";

const SidebarDrawer = ({
   isOpen,
   setIsOpen,
}: {
   isOpen: boolean;
   setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
   const showDrawer = () => {
      setIsOpen(true);
   };

   const onClose = () => {
      setIsOpen(false);
   };
   const width = window.innerWidth > 420 ? "300px" : "100%";
   return (
      <Drawer
         placement="left"
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
         <div className="flex justify-center items-center md:hidden h-2">
            <Button onClick={onClose} type="text" className="py-0">
               <XIcon size={24} />
            </Button>
         </div>
         <DashboardSidebar closeHandler={onClose} />
      </Drawer>
   );
};

export default SidebarDrawer;
