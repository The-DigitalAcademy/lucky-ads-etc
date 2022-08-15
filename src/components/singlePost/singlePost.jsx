import "./single.css"

import React from 'react'

export default function singlePost() {
  return (
    <div className="singlePost">
      <div className="singlePostwrapper">
        <img src="" alt="" className="singlePostImg"/>
        <h1 className="singlePostTitle">
          React webiste.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-Edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
      </div>
    </div>
  
  )
}
