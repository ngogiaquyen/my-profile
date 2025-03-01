import React, { useContext, useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Chat.module.scss";
import { SendIcon } from "../../assets/svg";
import { getData, postData } from "../../helper/apiService";
import { LoginContext } from "../Context/LoginProvider";

const cx = classNames.bind(styles);

function Chat({ receiverId = "", receiverName = "" }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const {loginStatus, setloginStatus} = useContext(LoginContext);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage(event);
    }
  };

  const fetchData = async () => {
    try {
      const data = await getData("/chat/read");
      console.log(data);
      if (data.status !== "error") setMessages(data);
    } catch (error) {
      console.error("Error get message: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loginStatus]);

  const sendMessage = async (event) => {
    event.preventDefault();
    if (input.trim()) {
      try {
        const formData = new FormData();
        
        // formData.append("sender_id", "1");
<<<<<<< HEAD
        formData.append("receiver_id", "1");
=======
<<<<<<< HEAD
        formData.append("receiver_id", "1");
=======
        formData.append("receiver_id", "2");
>>>>>>> ced8403 (chat backend)
>>>>>>> 4ba7f15 (chat backend)
        formData.append("message", input);
        
        const res = await postData("/chat/create", formData);
        setInput("");
        setMessages([...messages, input]);
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      } catch (error) {
        console.error("Error send message: ", error);
      }
    }
  };

  return (
    <div className={cx("conten")}>
      <div className={cx("head")}>
        <span className={cx("id")}>{receiverId}</span>
        <span className={cx("username")}>{receiverName}</span>
      </div>
      <div className={cx("chat")}>
        <div className={cx("chat__messages")}>
          {messages.map((message, index) => (
            <div key={index} className={cx("chat__message", "right")}>
              {message}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className={cx("chat__input")}>
          <div className={cx("input__box")}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Aa"
              type="text"
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className={cx("submit")} onClick={sendMessage}>
            <SendIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
