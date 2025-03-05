import classNames from 'classnames/bind';
import styles from './CvPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCheck, faDownload, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import { Progress } from '~/assets/svg';
import image from '~/assets/image.png';
import { useState } from 'react';
import Line from './components/Line';
import SkillItem from './components/SkillItem';
import ProjectItem from '~/component/ProjectItem';
import ProjectList from '~/component/ProjectItem/ProjectList';
import NavBar from '~/component/NavBar';

const cx = classNames.bind(styles);

function CvPage() {
  const [isShowBar, setIsShowBar] = useState(true);
  const handleShowBar = () => {
    setIsShowBar((prev) => {
      if (!prev) setIsExpandMenu(false);
      return !prev;
    });
  };

  const [isExpandMenu, setIsExpandMenu] = useState(null);

  const handleExpandMenu = ()=>{
    setIsExpandMenu((prev) => {
      if(!prev) return true;
      return false;
    })
  }

  return (
    <div className={cx('wrapper')}>
      {/* bar */}
      <div className={cx('top-bar')}></div>
      <div className={cx('info-bar', { show: isShowBar, hide: !isShowBar })}>
        <div className={cx('info-bar-frame')}>
          <divc className={cx('info-bar-header')}>
            <FontAwesomeIcon className={cx('icon')} icon={faEllipsisVertical} onClick={handleShowBar} />
          </divc>
          <div className={cx('info-head')}>
            <img
              className={cx('info-img')}
              src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/481088236_2081652008969458_7284515321503083727_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFHoHMKElmLrYypHXIJqLEb8GCIozoxcBrwYIijOjFwGk1XLtRAzV74-zphNQ-nEljn3SHCL3rH-KR8udQ9l_P5&_nc_ohc=6HeNdVjNjLUQ7kNvgGY7ZSa&_nc_oc=AdhqV1FtGJBRBxXUkvYR75sO12p4ooGXfAyVVsKQRg-S5JR8Mdfr-GvRfB-NuAPZDLQ&_nc_zt=24&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AdvaHUzscgnDwvv7tMJMsuI&oh=00_AYA2SUdBybRJC5OMpgiPzOVkaoY3WHG6QFLCtt58lFxXlg&oe=67CD176D"
            />
            <h5 className={cx('info-name')}>NGO GIA QUYEN</h5>
            <p className={cx('info-text')}>Front-end Deweloper Ui/UX Designer</p>
          </div>

          <Line />
          <div className={cx('info-table')}>
            <ul className={cx('table-list')}>
              <li className={cx('table-item')}>
                <h6>Residence</h6>
                <span>Bac Kan</span>
              </li>
              <li className={cx('table-item')}>
                <h6>Residence</h6>
                <span>Bac Kan</span>
              </li>
              <li className={cx('table-item')}>
                <h6>Residence</h6>
                <span>Bac Kan</span>
              </li>
            </ul>
          </div>

          <Line />

          <div className={cx('lang-skills')}>
            <SkillItem title="English" />
            <SkillItem title="English" />
            <SkillItem title="English" />
          </div>

          <Line />

          <div className={cx('code-skills')}>
            <div className={cx('code-item')}>
              <div className={cx('text')}>
                <span>html</span>
                <span>90%</span>
              </div>
              <div className={cx('progess-line')}></div>
            </div>
            <div className={cx('code-item')}>
              <div className={cx('text')}>
                <span>html</span>
                <span>90%</span>
              </div>
              <div className={cx('progess-line')}></div>
            </div>
            <div className={cx('code-item')}>
              <div className={cx('text')}>
                <span>html</span>
                <span>90%</span>
              </div>
              <div className={cx('progess-line')}></div>
            </div>
          </div>

          <Line />

          <div className={cx('knowledge')}>
            <div className={cx('knowledge-item')}>
              <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
              <span>GIT knowledge</span>
            </div>
            <div className={cx('knowledge-item')}>
              <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
              <span>SASS</span>
            </div>
          </div>

          <Line />

          <div className={cx('download-cv')}>
            <span>DOWNLOAD CV</span>
            <FontAwesomeIcon icon={faDownload} />
          </div>

          <div className={cx('social')}>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faFacebook} />
          </div>
        </div>
      </div>

      <div className={cx('overlay', { show: isShowBar })} onClick={handleShowBar}></div>

      {/* container */}
      <div className={cx('container')}>
        <div className={cx('banner')}>
          <h5>Discover my Amazing Art Space!</h5>
          <span>"Frontend Developer để phát triển kỹ năng về React.js và UI/UX."</span>
        </div>

        <div className={cx('couter')}>
          <div className={cx('couter-list')}>
            <div className={cx('counter-item')}>
              <span>2+</span>
              <h6>Years Experience</h6>
            </div>
            <div className={cx('counter-item')}>
              <span>2+</span>
              <h6>Years Experience</h6>
            </div>
            <div className={cx('counter-item')}>
              <span>2+</span>
              <h6>Years Experience</h6>
            </div>
            <div className={cx('counter-item')}>
              <span>2+</span>
              <h6>Years Experience</h6>
            </div>
          </div>
        </div>

        <div className={cx('projects')}>
          <h2>My projects</h2>
          <ProjectList />
        </div>
      </div>

      {/* menu */}
      <div className={cx('menu', { expand: isExpandMenu, marrow: !isExpandMenu && isExpandMenu !== null })}>
        <div className={cx('menu-bars')} onClick={handleExpandMenu}>
          <FontAwesomeIcon className={cx('bar-icon')} icon={faBars} />
        </div>
        <div className={cx('navbar', { show: isExpandMenu })}>{<NavBar col transparent fixed={false} />}</div>
      </div>
    </div>
  );
}

export default CvPage;
