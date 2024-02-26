import { Colors, ThemeConfig, extendTheme } from "@chakra-ui/react";

export const colors: Colors = {
  primary: {
    50: "#fff6f6",
    100: "#ffe0e0",
    200: "#ffb3b3",
    300: "#ff8080",
    400: "#ff4d4d",
    500: "#ff1a1a", // Coral
    600: "#e60000",
    700: "#b30000",
    800: "#800000",
    900: "#4d0000",
  },
  secondary: {
    50: "#f2f2f2",
    100: "#d9d9d9",
    200: "#bfbfbf",
    300: "#a6a6a6",
    400: "#8c8c8c",
    500: "#737373", // Steel Blue
    600: "#595959",
    700: "#404040",
    800: "#262626",
    900: "#0d0d0d",
  },
  light: {
    50: "#F9FAFB", // Lightest
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280", // Light Gray (Default Text)
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827", // Darkest
  },
  dark: {
    50: "#F9FAFB", // Lightest
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280", // Light Gray (Default Text)
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827", // Darkest
  },
  purple: {
    50: "#f0e6fa",
    100: "#d0b7f2",
    200: "#af87e2",
    300: "#9b6ecf",
    400: "#8a52c4",
    500: "#800080", // Purple
    600: "#6a007f",
    700: "#50006e",
    800: "#36005e",
    900: "#1f004e",
  },
  error: {
    50: "#ffe6e6",
    100: "#ff9999",
    200: "#ff6666",
    300: "#ff3333",
    400: "#ff0000", // Red
    500: "#e60000",
    600: "#cc0000",
    700: "#b30000",
    800: "#990000",
    900: "#800000",
  },
  success: {
    50: "#e6ffe6",
    100: "#99ff99",
    200: "#66ff66",
    300: "#33ff33",
    400: "#00ff00", // Green
    500: "#00e600",
    600: "#00cc00",
    700: "#00b300",
    800: "#009900",
    900: "#008000",
  },
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  colors,
  config,
});

export default customTheme;
