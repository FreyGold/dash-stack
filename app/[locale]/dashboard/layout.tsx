import LayoutDashboard from "@/components/layouts/dashboard/LayoutDashboard";

async function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutDashboard>{children}</LayoutDashboard>;
}

export default Layout;
