import { ReactNode } from "react";

function SidebarItem({
   icon,
   title,
   isActive,
   onClick,
}: {
   icon: ReactNode;
   title: string;
   isActive?: boolean;
   onClick: () => void;
}) {
   const fontColor = isActive ? "text-white" : "text-black";
   return (
      <div
         className="w-full flex relative justify-start min-h-13 text-foreground px-6 cursor-pointer"
         onClick={onClick}>
         {isActive && (
            <div className="absolute left-0 w-2 border-r rounded-full h-full bg-primary rotate-180 -translate-x-[50%]"></div>
         )}
         <div
            className={
               isActive
                  ? `flex items-center w-full bg-primary rounded-[0.4rem]`
                  : "flex items-center w-full"
            }>
            <div className="flex items-center gap-4 pl-4">
               <div className={`${fontColor}`}>{icon}</div>
               <h2
                  className={`${fontColor} font-semibold text-sm tracking-wide`}>
                  {title}
               </h2>
            </div>
         </div>
      </div>
   );
}

export default SidebarItem;
