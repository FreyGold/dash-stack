"use client";
import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";

// Dynamic imports for Ant Design skeleton components
import SkeletonButton from "antd/es/skeleton/Button";
import SkeletonInput from "antd/es/skeleton/Input";

interface SkeletonDataType {
   key: React.Key;
}

const Loader = () => {
   // Create skeleton data for multiple rows
   const skeletonData: SkeletonDataType[] = Array.from(
      { length: 8 },
      (_, index) => ({
         key: index,
      })
   );

   const skeletonColumns: TableColumnsType<SkeletonDataType> = [
      {
         title: <SkeletonInput active size="small" style={{ width: 60 }} />,
         dataIndex: "name",
         fixed: "left",
         width: 150,
         render: () => (
            <SkeletonInput active size="small" style={{ width: 120 }} />
         ),
      },
      {
         title: <SkeletonInput active size="small" style={{ width: 80 }} />,
         dataIndex: "description",
         render: () => (
            <SkeletonInput active size="small" style={{ width: 200 }} />
         ),
      },
      {
         title: <SkeletonInput active size="small" style={{ width: 50 }} />,
         width: 120,
         dataIndex: "date",
         render: () => (
            <SkeletonInput active size="small" style={{ width: 80 }} />
         ),
      },
      {
         title: <SkeletonInput active size="small" style={{ width: 40 }} />,
         dataIndex: "tag",
         render: () => (
            <SkeletonButton
               active
               size="small"
               style={{ width: 60, height: 24 }}
            />
         ),
      },
      {
         title: <SkeletonInput active size="small" style={{ width: 60 }} />,
         key: "actions",
         width: 210,
         render: () => (
            <div className="flex space-x-2">
               <SkeletonButton active size="small" shape="default" />
               <SkeletonButton active size="small" shape="default" />
               <SkeletonButton active size="small" shape="default" />
               <SkeletonButton active size="small" shape="default" />
            </div>
         ),
      },
   ];

   return (
      <div>
         {/* Header skeleton */}
         <div className="flex w-full justify-between mb-8">
            <SkeletonInput
               active
               size="large"
               style={{ width: 200, height: 32 }}
            />
            <SkeletonButton active size="large" style={{ width: 100 }} />
         </div>

         {/* Table skeleton */}
         <Table
            columns={skeletonColumns}
            dataSource={skeletonData}
            rowKey="key"
            scroll={{ x: 1200 }}
            style={{ width: "100%" }}
            pagination={false}
            showHeader={true}
         />

         {/* Pagination skeleton */}
         <div className="flex justify-end mt-4">
            <div className="flex items-center space-x-2">
               <SkeletonButton active size="small" />
               <SkeletonButton active size="small" />
               <SkeletonButton active size="small" />
               <SkeletonButton active size="small" />
               <SkeletonButton active size="small" />
            </div>
         </div>
      </div>
   );
};

export default Loader;
