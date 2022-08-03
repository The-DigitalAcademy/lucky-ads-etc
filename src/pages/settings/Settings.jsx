import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Setting() {
  return (
    <div className="settings">
    <div className="settingsWrapper">
      <div className="settingsTitle">
           <span className="settingsUpdateTitle">Update Your Account</span>
           <span className="settingsUpdateTitle">Delete Account</span>
      </div>
      <form action="" className="settingsFrom">
        <label>Profile Picture</label>
        <div className="settngsPP">
          <img src="https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFydCUyMGRlc2lnbiUyMGFib3V0JTIwbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60" 
          alt="" />
          <label htmlFor="fileInput">
          <i className="settingsPPIcon fa-solid fa-circle-user"></i>
          </label>
          <input type="file" id="fineInput" style={{display:"none"}}/>
        </div>
        <label>Username</label>
        <input type="text" placeholder="Safak" />
        <label>Email</label>
        <input type="email" placeholder="safak@gmail.com" />
        <label>Password</label>
        <input type="password" />
        <button className="settingSubmit">Update</button>
      </form>
    </div>
    <Sidebar />.
    </div>
  )
}
