import classNames from 'classnames/bind';
import styles from './PageTitle.module.scss';

const cx = classNames.bind(styles);

function PageTitle({ children }) {
  return <h1 className={cx('title')}>{children}</h1>;
}

export default PageTitle;
