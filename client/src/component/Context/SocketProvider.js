import { createContext, useContext, useEffect, useState } from "react";
import { LoginContext } from "./LoginProvider";

const SocketContext = createContext();

function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const { loginStatus, setloginStatus } = useContext(LoginContext);

  useEffect(() => {
    // let socket = new WebSocket(`ws://localhost:8080?userId=${loginStatus}`);

    // socket.onmessage = function (event) {
    //   let data = JSON.parse(event.data);
    // };
    //   document.getElementById(
    //     "messages"
    //   ).innerHTML += `<p><b>${data.senderId}:</b> ${data.message}</p>`;
  }, [loginStatus]);

  function sendMessage() {
    // let data = JSON.stringify({
    //   senderId: userId,
    //   receiverId: receiverId,
    //   message: message,
    // });

    // socket.send(data);
  }

  return (
    <SocketContext value={{ socket, setSocket }}>{children}</SocketContext>
  );
}

export { SocketContext, SocketProvider };
