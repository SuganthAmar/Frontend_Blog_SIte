import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">
                ABOUT ME
            </span>
            <img className="img" src="./src/component/sidebar/suganthold.jpeg" alt="" />
            <p>As a developer interested in space, there are many fascinating topics that you may find interesting. Here are a few ideas:</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">
                 CATEGORIES
            </span>
            <ul className="sidebarList">
                <li className="sidebarlistItem">Life</li>
                <li className="sidebarlistItem">Mystery</li>
                <li className="sidebarlistItem">Style</li>
                <li className="sidebarlistItem">Space</li>
                <li className="sidebarlistItem">Tech</li>
                <li className="sidebarlistItem">Science</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            <i className="sidebarIcon fa-brands fa-discord"></i>
        
            </div>
        </div>
        </div>
        )
}
        {/* <div className="side">
            <h1 id="abt">ABOUT</h1>
            <img id="img" src="./src/sidebar/suganthold.jpeg" alt="" />
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit ipsam est quia nisi alias! Laudantium veniam minus temporibus nemo cumque voluptate quaerat magni, ad eveniet dolores deserunt sed aliquid!</h3>
            <h1 id='abt'>CATEGORIES</h1>
            <ul id='abt'>
                <li>fa</li>
                <li>daf</li>
                <li>fafd</li>
                <li>ffa</li>
                <li>rewrqw</li>
                <li>xcvzv</li>
            </ul>
            <h1 id='abt'>FOLLOW US</h1>
            <div className="icons"><i className="sidebaricon fa-brands fa-square-facebook"></i>
            <i className="sidebaricon fa-brands fa-linkedin"></i>
            <i className="sidebaricon fa-brands fa-square-instagram"></i>
            <i className="sidebaricon fa-brands fa-discord"></i></div>
        </div>
  </div> */}
 

