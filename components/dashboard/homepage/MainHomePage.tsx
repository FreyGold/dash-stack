import DealsDetails from "./dealsDetails/DealsDetails";
import AreaChartComponent from "./../../../libs/charts/AreaChart";
import { AreaChartData, StackedChartData } from "@/libs/charts/data";
import StackedChartComponent from "@/libs/charts/StackedAreaChart";

import TotalCard from "./totalCard/TotalCard";
import { useTranslations } from "next-intl";

function MainHomePage() {
  const t = useTranslations("dashboard");

  const totalCard = t.raw("sections.totalCard");

  return (
    <main className="mx-auto px-4 py-8 container">
      <h1 className="text-3xl font-bold pb-6">{t("title")}</h1>
      <section className="flex justify-between gap-8">
        <TotalCard
          title={totalCard.title}
          value={totalCard.value}
          icon={totalCard.icon}
          iconColor={totalCard.iconColor}
          trend={totalCard.trend}
          isTrending={totalCard.isTrending}
          trendColor={totalCard.trendColor}
          trendValue={totalCard.trendValue}
        />
        <TotalCard
          title={totalCard.title}
          value={totalCard.value}
          icon={totalCard.icon}
          iconColor={totalCard.iconColor}
          trend={totalCard.trend}
          isTrending={totalCard.isTrending}
          trendColor={totalCard.trendColor}
          trendValue={totalCard.trendValue}
        />
        <TotalCard
          title={totalCard.title}
          value={totalCard.value}
          icon={totalCard.icon}
          iconColor={totalCard.iconColor}
          trend={totalCard.trend}
          isTrending={totalCard.isTrending}
          trendColor={totalCard.trendColor}
          trendValue={totalCard.trendValue}
        />
        <TotalCard
          title={totalCard.title}
          value={totalCard.value}
          icon={totalCard.icon}
          iconColor={totalCard.iconColor}
          trend={totalCard.trend}
          isTrending={totalCard.isTrending}
          trendColor={totalCard.trendColor}
          trendValue={totalCard.trendValue}
        />
      </section>
      <section className="mt-9">
        <AreaChartComponent
          title={t("sections.salesDetails.title")}
          chartData={AreaChartData}
        />
      </section>
      <section className="mt-9">
        <DealsDetails title={t("sections.dealsDetails.title")} />
      </section>
      <section className="mt-9">
        <StackedChartComponent
          title={t("sections.revenue.title")}
          chartData={StackedChartData}
        />
      </section>
    </main>
  );
}

export default MainHomePage;
