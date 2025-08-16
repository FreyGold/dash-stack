"use client";
import React, { useEffect, type ReactNode } from "react";
import AntDProvider from "./AntDProvider";
import { DarkLightProvider, useDarkLight } from "./DarkLightProvider";
import { themeColors } from "../constants/COLORS";
import ReactQueryProvider from "./ReactQueryProvider";
import { SidebarProvider } from "./SidebarContext";
import { AntdRegistry } from "@ant-design/nextjs-registry";

type Props = {
   children: ReactNode;
   locale: string;
};

const SetCSSVariables = () => {
   const { IsDark } = useDarkLight();

   // Set CSS variables on theme changes (initial variables already set by inline script)
   useEffect(() => {
      const root = document.documentElement;
      const theme = IsDark ? themeColors.darkTheme : themeColors.lightTheme;

      // Update CSS variables when theme changes
      Object.entries(theme).forEach(([key, value]) => {
         root.style.setProperty(`--c-${key}`, value);
      });
   }, [IsDark]);

   return null;
};

const UiProvider: React.FC<Props> = ({
   children,
   locale,
}: {
   children: ReactNode;
   locale: string;
}) => {
   return (
      <DarkLightProvider>
         <SetCSSVariables />
         <AntdRegistry>
            <AntDProvider locale={locale} suppressHydrationWarning={true}>
               <ReactQueryProvider>
                  <SidebarProvider>{children}</SidebarProvider>
               </ReactQueryProvider>
            </AntDProvider>
         </AntdRegistry>
      </DarkLightProvider>
   );
};

export default UiProvider;
