import { PencilSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import { Space, Select, Typography } from "antd";
import Input from "antd/es/input/Input";
import TextArea from "antd/es/input/TextArea";

const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
  },
];
const FormEditFile = () => {
  return (
    <div className="col-span-2  px-20 pt-7">
      <div className="mb-8">
        <Typography.Title level={5}>Destination URL</Typography.Title>
        <Input size="large" value={"test"} />
      </div>
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <Typography.Title level={5}>ShortLink</Typography.Title>
          <PencilSimpleIcon className="!text-primary" size={24} weight="bold" />
        </div>
        <Space.Compact className="w-full">
          <Select size="large" defaultValue="Zhejiang" options={options} />
          <Input
            size="large"
            className="w-full"
            defaultValue="Xihu District, Hangzhou"
          />
        </Space.Compact>
      </div>
      <div className="mb-8">
        <Typography.Title level={5}>Tags</Typography.Title>
        <Select
          mode="tags"
          className="tags"
          size="large"
          style={{ width: "100%" }}
          placeholder="Tags Mode"
        />
      </div>
      <div className="mb-8">
        <Typography.Title level={5}>Comments</Typography.Title>
        <TextArea size="large" placeholder="Add comments" />
      </div>
    </div>
  );
};

export default FormEditFile;
