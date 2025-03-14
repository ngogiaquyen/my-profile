import classNames from 'classnames/bind';
import styles from './ProjectItem.module.scss';
import { NavLink } from 'react-router-dom';

import routes from '~/configs';
import { BASE_URL_IMG } from '~/helper/apiService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { LoginContext } from '../Context/LoginProvider';

const cx = classNames.bind(styles);

function ProjectItem({ data, handleRemove }) {
  const { loginStatus } = useContext(LoginContext);

  return (
    <NavLink to={`${routes.projectDetail}/${data.id}`} className={cx('project-item')}>
      <img alt="" src={BASE_URL_IMG + data.image} />
      <h6>{data.name}</h6>
      <span>{data.descriptions}</span>
      <NavLink className={cx('link')} to={data.github_link}>
        Visit now
      </NavLink>
      {loginStatus && (
        <FontAwesomeIcon icon={faTrash} className={cx('icon-trash')} onClick={(e) => handleRemove(e,data.id)} />
      )}
    </NavLink>
  );
}

export default ProjectItem;
