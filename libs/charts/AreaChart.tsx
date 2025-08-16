"use client";
import {
   AreaChart,
   Area,
   XAxis,
   YAxis,
   Tooltip,
   CartesianGrid,
   ResponsiveContainer,
} from "recharts";
import { Select } from "antd";
import { useState } from "react";
import { useChartColors } from "./colors";
import { AreaChartDataType } from "./types";
import { useTranslations } from "next-intl";

const { Option } = Select;

interface TooltipProps {
   active?: boolean;
   payload?: Array<{
      value: number | string;
      name?: string;
      dataKey?: string;
      payload?: AreaChartDataType;
   }>;
   label?: string | number;
   color?: string;
}
const CustomTooltip = ({ active, payload, color }: TooltipProps) => {
   if (active && payload && payload.length) {
      const value = payload[0].value;
      return (
         <div className="relative">
            <div
               className=" text-text-light font-bold p-2 rounded"
               style={{ backgroundColor: color }}>
               {`${value}`}
            </div>
         </div>
      );
   }
   return null;
};

const AreaChartComponent = ({
   title,
   chartData,
   colorIndex = 0,
}: {
   title: string;
   chartData: Record<string, AreaChartDataType[]>;
   colorIndex?: number;
}) => {
   const [selectedMonth, setSelectedMonth] = useState("October");
   const t = useTranslations("dashboard");
   const months = t.raw("months");
   const handleMonthChange = (value: string) => {
      setSelectedMonth(value);
   };

   const { getColorByIndex } = useChartColors();

   const color = getColorByIndex(colorIndex);

   if (!chartData) {
      return null;
   }

   return (
      <div className="px-6 py-7 rounded-lg shadow bg-foreground md:w-full w-[60%]">
         <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{title}</h2>
            <Select
               defaultValue={selectedMonth}
               onChange={handleMonthChange}
               className="w-26.5 opacity-75">
               <Option className=" opacity-75" value="October">
                  {months[9]}
               </Option>
               <Option className=" opacity-75" value="September">
                  {months[8]}
               </Option>
               <Option className=" opacity-75" value="August">
                  {months[7]}
               </Option>
            </Select>
         </div>
         <ResponsiveContainer className="mt-12.5" width="100%" height={330}>
            <AreaChart
               className="area-chart focus-visible:outline-none"
               data={chartData[selectedMonth]}>
               <defs className="area-chart-defs">
                  <linearGradient
                     className="area-chart-defs-linear-gradient"
                     id="colorValue"
                     x1="0"
                     y1="0"
                     x2="0"
                     y2="1">
                     <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                     <stop offset="95%" stopColor={color} stopOpacity={0} />
                  </linearGradient>
               </defs>
               <XAxis
                  className="area-chart-x-axis"
                  dataKey="name"
                  tickMargin={12}
                  axisLine={false}
                  tickLine={false}
               />
               <YAxis
                  className="area-chart-y-axis"
                  domain={[0, 100]}
                  tickMargin={20}
                  axisLine={false}
                  tickLine={false}
               />
               <CartesianGrid
                  className="area-chart-cartesian-grid"
                  vertical={false}
                  strokeDasharray="0"
                  stroke="var(--c-border)"
               />
               <Tooltip content={<CustomTooltip color={color} />} />
               <Area
                  type="monotone"
                  dataKey="value"
                  stroke={color}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                  dot={{ stroke: color, strokeWidth: 2, r: 3 }}
                  activeDot={{ r: 6 }}
               />
            </AreaChart>
         </ResponsiveContainer>
      </div>
   );
};

export default AreaChartComponent;
