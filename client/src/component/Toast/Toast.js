import classNames from 'classnames/bind';
import styles from './Toast.module.scss';
import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ToastContext } from '../Context/ToastProvider';

const cx = classNames.bind(styles);

function Toast() {
  const { toasts } = useContext(ToastContext);
  
  return (
    <div className={cx('wrapper')}>
      {toasts.map((toast, index) => (
        <div className={cx('toast', toast.status)} key={index}>
          <span className={cx('message')}>{toast.content || 'Có lỗi sảy ra!'}</span>
          <div className={cx('icon-box')}>
            <FontAwesomeIcon className={cx('toast-icon')} icon={faXmark} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Toast;
