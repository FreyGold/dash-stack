import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

function SidebarMinimalItem({
  icon,
  url,
  isActive,
  onClick,
}: {
  url: string;
  icon: ReactNode;
  isActive?: boolean;
  onClick: () => void;
}) {
  const router = useRouter();
  const locale = useLocale();

  function handleClick() {
    onClick();

    router.push(`/${locale}/${url}`);
  }
  return (
    <div
      className={`w-full cursor-pointer min-h-13 flex items-center justify-center relative ${
        isActive ? "text-primary" : ""
      }`}
      onClick={handleClick}
    >
      {isActive && (
        <div className="absolute ltr:left-0 rtl:right-0 w-2 border-r rounded-full h-[80%] bg-primary rotate-180 rtl:rotate-0 rtl:translate-x-[50%] ltr:-translate-x-[50%]"></div>
      )}
      {icon}
    </div>
  );
}

export default SidebarMinimalItem;
