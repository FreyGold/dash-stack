import { QRCode, Typography } from "antd";
import { FileData } from "../../shared/types";

const SidebarEditFile = ({ file }: { file: FileData }) => {
  return (
    <aside className="col-span-1 bg-foreground border-border border-1 border-t-0 border-b-1 ltr:rounded-br-2xl rtl:rounded-bl-2xl">
      <div className="py-7 border-b border-border px-5">
        <Typography.Title level={5}>QR Code</Typography.Title>
        <div className="flex justify-center bg-dots py-6 relative rounded-xl">
          <QRCode size={120} className="mx-auto" value={file.destination_url} />
        </div>
      </div>
      <div className="py-7 px-5">
        <Typography.Title level={5}>Preview</Typography.Title>
        <div className="relative w-full h-75  rounded-lg overflow-hidden">
          <iframe
            src={`${file.destination_url}#zoom=page-fit`}
            className="w-full object-contain overflow-hidden border-none h-full"
          />
        </div>
      </div>
    </aside>
  );
};

export default SidebarEditFile;
