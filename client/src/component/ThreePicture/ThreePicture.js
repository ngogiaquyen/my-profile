import classNames from 'classnames/bind';
import styles from './ThreePicture.module.scss';
import imgright from '~/assets/imgtopgroup.jpg'; // Import avatar image
import imgright3 from '~/assets/FB_IMG_1691804982776.jpg'; // Import avatar image
import imgright4 from '~/assets/IMG_988.jpg'; // Import avatar image

const cx = classNames.bind(styles);

function ThreePicture() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('left')}>
        <div className={cx('top')}>
          <img alt="" className={cx('img')} src={imgright3} />
          <h5>Code the Future, Build the World!1</h5>
          <span>Nội dung gì gì đó ở đấy</span>
        </div>
        <div className={cx('bottom')}>
          <img alt="" className={cx('img')} src={imgright} />
          <h5>No bugs, no life</h5>
          <span>4</span>
        </div>
      </div>
      <div className={cx('right')}>
        <img alt="" className={cx('img')} src={imgright4} />
        <h5>Code the Future, Build the World!3</h5>
      </div>
    </div>
  );
}

export default ThreePicture;
