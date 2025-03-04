import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./MessageBoard.module.scss";

const cx = classNames.bind(styles);

const MessageBoard = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <div className={cx("wrapper")}> 
      <h2 className={cx("title")}>Bảng Lời Nhắn</h2>
      <div className={cx("messageContainer")}>
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <p key={index} className={cx("message")}>{msg}</p>
          ))
        ) : (
          <p className={cx("emptyMessage")}>Chưa có lời nhắn nào.</p>
        )}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập lời nhắn..."
        className={cx("input")}
      />
      <button onClick={handleSendMessage} className={cx("button")}>Gửi</button>
    </div>
  );
};

export default MessageBoard;
