"use client";
import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

interface DataType {
   key: React.Key;
   name: string;
   date: string;
   updatedAt: string;
   tags: string[];
}

const columns: TableColumnsType<DataType> = [
   {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
         {
            text: "Joe",
            value: "Joe",
         },
         {
            text: "Jim",
            value: "Jim",
         },
         {
            text: "Submenu",
            value: "Submenu",
            children: [
               {
                  text: "Green",
                  value: "Green",
               },
               {
                  text: "Black",
                  value: "Black",
               },
            ],
         },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
   },
   {
      title: "Description",
      dataIndex: "description",
   },
   {
      title: "Date",
      dataIndex: "date",
      filters: [
         {
            text: "London",
            value: "London",
         },
         {
            text: "New York",
            value: "New York",
         },
      ],
      // onFilter: (value, record) =>
      //    record.address.indexOf(value as string) === 0,
   },

   {
      title: "Tags",
      dataIndex: "tags",
      filters: [
         {
            text: "London",
            value: "London",
         },
         {
            text: "New York",
            value: "New York",
         },
      ],
      // onFilter: (value, record) =>
      //    record.address.indexOf(value as string) === 0,
   },
   {
      title: "Actions",
      dataIndex: "actions",
   },
];

const data = [
   {
      key: "1",
      name: "John Brown",
      date: "2025-8-8",
      updatedAt: "2017-07-01",
      tags: ["nice", "developer"],
   },
   {
      key: "2",
      name: "John Brown",
      date: "2025-8-8",
      updatedAt: "2017-07-01",
      tags: ["nice", "developer"],
   },
   {
      key: "3",
      name: "John Brown",
      date: "2025-8-8",
      updatedAt: "2017-07-01",
      tags: ["nice", "developer"],
   },
   {
      key: "3",
      name: "Joe Black",
      date: "2025-8-8",
      updatedAt: "2017-07-01",
      tags: ["nice", "developer"],
   },
   {
      key: "4",
      name: "Jim Red",
      date: "2025-8-8",
      updatedAt: "2017-07-01",
      tags: ["nice", "developer"],
   },
];

const onChange: TableProps<DataType>["onChange"] = (
   pagination,
   filters,
   sorter,
   extra
) => {
   console.log("params", pagination, filters, sorter, extra);
};

const page = () => (
   <div>
      <h1 className="text-2xl font-bold mb-8">Files</h1>
      <Table<DataType>
         columns={columns}
         dataSource={data}
         onChange={onChange}
         showSorterTooltip={{ target: "sorter-icon" }}
      />
   </div>
);

export default page;
