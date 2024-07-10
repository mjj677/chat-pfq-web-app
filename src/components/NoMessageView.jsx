import logo from "/logo.png"

export const NoMessageView = () => {

  return(
    <div className="no-message-container">
        <div className="no-message-box">

        <h1 className="no-message-text">Welcome to</h1>
        <img src={logo} style={{width: '300px'}}/>
        <h1 className="no-message-text">Please click a message to view messages</h1>
        </div>
    </div>
    
  )
}