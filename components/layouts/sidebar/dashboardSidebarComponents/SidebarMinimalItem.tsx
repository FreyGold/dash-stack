import { ReactNode } from "react";

function SidebarMinimalItem({
   icon,

   isActive,
   onClick,
}: {
   icon: ReactNode;
   isActive?: boolean;
   onClick: () => void;
}) {
   console.log(isActive);
   return (
      <div
         className={`w-full cursor-pointer min-h-13 flex items-center justify-center relative ${
            isActive ? "text-primary" : ""
         }`}
         onClick={onClick}>
         {isActive && (
            <div className="absolute ltr:left-0 rtl:right-0 w-2 border-r rounded-full h-[80%] bg-primary rotate-180 rtl:rotate-0 rtl:translate-x-[50%] ltr:-translate-x-[50%]"></div>
         )}
         {icon}
      </div>
   );
}

export default SidebarMinimalItem;
