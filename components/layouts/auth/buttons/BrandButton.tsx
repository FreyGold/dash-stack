import Image from "next/image";
import { JSX } from "react";

function BrandButton({ icon, type }: { icon: JSX.Element; type: string }) {
   return (
      <div className="w-full rounded-full flex items-center px-3 gap-2.5 bg-background h-18 justify-center">
         {icon}
         <h3 className="font-bold text-xl">{`Sign in with ${type}`}</h3>
      </div>
   );
}

export default BrandButton;
