import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';
import avatar from '~/assets/avatar.png'; // Import avatar image
import { ScrollEventContext } from '../Context/ScrollEventProvider';
import { NavbarInforContext } from '../Context/NavbarInforPrivider';
import { scrollToBottom } from '~/helper/scroll';
import { ScrolledPastContext } from '../Context/ScrolledPastProvder';
import routes from '~/configs';

const cx = classNames.bind(styles);

const navs = [
  {
    to: routes.home,
    title: 'Home',
  },
  {
    to: routes.cV,
    title: 'My CV',
  },
  {
    to: routes.projects,
    title: 'Projects',
  },
  {
    to: routes.chat,
    title: 'Chat',
  },
];

function NavBar({ fixed = true, col, transparent }) {
  const { scrollDirection } = useContext(ScrollEventContext);

  const { navIndexActive, setNavIndexActive } = useContext(NavbarInforContext);

  const { refNav, isPin, setIsPin } = useContext(ScrolledPastContext);

  const [fobiden] = useState(false);

  const handleClickItemNav = (index) => {
    setNavIndexActive(index);
    setIsPin(false);
    // setForbiden(true);

    setTimeout(() => {
      scrollToBottom(refNav);
      // setForbiden(false);
    }, 200);
  };

  return (
    <nav className={cx('navbar', { transparent: transparent })} ref={refNav}>
      <div
        className={cx('navbar-container', {
          pin: isPin && fixed,
          // bound: bound,
          show: scrollDirection === 'up',
          hide: scrollDirection === 'down' && !fobiden,
        })}
      >
        <ul className={cx('navbar-menu', { col: col })}>
          {navs.map((nav, index) => (
            <li className={cx('navbar-item')} key={index}>
              <NavLink
                to={nav.to}
                className={cx('navbar-link', { active: navIndexActive === index })}
                onClick={() => handleClickItemNav(index)}
              >
                <img alt="" src={avatar} />
                <span className={cx('navbar-item-text')}>{nav.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
