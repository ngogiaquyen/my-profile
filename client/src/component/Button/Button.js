import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss"; // Sử dụng CSS Modules

const cx = classNames.bind(styles);


function Button({children, onClick}) {
    return ( <button
        className={cx("btn", "comment-btn")}
        onClick={onClick}
      >
        {children || "Submit"}
      </button> );
}

export default Button;