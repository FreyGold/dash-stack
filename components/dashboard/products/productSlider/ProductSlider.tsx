import { HeartFilled, StarFilled } from "@ant-design/icons";
import {
  CaretLeftIcon,
  CaretRightIcon,
  StarIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Card } from "antd";
import Image from "next/image";

const ProductSlider = () => {
  return (
    <Card
      hoverable
      cover={
        <div className="relative text-center">
          <button className="px-3 absolute start-0 top-[50%] -translate-[-50%]  py-2.5 w-10 h-10 flex items-center  rounded-full bg-background-dark">
            <CaretLeftIcon size={12} />
          </button>
          <Image
            width={300}
            height={300}
            alt="Apple Watch Series 4"
            src="/image.png"
          />
          <button className="px-3 absolute end-8.5 top-[50%] -translate-[-50%]  py-2.5 w-10 h-10 flex items-center  rounded-full bg-background-dark">
            <CaretRightIcon size={12} />
          </button>
        </div>
      }
      className="w-full mt-5 ms-5 px-3.5 max-w-sm rounded-xl shadow-lg"
    >
      <div className="px-2.5 pt-10 flex justify-between">
        <div className="flex-1">
          <h3 className="font-bold">Apple Watch Series 4 </h3>
          <p className="text-primary font-bold">$120</p>
          <div className="flex gap-.5 mt-2">
            <StarFilled className="!text-warning" size={16} />
            <StarFilled className="!text-warning" size={16} />
            <StarFilled className="!text-warning" size={16} />
            <StarFilled className="!text-warning" size={16} />
            <StarIcon className="!text-warning" size={16} />
            <span className="font-semibold opacity-40 text-sm">{`(131)`}</span>
          </div>
          <button className="px-6 rounded-xl py-1.5  flex items-center mt-5   bg-background-dark">
            Edit Product
          </button>
        </div>
        <button className="px-3  py-2.5 w-10 h-10 flex items-center  rounded-full bg-background-dark">
          <HeartFilled className="!text-danger" size={16} />
        </button>
      </div>
    </Card>
  );
};

export default ProductSlider;
