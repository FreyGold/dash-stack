import { AlignJustify, ChevronDown } from "lucide-react";
import SearchInput from "@/components/shared/SearchInput";
import Image from "next/image";
import { DownCircleOutlined } from "@ant-design/icons";

function DashboardHeader() {
   return (
      <div className="w-full flex bg-foreground h-17 px-8 items-center justify-between text-text  ">
         <div className="left flex items-center gap-8">
            <AlignJustify width={24} height={25} />
            <SearchInput />
         </div>
         <div className="right flex items-center w-96 gap-6 justify-between">
            <Image
               src={"/Icon.png"}
               width={29}
               height={30}
               alt={"Notification"}></Image>
            <div className="language flex items-center h-8">
               <Image
                  src={"/7260fbd7cccd7993400c3b1165f33370bf034acd.png"}
                  width={40}
                  height={27}
                  alt={"flag"}
                  className="mr-3 rounded-sm"></Image>
               <h3 className="text-sm mr-1">English</h3>
               <ChevronDown width={16} height={16} />
            </div>
            <div className="profile flex gap-4  items-center">
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
               <DownCircleOutlined className="mt-1" />
            </div>
         </div>
      </div>
   );
}

export default DashboardHeader;
