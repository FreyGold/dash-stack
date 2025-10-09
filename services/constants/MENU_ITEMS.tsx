import {
   Archive,
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
      url: "dashboard",
      disabled: false,
   },
   {
      id: "products",
      icon: <Package width={22} height={25} />,
      title: "Products",
      url: "dashboard/products",
      disabled: true,
   },
   {
      id: "favorites",
      icon: <Heart width={22} height={25} />,
      title: "Favorites",
      url: "dashboard/favorites",
      disabled: true,
   },
   {
      id: "inbox",
      icon: <Inbox width={22} height={25} />,
      title: "Inbox",
      url: "dashboard/inbox",
      disabled: true,
   },
   {
      id: "files",
      icon: <List width={22} height={25} />,
      title: "Files",
      url: "dashboard/files",
      disabled: false,
   },
   {
      id: "product-stock",
      icon: <Archive width={22} height={25} />,
      title: "Product Stock",
      url: "dashboard/product-stock",
      disabled: true,
   },
];

export const pagesItems = [
   {
      id: "pricing",
      icon: <DollarSign width={22} height={25} />,
      title: "Pricing",
      url: "dashboard/pricing",
      disabled: true,
   },
   {
      id: "calendar",
      icon: <Calendar1 width={22} height={25} />,
      title: "Calendar",
      url: "dashboard/calendar",
      disabled: true,
   },
   {
      id: "todo",
      icon: <CheckSquare width={22} height={25} />,
      title: "To-Do",
      url: "dashboard/todo",
      disabled: true,
   },
   {
      id: "contact",
      icon: <Users width={22} height={25} />,
      title: "Contact",
      url: "dashboard/contact",
      disabled: true,
   },
   {
      id: "invoice",
      icon: <FileText width={22} height={25} />,
      title: "Invoice",
      url: "dashboard/invoice",
      disabled: true,
   },
   {
      id: "ui-elements",
      icon: <Grid3X3 width={22} height={25} />,
      title: "UI Elements",
      url: "dashboard/ui-elements",
      disabled: true,
   },
   {
      id: "team",
      icon: <UserCheck width={22} height={25} />,
      title: "Team",
      url: "dashboard/team",
      disabled: true,
   },
   {
      id: "table",
      icon: <Table width={22} height={25} />,
      title: "Table",
      url: "dashboard/table",
      disabled: true,
   },
];

export const settingsItems = [
   {
      id: "settings",
      icon: <Settings width={22} height={25} />,
      title: "Settings",
      url: "dashboard/settings",
      disabled: true,
   },
   {
      id: "logout",
      icon: <LogOut width={22} height={25} />,
      title: "Logout",
      url: "dashboard/logout",
      disabled: false,
   },
];
