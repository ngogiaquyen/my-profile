import classNames from "classnames/bind";
import styles from "./ThreePicture.module.scss";
import avatar from "../../assets/avatar.png"; // Import avatar image

const cx = classNames.bind(styles);

function ThreePicture() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("right")}>
        <img className={cx("img")} src={avatar} />
      </div>
      <div className={cx("left")}>
        <div className={cx("top")}>
          <img className={cx("img")} src={avatar} />
        </div>
        <div className={cx("bottom")}>
          <img className={cx("img")} src={avatar} />
        </div>
      </div>
    </div>
  );
}

export default ThreePicture;
