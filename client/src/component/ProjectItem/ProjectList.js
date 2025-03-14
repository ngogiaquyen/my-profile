import classNames from 'classnames/bind';
import styles from './ProjectItem.module.scss';
import { NavLink } from 'react-router-dom';

import image from '~/assets/image.png';
import ProjectItem from './ProjectItem';

const cx = classNames.bind(styles);

function ProjectList({ data = [] , handleRemove}) {
  console.log(data);
  
  return (
    <div className={cx('project-list')}>
      {data.map((prj) => (
        <ProjectItem data = {prj} handleRemove = {handleRemove}/>
      ))}
      {/* <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem /> */}
    </div>
  );
}

export default ProjectList;
