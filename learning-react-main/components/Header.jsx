import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const [isDark, setIsDark] = useTheme();
  return (
    <header id="header_section" className={`${isDark ? "dark-mode" : ""}`}>
      <div className="header-content">
        <h1>
          <Link to="/">Where in the world?</Link>
        </h1>
        <div
          className="icon-container"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDark", !isDark);
          }}
        >
          <i className={`fa-solid ${isDark ? "fa-sun" : "fa-moon"}`} />
          <span className="theme-text">{`${
            isDark ? "Light Mode" : "Dark Mode"
          }`}</span>
        </div>
      </div>
    </header>
  );
}
