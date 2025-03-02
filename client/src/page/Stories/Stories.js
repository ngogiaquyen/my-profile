import React from "react";
import classNames from "classnames/bind";
import styles from "./Stories.module.scss";
import TagImg from "./TagImg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Stories() {
  return (
    <div className={cx("wrapper")}>
      <div
        className={cx("background")}
        // src="https://th.bing.com/th/id/OIP.DwcgRukqZ3OkAj8J_UIbbgHaE8?rs=1&pid=ImgDetMain"
      ></div>
      <div className={cx("show-info")}>
        <h1 className={cx("show-title")}>LOS AND BANDGO</h1>
        <span className={cx("show-location")}>Tại thành phố mộng mơ</span>
        <p className={cx("show-date")}>03/12/2004</p>
      </div>
      <div className={cx("tag-list")}>
        <TagImg />
        <TagImg />
        <TagImg />
        <TagImg />
      </div>
      <div className={cx("control")}>
        <div className={cx("control-left")}>
          <FontAwesomeIcon className={cx("icon")} icon={faAngleLeft} />
          <FontAwesomeIcon className={cx("icon")} icon={faAngleRight} />
        </div>
        <div className={cx("line")}></div>
        <span className={cx("count")}>6</span>
      </div>
    </div>
  );
}

export default Stories;
