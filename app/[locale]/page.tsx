// import TotalCard from "@/components/dashboard/homepage/totalCard/TotalCard";
// import group from "../assets/Group.svg";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("dashboard");

  return (
    <>
      {/* <TotalCard
        title="Total User"
        value={40689}
        icon={group}
        iconColor="purple-opacity"
        trend="Up from yesterday"
        trendIcon={true}
        trendColor="success"
        trendValue={8.5}
      /> */}
      <h1>{t("title")}</h1>
    </>
  );
}
