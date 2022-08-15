import "./topbar.css";
import { Link } from "react-router-dom";

export default function TopBar() {
    return (
        <div className="top">
            {/* <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                
            </div> */}
            <div className="topCenter">
                <ul className="topList">
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/contact">CONTACT</Link>
                    <Link to="/logout">LOGOUT</Link>

                  
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src="https://avatars.githubusercontent.com/u/57522837?s=96&v=4" alt=""/>
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}

