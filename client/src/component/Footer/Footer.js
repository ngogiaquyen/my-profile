import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('container')}>
        {/* Cột 1: Mô tả */}
        <div className={cx('column')}>
          <h3>Blog của Ngô Gia Quyến</h3>
          <p>Nơi chia sẻ kiến thức về lập trình, công nghệ, và nhiều hơn thế.</p>
        </div>

        {/* Cột 2: Liên kết nhanh */}
        <div className={cx('column')}>
          <h3>Thành viên & Cộng đồng</h3>
          <ul className={cx('navLinks')}>
            <li><a href="/">Tham gia nhóm Facebook</a></li>
            <li><a href="/about">Đăng ký nhận bản tin</a></li>
            <li><a href="/contact">Viết bài cùng tôi</a></li>
            <li><a href="/privacy">Góp ý & đề xuất chủ đề</a></li>
          </ul>
        </div>

        {/* Cột 3: Liên hệ */}
        <div className={cx('column')}>
          <h3>Liên hệ</h3>
          <p>📍 Địa chỉ: 123 Đường ABC, Quận XYZ, HCM</p>
          <p>📧 Email: contact@ngogiaquyen.com</p>
          <p>📞 Điện thoại: 0123-456-789</p>
        </div>

        {/* Cột 4: Mạng xã hội */}
        <div className={cx('column', 'socialIcons')}>
          <h3>Kết nối với tôi</h3>
          <div className={cx('icons')}>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>
      </div>

      {/* Bản quyền */}
      <p className={cx('copyright')}>
        &copy; {new Date().getFullYear()} Blog của Ngô Gia Quyến. Mọi quyền được bảo lưu.
      </p>
    </footer>
  );
};

export default Footer;
