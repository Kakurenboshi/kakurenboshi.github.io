import React from 'react';
import { Link } from 'react-router-dom';

import s from './Header.module.scss';

function Header() {
  return (
    <header className={s.Content}>
      <nav className='pure-menu pure-menu-horizontal pure-menu-scrollable'>
        <ul className='pure-menu-list'>
          <li className='pure-menu-item'>
            <Link className='pure-menu-link' to='/'>
              Home
            </Link>
          </li>
          <li className='pure-menu-item'>
            <Link className='pure-menu-link' to='/portfolio'>
              Portfolio
            </Link>
          </li>
          <li className='pure-menu-item'>
            <Link className='pure-menu-link' to='/about'>
              About Us
            </Link>
          </li>
          <li className='pure-menu-item'>
            <Link className='pure-menu-link' to='/contact'>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
