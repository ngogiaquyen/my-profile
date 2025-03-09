import classNames from 'classnames/bind';
import styles from './ConfirmModal.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

function ConfirmModal({ title, handleConfirm = () => {}, handleCancel = () => {} }) {
  return (
    <div className={cx('wrapper')}>
      <h3 className={cx('title')}>{title}</h3>
      <div className={cx("btn-box")}>
          <Button onClick={handleConfirm} >Confirm</Button>
          <Button onClick={handleCancel} >Cancel</Button>
      </div>
    </div>
  );
}

export default ConfirmModal;
