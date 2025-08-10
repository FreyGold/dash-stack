import DealsDetails from "./dealsDetails/DealsDetails";
import AreaChartComponent from "./../../../libs/charts/AreaChart";
import { AreaChartData, StackedChartData } from "@/libs/charts/data";
import StackedChartComponent from "@/libs/charts/StackedAreaChart";
import { GroupOutlined } from "@ant-design/icons";
import TotalCard from "@/libs/charts/TotalCard";
function MainHomePage() {
   return (
      <main className="flex w-full h-full p-8 gap-7 bg-background flex-col">
         <h1 className="font-bold text-4xl tracking-tight">Dashboard</h1>
         <section className="gap-8 flex w-full">
            <TotalCard
               title="Total User"
               value={40689}
               icon={0}
               iconColor="success"
               trend=" Up from yesterday"
               isTrending={true}
               trendColor="success"
               trendValue={8.5}
            />
            <TotalCard
               title="Total User"
               value={40689}
               icon={1}
               iconColor="success"
               trend=" Up from yesterday"
               isTrending={true}
               trendColor="success"
               trendValue={8.5}
            />
            <TotalCard
               title="Total User"
               value={40689}
               icon={2}
               iconColor="success"
               trend=" Up from yesterday"
               isTrending={true}
               trendColor="success"
               trendValue={8.5}
            />
            <TotalCard
               title="Total User"
               value={40689}
               icon={3}
               iconColor="success"
               trend=" Up from yesterday"
               isTrending={true}
               trendColor="success"
               trendValue={8.5}
            />
         </section>
         <section className="mt-9">
            <AreaChartComponent chartData={AreaChartData} />
         </section>
         <section className="mt-9">
            <DealsDetails />
         </section>
         <section className="mt-9">
            <StackedChartComponent chartData={StackedChartData} />
         </section>
      </main>
   );
}

export default MainHomePage;
