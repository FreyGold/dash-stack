import {
   Archive,
   AxeIcon,
   Calendar1,
   CheckSquare,
   DollarSign,
   FileText,
   Grid3X3,
   Heart,
   Inbox,
   LayoutDashboard,
   List,
   LogOut,
   Package,
   PiIcon,
   Settings,
   Table,
   UserCheck,
   Users,
} from "lucide-react";

export const dashboardItems = [
   {
      id: "dashboard",
      icon: <LayoutDashboard width={22} height={25} />,
      title: "Dashboard",
   },
   {
      id: "products",
      icon: <Package width={22} height={25} />,
      title: "Products",
   },
   {
      id: "favorites",
      icon: <Heart width={22} height={25} />,
      title: "Favorites",
   },
   {
      id: "inbox",
      icon: <Inbox width={22} height={25} />,
      title: "Inbox",
   },
   {
      id: "files",
      icon: <List width={22} height={25} />,
      title: "Files",
   },
   {
      id: "product-stock",
      icon: <Archive width={22} height={25} />,
      title: "Product Stock",
   },
];
export const pagesItems = [
   {
      id: "pricing",
      icon: <DollarSign width={22} height={25} />,
      title: "Pricing",
   },
   {
      id: "calendar",
      icon: <Calendar1 width={22} height={25} />,
      title: "Calendar",
   },
   {
      id: "todo",
      icon: <CheckSquare width={22} height={25} />,
      title: "To-Do",
   },
   {
      id: "contact",
      icon: <Users width={22} height={25} />,
      title: "Contact",
   },
   {
      id: "invoice",
      icon: <FileText width={22} height={25} />,
      title: "Invoice",
   },
   {
      id: "ui-elements",
      icon: <Grid3X3 width={22} height={25} />,
      title: "UI Elements",
   },
   {
      id: "team",
      icon: <UserCheck width={22} height={25} />,
      title: "Team",
   },
   {
      id: "table",
      icon: <Table width={22} height={25} />,
      title: "Table",
   },
];

export const settingsItems = [
   {
      id: "settings",
      icon: <Settings width={22} height={25} />,
      title: "Settings",
   },
   {
      id: "logout",
      icon: <LogOut width={22} height={25} />,
      title: "Logout",
   },
];
