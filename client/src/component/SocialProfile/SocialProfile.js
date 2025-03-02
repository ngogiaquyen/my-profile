import React from "react";

import classNames from "classnames/bind";
import styles from "./SocialProfile.module.scss";

import avatar from "../../assets/avatar.png"; // Import avatar image
import githubIcon from "../../assets/tiktok.png"; // Import GitHub icon
import linkedinIcon from "../../assets/facebook.png"; // Import LinkedIn icon
import twitterIcon from "../../assets/facebook.png"; // Import Twitter icon
const cx = classNames.bind(styles);

function SocialProfile() {
  return (
    <div className={cx("social-profile")}>
      <div className={cx("background")}>
        <img src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/449075799_1900100357124625_3198531066683787621_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeFmv36O0XGZ4ni-Erv-yyBx4mAQ-Zz14jriYBD5nPXiOh24hZNkUI8zOIeZB5H99U78rmytCp6GQmYHL5sVlL22&_nc_ohc=5qHt_2T3fHwQ7kNvgFll8y0&_nc_oc=AdiUnvfvZ3cM7BZgpenRKPdIuFYcsugNXes_QTg4rRMrJfZzxTlaCuVxVau5Nwq3YdItBvLQFn9LmrruQ4u3N4bw&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=Ab9jTveUm9VC1dSbgwq2ny7&oh=00_AYD5bzWWWPWvmJQQyeGvAM5mFxzqyeIVySeQTskdyQE8ow&oe=67C7C686" />
      </div>
      <div className={cx("conten")}>
        <div className={cx('content-avt')}>
          <img src={avatar} alt="Avatar" className={cx("avatar")} />
          <div className={cx("hide")}></div>
        </div>
        <div className={cx("info")}>
          <h1 className={cx("title")}>Ngô Gia Quyến</h1>
          <p className={cx("jd")}>Fullstack Developer | ReactJS Enthusiast</p>
          <div className={cx("contact-info")}>
            <p className={cx("contact")}>
              Email:{" "}
              <a href="mailto:your.email@example.com">ngogiaquyendhtn223@gmail.com</a>
            </p>
            <p className={cx("contact")}>
              Phone: <a href="tel:+1234567890">0356197132</a>
            </p>
          </div>
        </div>
        <div className={cx("social-links")}>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" className={cx("social-icon")} />
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className={cx("social-icon")}
            />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitterIcon}
              alt="Twitter"
              className={cx("social-icon")}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialProfile;
