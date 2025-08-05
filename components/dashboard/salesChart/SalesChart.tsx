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

const { Option } = Select;

type DataType = {
  name: string;
  value: number;
};

const chartData: Record<string, DataType[]> = {
  October: [
    { name: "5k", value: 20 },
    { name: "10k", value: 45 },
    { name: "15k", value: 35 },
    { name: "20k", value: 64 },
    { name: "25k", value: 48 },
    { name: "30k", value: 52 },
    { name: "35k", value: 22 },
    { name: "40k", value: 43 },
    { name: "45k", value: 64 },
    { name: "50k", value: 59 },
    { name: "55k", value: 44 },
    { name: "60k", value: 55 },
  ],
  September: [
    { name: "5k", value: 30 },
    { name: "10k", value: 35 },
    { name: "15k", value: 25 },
    { name: "20k", value: 40 },
    { name: "25k", value: 50 },
    { name: "30k", value: 55 },
    { name: "35k", value: 60 },
    { name: "40k", value: 45 },
    { name: "45k", value: 35 },
    { name: "50k", value: 42 },
    { name: "55k", value: 47 },
    { name: "60k", value: 51 },
  ],
  August: [
    { name: "5k", value: 25 },
    { name: "10k", value: 28 },
    { name: "15k", value: 32 },
    { name: "20k", value: 45 },
    { name: "25k", value: 38 },
    { name: "30k", value: 44 },
    { name: "35k", value: 49 },
    { name: "40k", value: 50 },
    { name: "45k", value: 41 },
    { name: "50k", value: 46 },
    { name: "55k", value: 43 },
    { name: "60k", value: 39 },
  ],
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return (
      <div className="relative">
        <div className="bg-[#5E77FF] text-white font-bold p-2 rounded">
          {`${value}`}
          {/* <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#5E77FF]"></div> */}
        </div>
      </div>
    );
  }
  return null;
};

const SalesChart = () => {
  const [selectedMonth, setSelectedMonth] = useState("October");

  const handleMonthChange = (value: string) => {
    setSelectedMonth(value);
  };

  return (
    <div className=" px-6 py-7 rounded-lg shadow bg-foreground w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Sales Details</h2>
        <Select
          defaultValue={selectedMonth}
          onChange={handleMonthChange}
          className="w-26.5 opacity-75"
        >
          <Option className=" opacity-75" value="October">
            October
          </Option>
          <Option className=" opacity-75" value="September">
            September
          </Option>
          <Option className=" opacity-75" value="August">
            August
          </Option>
        </Select>
      </div>
      <ResponsiveContainer className="py-5" width="100%" height={330}>
        <AreaChart
          className="area-chart focus-visible:outline-none"
          data={chartData[selectedMonth]}
        >
          <defs className="area-chart-defs">
            <linearGradient
              className="area-chart-defs-linear-gradient"
              id="colorValue"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="var(--c-primary)"
                stopOpacity={0.8}
              />
              <stop offset="95%" stopColor="var(--c-primary)" stopOpacity={0} />
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
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="var(--c-primary)"
            fillOpacity={1}
            fill="url(#colorValue)"
            dot={{ stroke: "var(--c-primary)", strokeWidth: 2, r: 3 }}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
