import classNames from 'classnames/bind';
import styles from './VideoCard.module.scss';

const cx = classNames.bind(styles);

function VideoCard({ src, poster, className, loop }) {
  return (
    <div className={cx('wrapper', className)}>
      <video className={styles.video} src={src} poster={poster} autoPlay loop={loop} muted playsInline />
    </div>
  );
}

export default VideoCard;
