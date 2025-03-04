import classNames from "classnames/bind";
import styles from "./HeaderOnly.module.scss";

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
  return <div className={cx("wrapper")}>{children}</div>;
}

export default HeaderOnly;
