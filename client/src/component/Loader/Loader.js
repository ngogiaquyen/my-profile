import classNames from 'classnames/bind';
import styles from './Loader.module.scss';

import loaderGif from "~/assets/loader.gif"

const cx = classNames.bind(styles);

function Loader() {
  return (
    <div className={cx('loaderContainer')}  >
      <div className={cx('spinner')} style={{ backgroundImage: `url(${loaderGif})` }}>
        <div className={cx('dot1')}></div>
        <div className={cx('dot2')}></div>
        <div className={cx('bounce1')}></div>
        <div className={cx('bounce2')}></div>
        <div className={cx('bounce3')}></div>
      </div>
    </div>
  );
}

export default Loader;
