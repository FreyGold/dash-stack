"use client";
import { useTranslations } from "next-intl";
import {
  dashboardItems,
  pagesItems,
  settingsItems,
} from "../../../../services/constants/MENU_ITEMS";
import SidebarItem from "./SidebarItem";
import { useSidebar } from "@/services/context/SidebarContext";

function DashboardSidebar() {
  const { activeId, setActiveId } = useSidebar();

  const t = useTranslations("dashboard");
  return (
    <div className="min-w-61 bg-foreground flex-col flex py-6 items-center">
      <h1 className="font-extrabold text-xl text-text mb-8">
        <span className="text-primary">Dash</span>Stack
      </h1>
      {dashboardItems.map((item) => (
        <SidebarItem
          url={item.url}
          key={item.id}
          icon={item.icon}
          title={
            t
              .raw("sections.dashboardSidebar")
              .find(
                (obj: { id: string; title: string }) => obj.id === item.id
              )?.["title"]
          }
          onClick={() => setActiveId(() => `/${item.url}`)}
          isActive={`/${item.url}` === activeId}
        />
      ))}
      <div className="border-background border/80 border w-full my-3"></div>
      <div className="w-full mt-1 mb-3">
        <h3 className="ps-12 text-text/60 text-xs tracking-wide">PAGES</h3>
      </div>
      {pagesItems.map((item) => (
        <SidebarItem
          url={item.url}
          key={item.id}
          icon={item.icon}
          onClick={() => setActiveId(() => `/${item.url}`)}
          title={
            t
              .raw("sections.dashboardSidebar")
              .find(
                (obj: { id: string; title: string }) => obj.id === item.id
              )?.["title"]
          }
          isActive={`/${item.url}` === activeId}
        />
      ))}
      <div className="border-background border/80 border w-full my-3"></div>
      <div className="w-full my-1"></div>
      {settingsItems.map((item) => (
        <SidebarItem
          url={item.url}
          key={item.id}
          icon={item.icon}
          onClick={() => setActiveId(() => `/${item.url}`)}
          title={
            t
              .raw("sections.dashboardSidebar")
              .find(
                (obj: { id: string; title: string }) => obj.id === item.id
              )?.["title"]
          }
          isActive={`/${item.url}` === activeId}
        />
      ))}
    </div>
  );
}

export default DashboardSidebar;
