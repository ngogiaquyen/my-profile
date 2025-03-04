import classNames from "classnames/bind";
import styles from "./HeaderOnly.module.scss";
import { useContext, useEffect } from "react";
import { NavbarScrollContext } from "~/component/Context/NavbarScrollProvider";
import NavBar from "~/component/NavBar";
import { ScrolledPastContext } from "~/component/Context/ScrolledPastProvder";

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {

  // const {refNav} = useContext(NavbarScrollContext);

  // const mergedRef = useMergedRef(ref, refNav);
  const { bottomCompRef } = useContext(ScrolledPastContext);

  return (
    <div className={cx("wrapper")}>
      <NavBar />
      <div className={cx("container")} ref={bottomCompRef}>{children}</div>
    </div>
  );
}

export default HeaderOnly;
