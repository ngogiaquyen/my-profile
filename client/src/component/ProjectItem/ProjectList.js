import classNames from "classnames/bind";
import styles from "./ProjectItem.module.scss";
import { NavLink } from "react-router-dom";

import image from '~/assets/image.png';
import ProjectItem from "./ProjectItem";

const cx = classNames.bind(styles);

function ProjectList() {
    return ( <div className={cx('project-list')}>
    <ProjectItem/>
    <ProjectItem/>
    <ProjectItem/>
    <ProjectItem/>
    <ProjectItem/>
    <div className={cx('project-item')}>
      <img src={image} />
      <h6>Web Development</h6>
      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse</span>
      <NavLink className={cx('link')} to={''}>
        Visit now
      </NavLink>
    </div>
  </div> );
}

export default ProjectList;