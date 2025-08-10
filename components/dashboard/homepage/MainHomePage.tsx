import DealsDetails from "./dealsDetails/DealsDetails";
import AreaChartComponent from "./../../../libs/charts/AreaChart";
import { AreaChartData, StackedChartData } from "@/libs/charts/data";
import StackedChartComponent from "@/libs/charts/StackedAreaChart";
import TotalCard from "./totalCard/TotalCard";
function MainHomePage() {
   return (
      <main className="flex w-full h-full p-8 gap-7 bg-background flex-col">
         <h1 className="font-bold text-4xl tracking-tight">Dashboard</h1>
         <section className="gap-8 flex w-full">
            <TotalCard
               title="Total User"
               value={40689}
               icon={<GroupOutlined size={24} />}
               iconColor="purple-opacity"
               trend="Up from yesterday"
               trendIcon={true}
               trendColor="success"
               trendValue={8.5}
            />
            <TotalCard
               title="Total User"
               value={40689}
               icon={<GroupOutlined size={24} />}
               iconColor="purple-opacity"
               trend="Up from yesterday"
               trendIcon={true}
               trendColor="success"
               trendValue={8.5}
            />
            <TotalCard
               title="Total User"
               value={40689}
               icon={<GroupOutlined size={24} />}
               iconColor="purple-opacity"
               trend="Up from yesterday"
               trendIcon={true}
               trendColor="success"
               trendValue={8.5}
            />
            <TotalCard
               title="Total User"
               value={40689}
               icon={<GroupOutlined size={24} />}
               iconColor="purple-opacity"
               trend="Up from yesterday"
               trendIcon={true}
               trendColor="success"
               trendValue={8.5}
            />
         </section>
         {/* <section className="mt-9">
            <AreaChartComponent chartData={AreaChartData} />
         </section>
         <section className="mt-9">
            <DealsDetails />
         </section>
         <section className="mt-9">
            <StackedChartComponent chartData={StackedChartData} /> */}
         {/* </section> */}
      </main>
   );
}

export default MainHomePage;
