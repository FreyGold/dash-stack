import { Spin } from "antd";
import { Loader2Icon } from "lucide-react";

function Loading() {
   return (
      <div className="w-screen h-screen flex justify-center items-center">
         <Spin size="large" />
      </div>
   );
}

export default Loading;
