import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
          <Link to="/post/Abc" className="/posts?title">
          <button onClick={img}>art</button>
          </Link>
        </span>
        <hr />
        <span className="postDate">Advertised</span>
      </div>
      <p className="postDesc/">
        And so I set my mind to wonder eternal a land i thought a dream.
      </p>
    </div>
    
  );
}
