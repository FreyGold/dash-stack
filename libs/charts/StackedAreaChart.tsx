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
import { StackedDataType } from "./types";

const { Option } = Select;

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number | string;
    name?: string;
    dataKey?: string;
    payload?: StackedDataType;
  }>;
  label?: string | number;
  color?: string;
}
const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    const sales = payload.find((p) => p.dataKey === "Sales")?.value || 0;
    const profit = payload.find((p) => p.dataKey === "Profit")?.value || 0;
    return (
      <div className="p-2 bg-foreground rounded shadow">
        <p>{`Sales: ${sales}`}</p>
        <p>{`Profit: ${profit}`}</p>
      </div>
    );
  }
  return null;
};
interface IProps {
  chartData: Record<string, StackedDataType[]>;
  colorIndexOne?: number;
  colorIndexTwo?: number;
}
const StackedChartComponent = ({
  chartData,
  colorIndexOne = 2,
  colorIndexTwo = 1,
}: IProps) => {
  const [selectedMonth, setSelectedMonth] = useState("October");
  const { getColorByIndex } = useChartColors();
  const colorOne = getColorByIndex(colorIndexOne);
  const colorTwo = getColorByIndex(colorIndexTwo);
  const handleMonthChange = (value: string) => {
    setSelectedMonth(value);
  };

  if (!chartData[selectedMonth]) {
    return null;
  }

  return (
    <div className="px-8 pt-9 pb-8 mt-3 rounded-lg shadow bg-foreground w-full">
      <div className="flex justify-between items-center ">
        <h2 className="text-2xl font-bold">Revenue</h2>
        <Select
          defaultValue={selectedMonth}
          onChange={handleMonthChange}
          className="w-26.5 opacity-75"
        >
          <Option value="October">October</Option>
          <Option value="September">September</Option>
          <Option value="August">August</Option>
        </Select>
      </div>
      <ResponsiveContainer className="mt-12.5" width="100%" height={330}>
        <AreaChart
          data={chartData[selectedMonth]}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colorOne} stopOpacity={0.8} />
              <stop offset="95%" stopColor={colorOne} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colorTwo} stopOpacity={0.8} />
              <stop offset="95%" stopColor={colorTwo} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            tickMargin={12}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, 100]}
            tickMargin={12}
            axisLine={false}
            tickLine={false}
          />
          <CartesianGrid
            vertical={false}
            strokeDasharray="0"
            stroke="var(--c-border)"
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="Sales"
            stackId="1"
            stroke={colorOne}
            fillOpacity={1}
            fill="url(#colorSales)"
          />
          <Area
            type="monotone"
            dataKey="Profit"
            stackId="1"
            stroke={colorTwo}
            fillOpacity={1}
            fill="url(#colorProfit)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex justify-center mt-10 gap-15">
        <span className="flex gap-2.5 items-center">
          <span
            style={{ backgroundColor: colorOne }}
            className="w-3 h-3 rounded-full me-2"
          ></span>
          Sales
        </span>
        <span className="flex items-center">
          <span
            style={{ backgroundColor: colorTwo }}
            className="w-3 h-3 gap-2.5 rounded-full me-2"
          ></span>
          Profit
        </span>
      </div>
    </div>
  );
};

export default StackedChartComponent;
