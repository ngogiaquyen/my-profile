import classNames from "classnames/bind";
import styles from "./Stories.module.scss";

const cx = classNames.bind(styles);

function TagImg() {
  return (
    <div className={cx("tag")}>
      <h1 className={cx("tag-title")}>LOS AND BANDGO</h1>
      <span className={cx("tag-location")}>Tại thành phố mộng mơ</span>
      <p className={cx("tag-date")}>03/12/2004</p>
    </div>
  );
}

export default TagImg;
