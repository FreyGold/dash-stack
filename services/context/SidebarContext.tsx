import React, { createContext, useState, useContext, ReactNode } from "react";

interface SidebarContextType {
   activeId: string;
   setActiveId: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

interface SidebarProviderProps {
   children: ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
   children,
}) => {
   const [activeId, setActiveId] = useState("dashboard");

   return (
      <SidebarContext.Provider value={{ activeId, setActiveId }}>
         {children}
      </SidebarContext.Provider>
   );
};

export const useSidebar = () => {
   const context = useContext(SidebarContext);
   if (context === undefined) {
      throw new Error("useSidebar must be used within a SidebarProvider");
   }
   return context;
};
