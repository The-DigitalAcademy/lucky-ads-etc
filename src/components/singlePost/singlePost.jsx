import { Link } from "react-router-dom";

import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
    
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.unsplash.com/photo-1606819717115-9159c900370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
        />
        <h1 className="singlePostTitle">
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
           
            <b className="singlePostAuthor">
              <h1>The arts</h1>
            </b>
          </span>
          <span></span>
        </div>
        <p className="singlePostDesc">
        Traditional categories within the arts include literature (including poetry, 
        drama, story, and so on), the visual arts (painting, drawing, sculpture, etc.), 
        the graphic arts (painting, drawing, design, and other forms expressed on flat surfaces), 
        the plastic arts (sculpture, modeling), the decorative arts (enamelwork, ...
          <br />
          <br />
          
        </p>
      </div>
    </div>
  );
}

