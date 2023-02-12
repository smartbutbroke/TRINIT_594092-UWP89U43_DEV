import React from 'react'
import "./share.css"
function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/1.jpg" alt="" />
          <input
            placeholder="Share your latest innovations!"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <i class="fa-solid fa-photo-film shareIcon"></i>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <i class="fa-solid fa-tag shareIcon"></i>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <i class="fa-solid fa-location-dot shareIcon"></i>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <i class="fa-solid fa-face-smile-wink shareIcon"></i>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}

export default Share;
