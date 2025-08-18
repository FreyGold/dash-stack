"use client";
import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Breadcrumb, Upload, notification } from "antd";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

const { Dragger } = Upload;

const AddFilePage: React.FC = () => {
   const supabase = createClientComponentClient();
   const [api, contextHolder] = notification.useNotification();
   const [loading, setLoading] = useState(false);

   const showError = (message: string, description?: string) => {
      api.error({
         message,
         description,
         placement: "topRight",
         duration: 4.5,
      });
   };

   const showSuccess = (message: string) => {
      api.success({
         message,
         placement: "topRight",
         duration: 3,
      });
   };

   const customRequest: UploadProps["customRequest"] = async ({
      file,
      onSuccess,
      onError,
   }) => {
      setLoading(true);
      const uploadFile = file as File;

      try {
         const isLt10M = uploadFile.size / 1024 / 1024 < 10;
         if (!isLt10M) {
            throw new Error("File must be smaller than 10MB");
         }

         const isPdf = uploadFile.type === "application/pdf";
         if (!isPdf) {
            throw new Error("Only PDF files are allowed");
         }

         const fileExt = uploadFile.name.split(".").pop();
         const fileName = `${Date.now()}-${Math.random()
            .toString(36)
            .substring(2, 8)}.${fileExt}`;
         const filePath = `uploads/${fileName}`;

         const { error } = await supabase.storage
            .from("files")
            .upload(filePath, uploadFile, {
               contentType: uploadFile.type,
            });

         if (error) throw error;

         const {
            data: { publicUrl },
         } = supabase.storage.from("files").getPublicUrl(filePath);

         console.log("File uploaded successfully:", publicUrl);
         showSuccess(`${uploadFile.name} uploaded successfully!`);
         (file as any).url = publicUrl;
         onSuccess?.("ok");
      } catch (error) {
         console.error("Upload error:", error);
         const errorMsg =
            error instanceof Error ? error.message : "Upload failed";
         showError("Upload Failed", errorMsg);
         onError?.(error as Error);
      } finally {
         setLoading(false);
      }
   };

   const props: UploadProps = {
      name: "file",
      multiple: false,
      customRequest,
      accept: ".pdf",
      disabled: loading,

      showUploadList: {
         showPreviewIcon: true,
         showDownloadIcon: true,
         showRemoveIcon: true,
      },
      onPreview: (file) => {
         const url = file.url || file.response;
         if (url) {
            window.open(url, "_blank");
         }
      },
      onChange(info) {
         const { status } = info.file;
         if (status === "done") {
            console.log("Upload completed:", info.file.name);
         }
      },
      onDrop(e) {
         console.log("Dropped files", e.dataTransfer.files);
      },
   };

   return (
      <>
         {contextHolder}
         <div className="flex justify-between items-center flex-col w-full h-[40%]">
            <div className="flex items-center gap-1 self-start w-full py-4 bg-foreground px-4 rounded-sm shadow-xs">
               <Breadcrumb
                  items={[
                     {
                        title: <Link href={"/dashboard"}>Dashboard</Link>,
                     },
                     {
                        title: <Link href={"/dashboard/files"}>Files</Link>,
                     },

                     {
                        title: "Upload File",
                     },
                  ]}
               />
            </div>
            <div className="flex justify-center items-center flex-col w-full h-[40%] p-4">
               <Dragger
                  {...props}
                  className="p-8 w-full max-w-3xl bg-foreground rounded-xl shadow-sm">
                  <p className="ant-upload-drag-icon text-primary">
                     <InboxOutlined style={{ fontSize: "48px" }} />
                  </p>
                  <p className="ant-upload-text text-lg font-medium">
                     {loading
                        ? "Upload in progress..."
                        : "Click or drag PDF to upload"}
                  </p>
                  <p className="ant-upload-hint text-text">
                     Maximum file size: 10MB. Only PDF files accepted.
                  </p>
               </Dragger>
            </div>
         </div>
      </>
   );
};

export default AddFilePage;
