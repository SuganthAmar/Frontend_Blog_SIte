import "./Topbar.css" 
import { Link } from "react-router-dom"

export default function Topbar() {
  const user=true;
  return (
    <div className='top'>
        <div className="topLeft">
        <i className="toplisticon fa-brands fa-square-facebook"></i>
        <i className="toplisticon fa-brands fa-linkedin"></i>
        <i className="toplisticon fa-brands fa-square-instagram"></i>
        <i className="toplisticon fa-brands fa-discord"></i>
        </div>
        <div className="topCenter"><ul className="toplist">
            <li className="toplistitem">
              <Link to="/" className="link">HOME</Link>
            </li>
            <li className="toplistitem"><Link to="/" className="link">ABOUT</Link></li>
            <li className="toplistitem"><Link to="/" className="link">CONTACT</Link></li> 
            <li className="toplistitem"><Link to="/write" className="link">{user && "WRITE"}</Link></li>
            <li className="toplistitem"><Link to="/login" className="link">{ user && "LOGOUT"}</Link></li>
            </ul>
            </div>
        <div className="topRight">
          {
            user ? (
              <Link to="/setting" className="link">
                    <img className="topimg" src="./src/component/components/profile.jpeg" alt="" />
            
                  </Link>
              
            ) : (
              <ul className="toplist">
                <li className="toplistitem">
                  <Link to="/login" className="link">
                    LOGIN
                  </Link>
              </li>
              <li className="toplistitem">
                <Link to="/register" className="link">
                  REGISTER
                  </Link>
              </li>
              </ul>
            )
          }
            <i className="topsearch fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
