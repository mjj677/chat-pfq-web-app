import logo from "/logo.png"
import darkLogo from "/full-dark-mode.png"
import { useTheme } from "../ThemeContext";

export const NoMessageView = () => {
  const { darkMode } = useTheme();


  return(
    <div className="no-message-container">
        <div className="no-message-box">

        <h1 className="no-message-text">Welcome to</h1>
        <img src={darkMode ? darkLogo : logo} style={{width: '300px'}}/>
        <h1 className="no-message-text">Please click a message to view messages</h1>
        </div>
    </div>
    
  )
}