"use client";
import React from "react";
import { Button, Input, Space, Table, Tooltip } from "antd";
import type { TableColumnsType } from "antd";
import type { ColumnFilterItem } from "antd/es/table/interface";
import {
   MagnifyingGlassIcon,
   PencilIcon,
   QrCodeIcon,
   TrashIcon,
} from "@phosphor-icons/react";
import { CopyIcon } from "@phosphor-icons/react/dist/ssr";
import { SearchOutlined } from "@ant-design/icons";

interface DataType {
   key: React.Key;
   name: string;
   description?: string;
   date: string;
   tag: string;
}

const data: DataType[] = [
   {
      key: "1",
      name: "John Brown",
      description: "Research document",
      date: "2025-8-8",
      tag: "Study",
   },
   {
      key: "2",
      name: "John Brown",
      description: "Confidential report",
      date: "2025-8-8",
      tag: "Classified",
   },
   {
      key: "3",
      name: "John Brown",
      description: "Priority materials",
      date: "2024-8-8",
      tag: "Important",
   },
   {
      key: "4",
      name: "Joe Black",
      description: "Top secret files",
      date: "2025-8-10",
      tag: "Secret",
   },
   {
      key: "5",
      name: "Jim Red",
      description: "Large dataset",
      date: "2025-8-9",
      tag: "Big",
   },
];

const uniqueTags: ColumnFilterItem[] = Array.from(
   new Set(data.map((item) => item.tag))
).map((tag) => ({
   text: tag,
   value: tag,
}));

const columns: TableColumnsType<DataType> = [
   {
      title: "Name",
      dataIndex: "name",
      fixed: "left",
      width: 150,
      filterDropdown: ({
         setSelectedKeys,
         selectedKeys,
         confirm,
         clearFilters,
      }) => (
         <div style={{ padding: 8 }}>
            <Input
               placeholder="Search names"
               value={selectedKeys[0]}
               onChange={(e) => {
                  setSelectedKeys(e.target.value ? [e.target.value] : []);
                  confirm({ closeDropdown: false });
               }}
               onPressEnter={() => confirm()}
               style={{ width: 188, marginBottom: 8, display: "block" }}
            />
            <Space>
               <Button
                  onClick={() => {
                     clearFilters?.();
                     confirm();
                  }}
                  size="small">
                  Reset
               </Button>
               <Button type="primary" onClick={() => confirm()} size="small">
                  Search
               </Button>
            </Space>
         </div>
      ),
      filterIcon: (filtered) => (
         <MagnifyingGlassIcon
            size={16}
            style={{ color: filtered ? 'var("--c-primary")' : undefined }}
         />
      ),
      onFilter: (value, record) =>
         record.name.toLowerCase().includes((value as string).toLowerCase()),
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"],
   },
   {
      title: "Description",
      dataIndex: "description",
   },
   {
      title: "Date",
      width: 120,
      dataIndex: "date",
      sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      sortDirections: ["descend", "ascend"],
   },
   {
      title: "Tags",
      dataIndex: "tag",
      filters: uniqueTags,
      onFilter: (value, record) =>
         value === "ALL" ? true : record.tag === value,
   },
   {
      title: "Actions",
      key: "actions",
      width: 200, // Set a fixed width for the actions column
      render: (_, record) => (
         <div className="flex space-x-2">
            <Tooltip title="Show QR Code">
               <Button
                  type="text"
                  icon={<QrCodeIcon size={19} />}
                  //  onClick={() => handleView(record)}
               />
            </Tooltip>
            <Tooltip title="Copy Link">
               <Button
                  type="text"
                  icon={<CopyIcon size={19} />}
                  //  onClick={() => handleEdit(record)}
               />
            </Tooltip>
            <Tooltip title="Edit File">
               <Button
                  type="text"
                  icon={<PencilIcon size={19} />}
                  //  onClick={() => handleEdit(record)}
               />
            </Tooltip>
            <Tooltip title="Danger: Delete File">
               <Button
                  type="text"
                  icon={<TrashIcon size={19} />}
                  //  onClick={() => handleDelete(record)}
                  danger
               />
            </Tooltip>
         </div>
      ),
   },
];

const Page = () => (
   <div>
      <div className="flex w-full justify-between">
         <h1 className="text-2xl font-bold mb-8">Files</h1>
         <Button>Add File</Button>
      </div>
      <Table<DataType>
         columns={columns}
         dataSource={data}
         showSorterTooltip={{ target: "sorter-icon" }}
         rowKey="key"
         scroll={{ x: 1200 }}
         style={{ width: "100%" }}
      />
   </div>
);

export default Page;
