import React from 'react'
import "./post.css" 

function Post() {
  return (
<div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="assets/1.jpg"
              alt=""
            />
            <span className="postUsername">
              Anurag Nayak
            </span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
          <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Heyy this is Anurag</span>
          <img className="postImg" src="assets/1.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/comment.png" alt="" />
            <span className="postLikeCounter">69 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">5 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;
