import { useState } from "react";
import { useTheme } from "../ThemeContext";


export const Sidebar = ({ setUsername, showDashboard, setShowDashboard }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { darkMode, setDarkMode } = useTheme();


  const handleLogout = (e) => {
    setUsername("");
  };

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        padding: "0",
        margin: "0",
      }}
    >
      <div>
        <img src="/just-logo.png" width="100%" />
      </div>
      <div>
        <img
          src="/dashboard-icon.png"
          className="dashboard-button"
          onClick={() => setShowDashboard(!showDashboard)}
        />
      </div>
      <div style={{ flexGrow: 1 }}></div>
      <div id='dark-mode-button-container'>
        <img
        onClick={toggleTheme}
          src={darkMode? "/sun-icon.png" : "/moon-icon.png" }
          className="theme-toggle-button"

        />

      </div>
      <div>
        <button onClick={handleLogout} className="animated-button">
          <img
            src={
              isHovered
                ? "/Bootstrap-Bootstrap-Bootstrap-door-open.512.png"
                : "/Bootstrap-Bootstrap-Bootstrap-door-closed.512.png"
            }
            alt="Logout"
            className="button-image"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </button>
      </div>
    </div>
  );
};
