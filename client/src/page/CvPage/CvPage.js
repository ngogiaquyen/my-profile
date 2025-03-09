import classNames from 'classnames/bind';
import styles from './CvPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCheck, faDownload, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import Line from './components/Line';
import SkillItem from './components/SkillItem';
import ProjectList from '~/component/ProjectItem/ProjectList';
import NavBar from '~/component/NavBar';
import { BASE_URL_IMG, getData } from '~/helper/apiService';

const cx = classNames.bind(styles);

function CvPage() {
  const [isShowBar, setIsShowBar] = useState(true);
  const [information, setInformation] = useState([]);
  const [skills, setSkills] = useState([]);

  const handleShowBar = () => {
    setIsShowBar((prev) => {
      if (!prev) setIsExpandMenu(false);
      return !prev;
    });
  };

  const [isExpandMenu, setIsExpandMenu] = useState(null);

  const handleExpandMenu = () => {
    setIsExpandMenu((prev) => {
      if (!prev) return true;
      return false;
    });
  };

  const [cvInfo, setCvInfo] = useState({});

  const parseSkills = (value) => {
    const lines = value
      .split('\n')
      .map((line) => line.replaceAll('\r', '')) // Xóa ký tự \r trước
      .filter((line) => line !== ''); // Lọc bỏ dòng rỗng

    console.log(lines);

    return lines;
  };

  const loadData = async () => {
    const res = await getData('/cv/read');
    setCvInfo(res[0]);
    console.log(res);
    setInformation(parseStringToTable(res[0].information));
    setSkills(parseSkills(res[0].skills));
  };

  const parseStringToTable = (inputString) => {
    const lines = inputString.split('\\n'); // Tách từng dòng
    const newTableData = [];

    lines.forEach((line, index) => {
      const [key, value] = line.split(':').map((item) => item.trim()); // Tách key và value
      if (key && value) {
        newTableData.push({ key, value }); // Lưu vào tableData
      }
    });
    return newTableData; // Cập nhật state
  };

  useEffect(() => {
    loadData();
  }, []);

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
            <img alt="" className={cx('info-img')} src={BASE_URL_IMG + '/' + cvInfo.avatar} />
            <h5 className={cx('info-name')}>{cvInfo.name}</h5>
            <p className={cx('info-text')}>{cvInfo.job_position}</p>
          </div>

          <Line />
          <div className={cx('info-table')}>
            <ul className={cx('table-list')}>
              {information.map((info, index) => (
                <li className={cx('table-item')} key={index}>
                  <h6>{info.key}</h6>
                  <span>{info.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <Line />

          {/* <div className={cx('lang-skills')}>
            <SkillItem title="English" />
            <SkillItem title="English" />
            <SkillItem title="English" />
          </div> */}

          <Line />

          {/* <div className={cx('code-skills')}>
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
          </div> */}

          <Line />

          <div className={cx('knowledge')}>
            {skills.map((line, index) => {
              if(line.startsWith("#")){
                return <h5 className={cx('knowledge-title')}>{line.replaceAll("#", "")}</h5>
              }
              return (
                <div className={cx('knowledge-item')}>
                  <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                  <span>{line}</span>
                </div>
              )
            }
            
            )}
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
          {/* <h5>Discover my Amazing Art Space!</h5> */}
          <span>{cvInfo.target}</span>
        </div>

        {/* <div className={cx('couter')}>
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
        </div> */}

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
