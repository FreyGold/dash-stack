import { AlignJustify } from "lucide-react";
import SearchInput from "@/components/shared/SearchInput";
import Image from "next/image";
import { DownCircleOutlined } from "@ant-design/icons";
import { Dispatch, SetStateAction } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

function DashboardHeader({
  setIsOpen,
  isOpen,
  isMobile,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  isMobile: boolean;
}) {
  return (
    <div className="w-full flex bg-foreground px-8 items-center justify-between text-text p-2 ">
      <div className="left flex items-center gap-8">
        {!isMobile && isOpen && (
          <AlignJustify
            width={24}
            height={25}
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer"
          />
        )}
        {isMobile && (
          <AlignJustify
            width={24}
            height={25}
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer"
          />
        )}
        <SearchInput />
      </div>
      <div className="right flex items-center gap-6 justify-between">
        <LanguageSwitcher />
        <div className="profile flex gap-4  items-center">
          <Image
            src={"/95bca3ecaf6d28d115834f85b6163b6e58e91c7c.png"}
            width={50}
            height={52}
            className="rounded-full mb-1"
            alt={"avatar"}
          ></Image>
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
