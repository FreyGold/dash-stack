"use client";
import DealsDetails from "./dealsDetails/DealsDetails";
import AreaChartComponent from "@/libs/charts/AreaChart";
import { AreaChartData, StackedChartData } from "@/libs/charts/data";
import StackedChartComponent from "@/libs/charts/StackedAreaChart";

import TotalCard from "./totalCard/TotalCard";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

function MainHomePage() {
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth < 920);
      };

      handleResize();

      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   const t = useTranslations("dashboard");

   const totalCard = t.raw("sections.totalCard");

   return (
      <main className="flex w-full h-full p-8 gap-7 bg-background flex-col">
         <h1 className="font-bold text-4xl tracking-tight">{t("title")}</h1>
         <section className="gap-8 flex w-full md:flex-nowrap flex-wrap">
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
         {/* <section className="mt-9">
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
         </section> */}
      </main>
   );
}

export default MainHomePage;
