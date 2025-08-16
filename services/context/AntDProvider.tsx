"use client";
import { ConfigProvider } from "antd";
import React, { type ReactNode, useEffect } from "react";
import { darkConfig, lightConfig } from "../constants/ANT_CONFIG";
import { useDarkLight } from "./DarkLightProvider";

import arEG from "antd/locale/ar_EG";
import enUS from "antd/locale/en_US";

type Props = {
   children: ReactNode;
   locale: string;
   suppressHydrationWarning?: boolean;
};

const AntDProvider: React.FC<Props> = ({
   children,
   locale,
   suppressHydrationWarning = true,
}) => {
   const { IsDark } = useDarkLight();

   const currentTheme = IsDark ? darkConfig : lightConfig;
   const currentLocale = locale === "ar" ? arEG : enUS;

   return (
      <div suppressHydrationWarning={suppressHydrationWarning}>
         <ConfigProvider theme={currentTheme} locale={currentLocale}>
            {children}
         </ConfigProvider>
      </div>
   );
};

export default AntDProvider;
