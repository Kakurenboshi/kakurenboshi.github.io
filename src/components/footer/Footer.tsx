import React from 'react';

import s from './Footer.module.scss';

function Footer() {
  return (
    <footer className={s.Content}>
      <div className='pure-menu pure-menu-horizontal pure-menu-scrollable'>
        <div className={s.PureMenuHeadingWrapper}>
          <a href='#' className='pure-menu-heading pure-menu-link'>
            © Kakurenboshi 2023
          </a>
        </div>
        <ul className='pure-menu-list'>
          <li className='pure-menu-item'>
            <a href='#' className='pure-menu-link'>
              Support Us
            </a>
          </li>
          <li className='pure-menu-item'>
            <a href='#' className='pure-menu-link'>
              Github
            </a>
          </li>
          <li className='pure-menu-item'>
            <a href='#' className='pure-menu-link'>
              Discord
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
