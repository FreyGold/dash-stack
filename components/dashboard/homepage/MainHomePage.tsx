import TotalCard from "@/libs/charts/TotalCard";
import { GroupOutlined } from "@ant-design/icons";

function MainHomePage() {
   return (
      <div className="flex w-full h-full p-8 gap-6 bg-background flex-col">
         <h1 className="font-bold text-4xl tracking-tight">Dashboard</h1>
         <div className="gap-8 flex w-full">
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
         </div>
      </div>
   );
}

export default MainHomePage;
