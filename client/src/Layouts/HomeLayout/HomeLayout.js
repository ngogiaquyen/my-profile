import classNames from 'classnames/bind';
import styles from './HomeLayout.module.scss';
import NavBar from '~/component/NavBar';
import SocialProfile from '~/component/SocialProfile';
import { useContext } from 'react';
import { ScrolledPastContext } from '~/component/Context/ScrolledPastProvder';

const cx = classNames.bind(styles);

function HomeLayout({ children }) {
  const { bottomCompRef } = useContext(ScrolledPastContext);
  return (
    <div className={cx('wrapper')}>
      <SocialProfile />
      <NavBar />
      <div className={cx('container')} ref={bottomCompRef}>
        {children}
      </div>
    </div>
  );
}

export default HomeLayout;
