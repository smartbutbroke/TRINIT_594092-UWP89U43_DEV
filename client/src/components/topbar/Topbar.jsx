import React from "react";
import "./topbar.css";
function Topbar(){
    return <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Agri-Connect</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                <i class="fa-solid fa-magnifying-glass searchIcon" />
                <input className="searchInput" placeholder="Search for farmers or enthus" />                
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLink">
                    <span className="topbarLink">HomePage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem"><i class="fa-solid fa-user" />
                    <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem"><i class="fa-solid fa-message" />
                    <span className="topbarIconBadge">5</span>
                    </div>
                    <div className="topbarIconItem"><i class="fa-solid fa-bell" />
                    <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/1.jpg" alt="" className="topbarImg" />
            </div>
    </div>
}

export default Topbar;