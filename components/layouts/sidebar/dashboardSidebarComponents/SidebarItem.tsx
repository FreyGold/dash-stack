"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

function SidebarItem({
  url,
  icon,
  title,
  isActive,
  onClick,
}: {
  url: string;
  icon: ReactNode;
  title: string;
  isActive?: boolean;
  onClick: () => void;
}) {
  const fontColor = isActive ? "text-text-inverse" : "text-text";
  const router = useRouter();
  const supabase = createClientComponentClient();

  //   const locale = useLocale();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    } else {
      router.replace("/login");
    }
  };
  function handleClick() {
    onClick();
    if (url === "dashboard/logout") {
      handleLogout();
    } else {
      router.push(`/${url}`);
    }
  }
  return (
    <div
      className="w-full flex relative justify-start min-h-13 text-foreground px-6 cursor-pointer"
      onClick={() => handleClick()}
    >
      {isActive && (
        <div className="absolute ltr:left-0 rtl:right-0 rounded-2xl w-2 border-r h-full bg-primary rotate-180 rtl:rotate-0 ltr:-translate-x-[50%] rtl:translate-x-[50%] "></div>
      )}
      <div
        className={
          isActive
            ? `flex items-center w-full bg-primary rounded-[0.4rem] `
            : "flex items-center w-full"
        }
      >
        <div className="flex items-center gap-4 ps-4">
          <div className={`${fontColor}`}>{icon}</div>
          <h2 className={`${fontColor} font-semibold text-sm tracking-wide`}>
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SidebarItem;
