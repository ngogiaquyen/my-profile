import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./NavBar.module.scss";
import avatar from "~/assets/avatar.png"; // Import avatar image
import { ScrollEventContext } from "../Context/ScrollEventProvider";
import { useScrolledPastComponent } from "~/hooks/useScrolledPastComponent";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { NavbarScrollContext } from "../Context/NavbarScrollProvider";

const cx = classNames.bind(styles);

function NavBar({ isFixed, bound, scrolledPast, ref }) {
  const { scrollDirection, setScrollDirection } =
    useContext(ScrollEventContext);

  const { scrollToTop } = useContext(NavbarScrollContext);

  return (
    <nav
      className={cx("navbar", {
        pin: scrolledPast,
        fixed: isFixed,
        bound: bound,
        show: scrollDirection === "up",
        hide: scrollDirection === "down",
      })}
      ref={ref}
    >
      <div className={cx("navbar-container")}>
        <ul className={cx("navbar-menu")}>
          <li className={cx("navbar-item")}>
            <NavLink to="/" className={cx("navbar-link")} onClick={scrollToTop}>
              <img src={avatar} />
              <span className={cx("navbar-item-text")}>Home</span>
            </NavLink>
          </li>
          <li className={cx("navbar-item")}>
            <NavLink
              to="/profile"
              className={cx("navbar-link")}
              onClick={scrollToTop}
            >
              <img src={avatar} />
              <span className={cx("navbar-item-text")}>My CV</span>
            </NavLink>
          </li>
          <li className={cx("navbar-item")}>
            <NavLink
              to="/projects"
              className={cx("navbar-link")}
              onClick={scrollToTop}
            >
              <img src={avatar} />
              <span className={cx("navbar-item-text")}>Projects</span>
            </NavLink>
          </li>
          <li className={cx("navbar-item")}>
            <NavLink
              to="/temp"
              className={cx("navbar-link")}
              onClick={scrollToTop}
            >
              <img src={avatar} />
              <span className={cx("navbar-item-text")}>Temp</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
