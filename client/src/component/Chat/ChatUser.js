import classNames from "classnames/bind";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Chat.module.scss";
import { getData, postData } from "~/helper/apiService";
import Chat from "./Chat";

const cx = classNames.bind(styles);

function ChatAdmin() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const [usernames, setUsernames] = useState([]);

  const readUser = async () => {
    try {
      const data = await getData("/user/read");
      setUsernames(data);
    } catch (error) {
      console.error("Error get message: ", error);
    }
  };

  const fetchData = async () => {
    try {
      const data = await getData("/chat/read");
      setMessages(data);
    } catch (error) {
      console.error("Error get message: ", error);
    }
  };

  useEffect(() => {
    readUser();
    fetchData();
  }, []);

  const sendMessage = async (event) => {
    event.preventDefault();
    if (input.trim()) {
      try {
        const formData = new FormData();

        // formData.append("sender_id", "1");
        formData.append("receiver_id", "2");
        formData.append("message", input);

        const res = await postData("/chat/create", formData);
        setMessages([...messages, input]);
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      } catch (error) {
        console.error("Error send message: ", error);
      }
      setInput("");
    }
  };

  return (
    <div className={cx("chat-user")}>
      <Chat/>
    </div>
  );
}

export default ChatAdmin;
