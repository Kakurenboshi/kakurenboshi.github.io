import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import s from './Header.module.scss';

function Header() {
  let prevScrollpos = window.pageYOffset;

  function hideOnScroll() {
    const currentScrollPos = window.pageYOffset;
    const header = document.querySelector('header > .pure-menu');

    if (prevScrollpos > currentScrollPos) {
      header?.classList.add(s.Show);
      header?.classList.remove(s.Hide);
    } else {
      header?.classList.add(s.Hide);
      header?.classList.remove(s.Show);
    }

    prevScrollpos = currentScrollPos;
  }

  useEffect(() => {
    window.addEventListener('scroll', hideOnScroll);
    return () => window.removeEventListener('scroll', hideOnScroll);
  });

  return (
    <header className={s.Content}>
      <nav className={`pure-menu pure-menu-horizontal pure-menu-scrollable ${s.Show}`}>
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
