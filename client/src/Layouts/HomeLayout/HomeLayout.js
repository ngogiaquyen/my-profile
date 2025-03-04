import classNames from "classnames/bind";
import styles from "./HomeLayout.module.scss";
import NavBar from "~/component/NavBar";
import SocialProfile from "~/component/SocialProfile";
import { useContext, useEffect, useRef } from "react";
import { ScrolledPastContext } from "~/component/Context/ScrolledPastProvder";
import { NavbarScrollContext } from "~/component/Context/NavbarScrollProvider";

const cx = classNames.bind(styles);

function HomeLayout({ children }) {
  const { ref, scrolledPast, bound } = useContext(ScrolledPastContext);

  const {refNav} = useContext(NavbarScrollContext);

  // console.log(refNav);

  useEffect(()=>{
    refNav.current = ref.current;
    console.log(refNav)
  }, [])

  // const mergedRef = useMergedRef(ref, refNav);

  return (
    <div className={cx("wrapper")}>
      <SocialProfile />
      <NavBar ref={ref} bound={bound} />
      <div className={cx("container")}>{children}</div>
    </div>
  );
}

export default HomeLayout;
