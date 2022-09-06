import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
        />
        <p>
        Why do you make this kind of art? Whether it’s a certain medium or technique you love using, 
        or why you chose the human figure over landscapes, 
        tell your audience! People came to your page for a reason–they love your artwork. 
        Make them fall in love even more by sharing why you are excited about your work, too.
        </p>
      </div>
      <div className="sidebarItem">
        <div className="sidebarSocial">
          
        </div>
      </div>
    </div>
  );
}
