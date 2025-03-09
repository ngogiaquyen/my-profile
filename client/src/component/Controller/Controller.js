import classNames from 'classnames/bind';
import styles from './Controller.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenAlt, faPenToSquare, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Controller({ className, handleDelete = () => {}, handleEdit = () => {} }) {
  return (
    <div className={cx('wrapper', className)}>
      <div className={cx('edit')} onClick={handleEdit}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>
      <div className={cx('delete')} onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
}

export default Controller;
