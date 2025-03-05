import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';
import avatar from '~/assets/avatar.png'; // Import avatar image
import { ScrollEventContext } from '../Context/ScrollEventProvider';
import { useScrolledPastComponent } from '~/hooks/useScrolledPastComponent';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { NavbarScrollContext } from '../Context/NavbarScrollProvider';
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

function NavBar({fixed = true, col,transparent}) {
  const { scrollDirection, setScrollDirection } = useContext(ScrollEventContext);

  const { navIndexActive, setNavIndexActive } = useContext(NavbarInforContext);

  const { refNav, bottomCompRef, isPin, setIsPin, scrolledPast } = useContext(ScrolledPastContext);

  const handleClickItemNav = (index) => {
    setNavIndexActive(index);
    console.log('hello');
    setIsPin(false);
    setTimeout(() => {
      scrollToBottom(refNav);
    }, 200);
  };

  useEffect(() => {
    // console.log(refNav);
    // console.log(scrolledPast);
  }, [scrolledPast]);

  return (
    <nav className={cx('navbar', {transparent: transparent})} ref={refNav}>
      <div
        className={cx('navbar-container', {
          pin: isPin && fixed,
          // bound: bound,
          show: scrollDirection === 'up',
          hide: scrollDirection === 'down',
        })}
      >
        <ul className={cx('navbar-menu', {col: col})}>
          {navs.map((nav, index) => (
            <li className={cx('navbar-item')}>
              <NavLink
                to={nav.to}
                className={cx('navbar-link', { active: navIndexActive === index })}
                onClick={() => handleClickItemNav(index)}
              >
                <img src={avatar} />
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
