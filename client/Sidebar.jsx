import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
      <ul className="sidebarList">
        <li className="sidebarListItem">
        <i class="fa-solid fa-rss sidebarIcon"></i>
          <span className="sidebarListItemText">Feed</span>
        </li>
        <li className="sidebarListItem">
        <i class="fa-solid fa-message sidebarIcon"></i>
          <span className="sidebarListItemText">Chats</span>
        </li>
        <li className="sidebarListItem">
        <i class="fa-solid fa-video sidebarIcon"></i>
          <span className="sidebarListItemText">Videos</span>
        </li>
        <li className="sidebarListItem">
        <i class="fa-solid fa-user-group sidebarIcon"></i>
          <span className="sidebarListItemText">Groups</span>
        </li>
        <li className="sidebarListItem">
          <i class="fa-solid fa-bookmark sidebarIcon"></i>
          <span className="sidebarListItemText">Bookmarks</span>
        </li>
        <li className="sidebarListItem">
          <i class="fa-solid fa-question sidebarIcon"></i>
          <span className="sidebarListItemText">Questions</span>
        </li>
        <li className="sidebarListItem">
        <i class="fa-solid fa-calendar-days sidebarIcon"></i>
          <span className="sidebarListItemText">Events</span>
        </li>
      </ul>
      <button className="sidebarButton">Show More</button>
      <hr className="sidebarHr" />
      {/* <ul className="sidebarFriendList">
        {Users.map((u) => (
          <CloseFriend key={u.id} user={u} />
        ))}
        </ul> */ }
      <ul className="sidebarFriendList">
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/1.jpg" alt=""></img>
          <span className="sidebarFriendName">Anurag Nayak</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/1.jpg" alt=""></img>
          <span className="sidebarFriendName">Anurag Nayak</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/1.jpg" alt=""></img>
          <span className="sidebarFriendName">Anurag Nayak</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/1.jpg" alt=""></img>
          <span className="sidebarFriendName">Anurag Nayak</span>
        </li>
      </ul>
    </div>
  </div>
  );
}

export default Sidebar;