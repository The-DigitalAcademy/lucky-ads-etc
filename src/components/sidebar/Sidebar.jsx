import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://images.pexels.com/photos/7429230/pexels-photo-7429230.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <p>
                    “I'm part of the design team at [company name]”
                    “I'm one ofthe designers working on [project name]”
                    “I'm a designer working on the [feature name] for [product name]”
                    “I'm responsible for the design side of things in this project we're discussing today”
                    </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Sport</li>
  
                </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon  fab fa-instagram-square"></i>
                <i className="sidebarIcon fa-brands fa-pinterest"></i>
            </div>
            </div>
        </div>
    );
}
