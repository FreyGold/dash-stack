"use client";
import { ConfigProvider } from "antd";
import React, { type ReactNode } from "react";
import { darkConfig, lightConfig } from "../constants/ANT_CONFIG";
import { useDarkLight } from "./DarkLightProvider";

import arEG from "antd/locale/ar_EG";
import enUS from "antd/locale/en_US";
// const {useLocale}

type Props = {
   children: ReactNode;
   locale: string;
};

const AntDProvider: React.FC<Props> = ({ children, locale }) => {
   const { IsDark } = useDarkLight();

   return (
      <ConfigProvider
         theme={IsDark ? darkConfig : lightConfig}
         locale={locale === "ar" ? arEG : enUS}>
         {children}
      </ConfigProvider>
   );
};

export default AntDProvider;
