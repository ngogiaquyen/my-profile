import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ChatBubble.module.scss"; // Sử dụng CSS Modules

const cx = classNames.bind(styles);

const ChatBubble = ({ user, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cx("chatBubble")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className={cx("avatar")}>
        {/* {user.avatar ? (
          <img src={user.avatar} alt={user.name} />
        ) : (
        )} */}
        <span className={cx("initial")}>{user.id}</span>
      </div>
      {isHovered && <div className={cx("userName")}>{user.username}</div>}
    </div>
  );
};

export default ChatBubble;
