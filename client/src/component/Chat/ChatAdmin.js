import classNames from "classnames/bind";
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./Chat.module.scss";
import { getData, postData } from "~/helper/apiService";
import ChatBubble from "../ChatBubble";
import Chat from "./Chat";

const cx = classNames.bind(styles);

function ChatAdmin() {
  const [messages, setMessages] = useState([]);
  const [usernames, setUsernames] = useState([]);
  const [receiverId, setReceiverId] = useState(null);
  const [receiverName, setReceiverName] = useState(null);


  const readUser = async () => {
    try {
      const data = await getData("/user/read");
      console.log(data);
      setUsernames(data);
    } catch (error) {
      console.error("Error get message: ", error);
    }
  };

  const fetchData = async () => {
    try {
      const data = await getData("/chat/read");
      console.log(data);
      setMessages(data);
    } catch (error) {
      console.error("Error get message: ", error);
    }
  };

  useEffect(() => {
    readUser();
    fetchData();
  }, []);


  const handleClickBubble = (user) => {
    console.log("id: ", user.id);
    setReceiverId(user.id);
    setReceiverName(user.username);
  };
  return (
    <div className={cx("chat-admin")}>
      <div className={cx("bubblle-list")}>
        {usernames.map((user, index) => (
          <ChatBubble
            key={index}
            user={user}
            onClick={() => handleClickBubble(user)}
          />
        ))}
      </div>
      <Chat
        receiverId={receiverId}
        receiverName={receiverName}
      />
    </div>
  );
}

export default ChatAdmin;
