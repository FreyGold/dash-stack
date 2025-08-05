import DashboardHeader from "./components/DashboardHeader";
import DashboardSidebar from "./components/DashboardSidebar";

function Layout({ children }: { children: React.ReactNode }) {
   return (
      <div className="w-screen h-screen flex font-nunito">
         <DashboardSidebar />
         <div className="flex flex-col w-full h-full">
            <DashboardHeader />
            <div className="flex-1">{children}</div>
         </div>
      </div>
   );
}

export default Layout;
