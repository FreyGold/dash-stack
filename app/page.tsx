import group from "../assets/Group.svg";
import TotalCard from "../components/dashboard/homepage/totalCard/TotalCard";

export default function Home() {
   return (
      <>
         <TotalCard
            title="Total User"
            value={40689}
            icon={group}
            iconColor="purple-opacity"
            trend="Up from yesterday"
            trendIcon={true}
            trendColor="success"
            trendValue={8.5}
         />
      </>
   );
}
