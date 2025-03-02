import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./NavBar.module.scss";
import avatar from "../../assets/avatar.png"; // Import avatar image
import { ScrollEventContext } from "../Context/ScrollEventProvider";

const cx = classNames.bind(styles);

function NavBar() {
  const { scrollDirection, setScrollDirection } =
    useContext(ScrollEventContext);

  return (
    <nav className={cx("navbar", {show: scrollDirection==="up", hide: scrollDirection==="down"})}>
      <div className={cx("navbar-container")}>
        <ul className={cx("navbar-menu")}>
          <li className={cx("navbar-item")}>
            <NavLink to="/" className={cx("navbar-link")}>
              <img src={avatar} />
              <span className={cx("navbar-item-text")}>Home</span>
            </NavLink>
          </li>
          <li className={cx("navbar-item")}>
            <NavLink to="/profile" className={cx("navbar-link")}>
              <img src={avatar} />
              <span className={cx("navbar-item-text")}>Profile</span>
            </NavLink>
          </li>
          <li className={cx("navbar-item")}>
            <NavLink to="/projects" className={cx("navbar-link")}>
              <img src={avatar} />
              <span className={cx("navbar-item-text")}>Projects</span>
            </NavLink>
          </li>
          <li className={cx("navbar-item")}>
            <NavLink to="/stories" className={cx("navbar-link")}>
              <img src={avatar} />
              <span className={cx("navbar-item-text")}>Stories</span>
            </NavLink>
          </li>
          <li className={cx("navbar-item")}>
            <NavLink to="/temp" className={cx("navbar-link")}>
              <img src={avatar} />
              <span className={cx("navbar-item-text")}>Temp</span>
            </NavLink>
          </li>
          <li className={cx("navbar-item")}>
            <NavLink to="/stories" className={cx("navbar-link")}>
              <img src={avatar} />
              <span className={cx("navbar-item-text")}>{scrollDirection}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
