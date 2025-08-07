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
            <div className="absolute left-0 w-1.5 border-r rounded-full h-[80%] bg-primary rotate-180 -translate-x-[50%]"></div>
         )}
         {icon}
      </div>
   );
}

export default SidebarMinimalItem;
