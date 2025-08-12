import { Button } from "antd";
import { JSX } from "react";

export function LoginButton({
   icon,
   message,
   handleAuth,
}: {
   icon: JSX.Element;
   message: string;
   handleAuth?: () => Promise<void>;
}) {
   return (
      <Button
         block
         type="default"
         style={{
            paddingBlock: "2rem",
            direction: "ltr",
            borderRadius: "0.5rem",
            backgroundColor: "var(--c-background)",
         }}
         onClick={handleAuth}>
         {icon}
         <h3 className="font-bold text-xl text-text">{message}</h3>
      </Button>
   );
}
