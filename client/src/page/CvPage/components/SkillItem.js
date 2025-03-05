import classNames from "classnames/bind";
import styles from "../CvPage.module.scss";
import { Progress } from "~/assets/svg";

const cx = classNames.bind(styles)


function SkillItem({per = 0, title=""}) {
    return ( <div className={cx('skills-item')}>
    <Progress />
    <h6>{title}</h6>
  </div> );
}

export default SkillItem;