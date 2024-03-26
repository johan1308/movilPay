import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useThemeMovilPay = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe ser usado dentro de un ThemeProvider");
  }
  return context;
};
