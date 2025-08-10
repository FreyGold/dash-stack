"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Drawer } from "antd";
import DashboardSidebar from "./dashboardSidebarComponents/DashboardSidebar";

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

   return (
      <Drawer
         placement="left"
         onClose={onClose}
         open={isOpen}
         mask={false}
         maskClosable={false}
         zIndex={1000}
         width={240}
         styles={{
            wrapper: {
               backgroundColor: "transparent",
               boxShadow: "none",
            },
            body: { padding: 0 },
            header: { padding: 0, display: "none" },
         }}>
         <DashboardSidebar />
      </Drawer>
   );
};

export default SidebarDrawer;
