import DealsDetails from "./dealsDetails/DealsDetails";
import AreaChartComponent from "./../../../libs/charts/AreaChart";
import { AreaChartData, StackedChartData } from "@/libs/charts/data";
import StackedChartComponent from "@/libs/charts/StackedAreaChart";
import TotalCard from "./totalCard/TotalCard";
function MainHomePage() {
  return (
    <main className=" mx-auto px-4 py-8 container">
      <h1 className="text-3xl font-bold pb-6">Dashboard</h1>
      <section className="flex justify-between gap-8">
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
          icon={0}
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
