import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFydCUyMGRlc2lnbiUyMGFib3V0JTIwbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60ß" alt="" />
        <p>
        Lorem Ipsum is simply dummy text of the printing and 
        
        software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">CATEGORIES</span>
    <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>
    </ul>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">FOLLOW US</span>
    <div className="sidebarSocial">
    <i className="sidebarIcon fa-brands fa-facebook"></i>
    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
    <i className="sidebarIcon fa-brands fa-pinterest"></i>
    </div>
    </div>
    </div>
  )
}
