import { Link } from "react-router-dom";
import "./topbar.css";


export default function Topbar() {
  const user = true;
  return (
    
    <div className="top">
      <div className="topLeft">
        
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <Link className="link" to="/about">
              <li className="topListItem">ABOUT</li>
            </Link>
          
            <Link className="link" to="/contact">
              <li className="topListItem">CONTACT</li>
            </Link>
          

          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link> 
          </li>
          {user && <li className="topListItem">
          <Link className="link" to="/topListItem">
            
          </Link>
          </li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        
      </div>
    </div>
  );
}
