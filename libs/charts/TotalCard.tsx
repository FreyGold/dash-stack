"use client";
import { TrendDownIcon, TrendUpIcon } from "@phosphor-icons/react";
import group from "@/assets/Group.svg";
import order from "@/assets/order.svg";
import pending from "@/assets/pending.svg";
import sales from "@/assets/sales.svg";
import Image from "next/image";
interface TotalCardProps {
   title: string;
   value: number;
   icon: number;
   iconColor: string;
   trendColor: string;
   isTrending: boolean;
   trend: string;
   trendValue: number;
}
const icons = [group, order, pending, sales];

const TotalCard = ({
   title,
   value,
   icon,
   iconColor,
   trend,
   trendColor,
   isTrending,
   trendValue,
}: TotalCardProps) => {
   return (
      <div className="bg-foreground flex h-40 flex-col justify-between rounded-2xl  p-4 w-full">
         <div className="flex gap-18 relative justify-between">
            <div>
               <h3 className="opacity-70 text-base font-semibold ">{title}</h3>
               <p className=" font-bold text-3xl mt-2.5 ">{value}</p>
            </div>
            <div className="h-1 "></div>
            <div
               className={`px-3.5 py-4 flex absolute bg-purple-opacity top-0 right-0 items-center justify-center w-[60px] bg-${iconColor}  rounded-3xl  text-2xl`}>
               <Image
                  src={icons[icon]}
                  sizes="32px"
                  width={32}
                  height={32}
                  alt={`${icon}`}></Image>
            </div>
         </div>
         <p
            className={`font-semibold opacity-70 flex items-center gap-2 text-sm`}>
            <span
               className={`flex items-center text-success text-${trendColor} gap-2`}>
               {isTrending ? (
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
