"use client";
import {
   CaretRightIcon,
   CopyIcon,
   TrashSimpleIcon,
} from "@phosphor-icons/react/dist/ssr";
import FormEditFile from "./formEditFile/FormEditFile";
import { Breadcrumb, Button } from "antd";
import SidebarEditFile from "./sidebarEditFile/SidebarEditFile";
import Link from "next/link";

const EditFilePage = () => {
   return (
      <div className="grid grid-cols-3">
         <header className="flex col-span-full py-5 px-7 justify-between w-full bg-foreground border-border border-1 rounded-t-2xl">
            <div className="flex items-center gap-1">
               <Breadcrumb
                  items={[
                     {
                        title: <Link href={"/dashboard"}>Dashboard</Link>,
                     },
                     {
                        title: <Link href={"/dashboard/files"}>Files</Link>,
                     },
                     {
                        title: "Some File Name",
                     },
                  ]}
               />
            </div>
            <div className="flex items-center gap-1.5">
               <Button type="default" variant="outlined">
                  <CopyIcon size={16} className="me-1" />
                  Copy link
               </Button>
               <TrashSimpleIcon
                  className="ms-2 !text-primary"
                  size={24}
                  weight="bold"
               />
            </div>
         </header>
         <div className="bg-foreground col-span-2 col-start-1 border-s-1 border-border border-b-1 ltr:rounded-bl-2xl rtl:rounded-br-2xl">
            <FormEditFile />
         </div>
         <SidebarEditFile />
      </div>
   );
};

export default EditFilePage;
