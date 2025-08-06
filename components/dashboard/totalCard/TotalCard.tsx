"use client";
import { TrendDownIcon, TrendUpIcon } from "@phosphor-icons/react";
import Image from "next/image";
interface TotalCardProps {
  title: string;
  value: number;
  icon: string;
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
    <div className="bg-foreground flex h-40 flex-col justify-between rounded-[14px] w-66 p-3">
      <div className="flex relative justify-between">
        <div>
          <h3 className="opacity-70 text-[16px] font-semibold ">{title}</h3>
          <p className=" font-bold text-3xl mt-2.5 ">{value}</p>
        </div>
        <div
          className={`px-3.5 py-4 flex absolute top-0 right-3 items-center justify-center w-[60px]
              bg-${iconColor}  rounded-3xl  text-2xl`}
        >
          <Image
            src={icon}
            sizes="32px"
            width={32}
            height={32}
            alt="group"
          ></Image>
        </div>
      </div>
      <p className={`font-semibold opacity-70 flex items-center gap-2 text-sm`}>
        <span className={` flex items-center text-${trendColor} gap-2`}>
          {trendIcon ? <TrendUpIcon size={24} /> : <TrendDownIcon size={24} />}
          {trendValue}%
        </span>
        {trend}
      </p>
    </div>
  );
};

export default TotalCard;
