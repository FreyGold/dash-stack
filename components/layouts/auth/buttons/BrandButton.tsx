import { Button } from "antd";
import Image from "next/image";
import { JSX } from "react";

function BrandButton({ icon, type }: { icon: JSX.Element; type: string }) {
   return (
      // <Button
      //    block
      //    shape="round"
      //    size="large"
      //    type="default"
      //    style={{ paddingBlock: 24 }}
      //    className="w-full rounded-full flex items-center px-3 bg-background h-18 justify-center cursor-pointer">
      //    {icon}
      //    <h3 className="font-bold text-xl">{`Sign in with ${type}`}</h3>
      // </Button>
      <Button
         block
         shape="round"
         type="default"
         style={{
            paddingBlock: "2rem",
            backgroundColor: "var(--c-background)",
         }}>
         {icon}
         <h3 className="font-bold text-xl">{`Sign in with ${type}`}</h3>
      </Button>
   );
}

export default BrandButton;
