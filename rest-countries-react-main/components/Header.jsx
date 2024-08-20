import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useTheme();
  return (
    <header id="header_section" className={`${isDarkMode ? "dark-mode" : ""}`}>
      <div className="header-content">
        <h1>
          <Link to="/">Where in the world?</Link>
        </h1>
        <div
          className="icon-container"
          onClick={() => {
            setIsDarkMode(!isDarkMode);
            localStorage.setItem("theme", !isDarkMode);
          }}
        >
          <i className={`fa-solid fa-${isDarkMode ? "sun" : "moon"}`}></i>
          <span className="theme-text">
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </span>
        </div>
      </div>
    </header>
  );
}
