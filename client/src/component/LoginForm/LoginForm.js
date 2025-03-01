import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import styles from "./LoginForm.module.scss";
import { postData } from "../../helper/apiService";
import { ModalOverLayContext } from "../Context/ModalOverLayProvider";
import { LoginContext } from "../Context/LoginProvider";
const cx = classNames.bind(styles);

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setModalComponentContent } = useContext(ModalOverLayContext);
  const { loginStatus, setloginStatus } = useContext(LoginContext);

  const loginFetch = async () => {
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      const res = await postData("/user/login", formData);
      console.log(res);
      if (res.status === "success") {
        setModalComponentContent(null);
        setloginStatus(res.user_id);
      }
    } catch (error) {
      console.error("Error Login", error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Đăng nhập với:", { username, password });

    loginFetch();
  };

  return (
    <div className={cx("container")}>
      <form className={cx("loginForm")} onSubmit={handleLogin}>
        <h2 className={cx("title")}>Đăng Nhập</h2>

        <div className={cx("inputGroup")}>
          <input
            type="text"
            placeholder="Tài khoản"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={cx("input")}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <button type="submit" className={styles.button}>
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
