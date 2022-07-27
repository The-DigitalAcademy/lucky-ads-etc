import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img
            className="topImg" 
            src="https://media.istockphoto.com/photos/contemporary-art-collage-with-human-hands-in-a-surreal-style-concept-picture-id1337598255?b=1&k=20&m=1337598255&s=170667a&w=0&h=T4P3GYdgG34lZ0Wp3hfogvD_yqoGNBMwPZzvHL5Sll0=" alt="" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        </div>
    );
}

