import classNames from "classnames/bind";
import styles from "./ProjectDetailPage.module.scss";

const cx = classNames.bind(styles);

function ProjectDetailPage() {
    return ( <div className={cx("wrapper")}>
        Trang chi tiết prj
    </div> );
}

export default ProjectDetailPage;