"use client";
import { TrendDownIcon, TrendUpIcon } from "@phosphor-icons/react";
import { JSX } from "react";
interface TotalCardProps {
   title: string;
   value: number;
   icon: JSX.Element;
   iconColor: string;
   trendIcon: boolean;
   trendColor: string;
   trend: string;
   trendValue: number;
}
const TotalCard = ({
   title,
   value,
   icon,
   iconColor,
   trend,
   trendColor,
   trendIcon,
   trendValue,
}: TotalCardProps) => {
   return (
      <div className="bg-foreground flex flex-col justify-between rounded-2xl w-full p-4">
         <div className="flex relative justify-between mb-7">
            <div>
               <h3 className="opacity-70 font-semibold ">{title}</h3>
               <p className=" font-bold text-3xl mt-2.5 ">{value}</p>
            </div>
            <div
               className={`px-3.5 py-4 flex absolute top-0 right-3 items-center justify-center w-[60px]
              bg-${iconColor}  rounded-3xl  text-2xl`}>
               {icon}
            </div>
         </div>
         <p
            className={`font-semibold opacity-70 flex items-center gap-2 text-sm`}>
            <span className={` flex items-center text-${trendColor} gap-2`}>
               {trendIcon ? (
                  <TrendUpIcon size={24} />
               ) : (
                  <TrendDownIcon size={24} />
               )}
               {trendValue}%
            </span>
            {trend}
         </p>
      </div>
   );
};

export default TotalCard;
