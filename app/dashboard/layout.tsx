import { DashboardHeader } from "@/components/layouts";
import { DashboardSidebar } from "@/components/layouts/";

function Layout({ children }: { children: React.ReactNode }) {
   return (
      <div className="w-screen h-screen flex font-nunito">
         <DashboardSidebar />
         <div className="flex flex-col w-full h-full">
            <DashboardHeader />
            <div className="flex-1 border-t border-l border-border">
               {children}
            </div>
         </div>
      </div>
   );
}

export default Layout;
