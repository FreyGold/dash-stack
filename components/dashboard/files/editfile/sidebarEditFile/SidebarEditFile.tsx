import { EditOutlined } from "@ant-design/icons";
import { QRCode, Select, Typography } from "antd";
import Image from "next/image";

const SidebarEditFile = () => {
   return (
      <aside className="col-span-1 bg-foreground pt-7 border-border border-1 border-t-0">
         <div className="py-7 border-b   px-5 border-border">
            <Typography.Title level={5}>Folder</Typography.Title>{" "}
            <Select
               showSearch
               placeholder="Select a person"
               filterOption={(input, option) =>
                  (option?.label ?? "")
                     .toLowerCase()
                     .includes(input.toLowerCase())
               }
               options={[
                  { value: "1", label: "Links" },
                  { value: "2", label: "Lucy" },
                  { value: "3", label: "Tom" },
               ]}
            />
         </div>
         <div className="py-7 border-b border-border px-5">
            <Typography.Title level={5}>QR Code</Typography.Title>
            <div className="flex justify-center bg-dots py-6 relative rounded-xl">
               <QRCode size={80} className="mx-auto" value={"-"} />
               <EditOutlined className="cursor-pointer bg-text-light px-3 py-2 rounded-xl absolute end-5.5" />
            </div>
         </div>
         <div className="py-7 border-b border-border px-5">
            <Typography.Title level={5}>Preview</Typography.Title>
            <div className="relative  rounded-lg overflow-hidden ">
               <Image
                  src="/arabic.png"
                  alt="Link Preview"
                  style={{ objectFit: "contain" }}
                  width={500}
                  height={300}
               />
               <EditOutlined className="cursor-pointer top-2.5 bg-text-light px-3 py-2 rounded-xl absolute end-5.5" />
            </div>
         </div>
      </aside>
   );
};

export default SidebarEditFile;
