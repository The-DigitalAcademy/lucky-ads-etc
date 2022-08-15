import "./post.css";

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?cs=srgb&dl=pexels-rudolf-jakkel-418831.jpg&fm=jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Border</span>
                    <span className="postCat">Art studio</span>
                </div>
                <span className="postTitle">Internationally acclaimed art critic, curator, activist and writer, who is among the first authors who wrote about dematerialization of an artwork in conceptual art.</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
                
            </div>
        </div>
    );
}
