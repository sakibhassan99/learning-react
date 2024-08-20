import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useContext(ThemeContext);
  return [isDarkMode, setIsDarkMode];
};
