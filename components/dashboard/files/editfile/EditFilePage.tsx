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
         <header className="flex col-span-full py-5 px-7 justify-between w-full bg-foreground border-border border-1">
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
               {/* <span className="font-bold">Files</span>
               <span>
                  <CaretRightIcon size={12} weight="bold" />
               </span>
               <span className="font-semibold">fileNames</span> */}
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
         <FormEditFile />
         <SidebarEditFile />
      </div>
   );
};

export default EditFilePage;
