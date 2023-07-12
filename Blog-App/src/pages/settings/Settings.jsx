import Sidebar from "../../component/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="./src/pages/settings/profile.jpeg" alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-sharp fa-solid fa-user-secret"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Suganth" />
                <label>Email</label>
                <input type="email" placeholder="asuganth2003@gmail.com"/>
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
            <Sidebar />   
        </div>

  );
}
