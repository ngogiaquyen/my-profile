import React from 'react';

import classNames from 'classnames/bind';
import styles from './SocialProfile.module.scss';

import avatar from '~/assets/avatar.png'; // Import avatar image
import githubIcon from '~/assets/github.png'; // Import GitHub icon
import facebookIcon from '~/assets/facebook.png'; // Import LinkedIn icon
import linkedinIcon from '~/assets/linkedin.png'; // Import Twitter icon
import background from '~/assets/background.png';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const cx = classNames.bind(styles);

function SocialProfile() {
  return (
    <div className={cx('social-profile')}>
      <div className={cx('background')}>
        <img alt="" src={background} />
      </div>
      <div className={cx('conten')}>
        <div className={cx('content-avt')}>
          <img src={avatar} alt="Avatar" className={cx('avatar')} />
          <div className={cx('hide')}></div>
        </div>
        <div className={cx('info')}>
          <h1 className={cx('title')}>Ngô Gia Quyến</h1>
          <p className={cx('jd')}>Fullstack Developer | ReactJS Enthusiast</p>
          <div className={cx('contact-info')}>
            <p className={cx('contact')}>
              Email: <a href="mailto:ngogiaquyendhtn223@gmail.com">ngogiaquyendhtn223@gmail.com</a>
            </p>
            <p className={cx('contact')}>
              Phone: <a href="tel:+0356197132">0356197132</a>
            </p>
          </div>
        </div>
        <div className={cx('social-links')}>
          <a href="https://github.com/ngogiaquyen" target="_blank" rel="noopener noreferrer">
            {/* <img src={githubIcon} alt="GitHub" className={cx("social-icon")} /> */}
            <FaGithub className={cx("social-icon", "github")} />
          </a>
          <a href="https://www.linkedin.com/in/quyen-ngo-gia" target="_blank" rel="noopener noreferrer">
            {/* <img
              src={linkedinIcon}
              alt="LinkedIn"
              className={cx("social-icon")}
            /> */}
            <FaLinkedin className={cx("social-icon")} />
          </a>
          <a href="https://www.facebook.com/share/165jkkeQ9a/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            {/* <img src={facebookIcon} alt="facebook" className={cx('social-icon')} /> */}
            <FaFacebook className={cx("social-icon")} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialProfile;
