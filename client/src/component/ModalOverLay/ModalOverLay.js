import classNames from 'classnames/bind';
import { useContext } from "react";
import { ModalOverLayContext } from "../Context/ModalOverLayProvider";

import styles from "./ModalOverLay.module.scss";

const cx = classNames.bind(styles);

function ModalOverLay() {
    const {modalComponentContent, setModalComponentContent} = useContext(ModalOverLayContext);
  const handleHide = () => {
    setModalComponentContent(null);
  };

  return (
    <div className={cx('wrapper', { show: modalComponentContent })}>
      <div className={cx('overlay')} onClick={handleHide}></div>
      <div className={cx('content')}>
        {/* <FontAwesomeIcon className={cx('icon')} icon={faXmark} onClick={handleHide} /> */}
        {modalComponentContent}
      </div>
    </div>
  );
}

export default ModalOverLay;