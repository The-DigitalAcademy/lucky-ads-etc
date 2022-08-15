import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Art desgin</span>
                <span className="headerTitleLg">Project</span>
            </div>
            <img className="headerImg" src="https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
        </div>
    );
}

