"use client";
import { Select } from "antd";
import { useState } from "react";
import { Table } from "antd";

const { Option } = Select;
type DataType = {
  key: string | number;
  name: string;
  location: string;
  dateTime: string | Date;
  piece: number;
  amount: number;
  status: "Active" | "Pending" | "Cancelled";
};
const dataSource: Record<string, DataType[]> = {
  October: [
    {
      key: "1",
      name: "Laptop Pro",
      location: "London",
      dateTime: "2023-10-01 14:00",
      piece: 5,
      amount: 1500,
      status: "Active",
    },
    {
      key: "2",
      name: "Smartphone X",
      location: "New York",
      dateTime: "2023-10-02 15:00",
      piece: 10,
      amount: 3000,
      status: "Pending",
    },
  ],
  September: [
    {
      key: "3",
      name: "Tablet Air",
      location: "Paris",
      dateTime: "2023-09-15 09:00",
      piece: 3,
      amount: 900,
      status: "Cancelled",
    },
    {
      key: "4",
      name: "Headphones Z",
      location: "Tokyo",
      dateTime: "2023-09-20 12:00",
      piece: 8,
      amount: 400,
      status: "Active",
    },
  ],
  August: [
    {
      key: "5",
      name: "Smartwatch 3",
      location: "Berlin",
      dateTime: "2023-08-10 16:00",
      piece: 15,
      amount: 750,
      status: "Pending",
    },
    {
      key: "6",
      name: "Camera Pro",
      location: "Sydney",
      dateTime: "2023-08-05 11:00",
      piece: 2,
      amount: 1200,
      status: "Active",
    },
  ],
};

const columns = [
  {
    title: "Product Name",
    dataIndex: "name",
    className: " font-bold justify-center",

    key: "name",
    render: (name: string) => (
      <span className="font-bold text-sm opacity-80">{name}</span>
    ),
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    className: " font-bold justify-center",

    render: (location: string) => (
      <span className="font-bold opacity-80">{location}</span>
    ),
  },
  {
    title: "Date - Time",
    dataIndex: "dateTime",
    key: "dateTime",
    className: " font-bold justify-center",

    render: (dateTime: string) => (
      <span className="font-bold text-sm opacity-80">{dateTime}</span>
    ),
  },
  {
    title: "Piece",
    dataIndex: "piece",
    key: "piece",
    className: "!text-center font-bold justify-center",

    render: (piece: string) => (
      <span className="font-bold text-sm opacity-80">{piece}</span>
    ),
  },
  {
    title: "Amount",
    dataIndex: "amount",
    className: "!text-center font-bold justify-center",
    key: "amount",
    render: (amount: string) => (
      <span className="font-bold text-sm opacity-80">{amount}</span>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    className: "!text-center justify-center",
    key: "status",
    render: (status: string) => {
      let color = "";
      if (status === "Active") {
        color = "bg-delivered";
      } else if (status === "Pending") {
        color = "bg-pending";
      } else if (status === "Cancelled") {
        color = "bg-rejected ";
      }
      return (
        <p
          className={`mx-auto font-bold w-fit px-3 text-sm rounded-2xl py-1 text-text-light gap-2 ${color}`}
        >
          {status}
        </p>
      );
    },
  },
];

const DealsDetails = () => {
  const [selectedMonth, setSelectedMonth] = useState("October");

  const handleMonthChange = (value: string) => {
    setSelectedMonth(value);
  };

  return (
    <div className="px-6 py-7 rounded-lg shadow bg-foreground w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Deals Details</h2>
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
      <Table
        dataSource={dataSource[selectedMonth]}
        pagination={false}
        className="mt-7"
        columns={columns}
      />
    </div>
  );
};

export default DealsDetails;
