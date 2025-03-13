import classNames from "classnames/bind";
import styles from "./ProjectItem.module.scss";
import { NavLink } from "react-router-dom";

import image from '~/assets/image.png';
import routes from "~/configs";

const cx = classNames.bind(styles);

function ProjectItem() {
    return ( <NavLink to={routes.projectDetail} className={cx('project-item')}>
    <img alt="" src={image} />
    <h6>Web Development</h6>
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse</span>
    <NavLink className={cx('link')} to={''}>
      Visit now
    </NavLink>
  </NavLink> );
}

export default ProjectItem;