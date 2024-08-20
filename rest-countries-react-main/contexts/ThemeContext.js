import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );

  return (
    <ThemeContext.Provider value={[isDarkMode, setIsDarkMode]}>
      {children}
    </ThemeContext.Provider>
  );
}
