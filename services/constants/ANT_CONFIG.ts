"use client";
import { theme, type ThemeConfig } from "antd";
import { themeColors } from "./COLORS";

export const lightConfig: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: themeColors.lightTheme.primary,
  },
};

export const darkConfig: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: themeColors.darkTheme.primary,
  },
};
