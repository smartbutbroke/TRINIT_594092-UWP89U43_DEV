import React from 'react'
import "./feed.css"
import Share from "../sharee/Share"
import Post from "../post/Post"
function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post /> 
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default Feed;
