import { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../../helper/apiService";
import LoginForm from "../LoginForm";
import { ModalOverLayContext } from "./ModalOverLayProvider";

const LoginContext = createContext();

function LoginProvider({ children }) {
  const [loginStatus, setloginStatus] = useState(null);
  const { setModalComponentContent } = useContext(ModalOverLayContext);

  const checkLogin = async () => {
    try {
      const res = await getData("/login/check");
      console.log(res);
      if (res.is_login) {
        console.log("set status");
        setloginStatus(res.user_id);
      } else {
        setModalComponentContent(<LoginForm />);
      }
    } catch (error) {
      console.error("Error Login", error);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <LoginContext value={{ loginStatus, setloginStatus }}>
      {children}
    </LoginContext>
  );
}

export { LoginContext, LoginProvider };
