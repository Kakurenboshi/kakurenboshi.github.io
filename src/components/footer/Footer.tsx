import React, { useEffect } from 'react';

import s from './Footer.module.scss';

function Footer() {
  let prevScrollpos = window.pageYOffset;

  function hideOnScroll() {
    const currentScrollPos = window.pageYOffset;
    const footer = document.querySelector('footer > .pure-menu');

    if (prevScrollpos > currentScrollPos) {
      footer?.classList.add(s.Show);
      footer?.classList.remove(s.Hide);
    } else {
      footer?.classList.add(s.Hide);
      footer?.classList.remove(s.Show);
    }

    prevScrollpos = currentScrollPos;
  }

  useEffect(() => {
    window.addEventListener('scroll', hideOnScroll);
    return () => window.removeEventListener('scroll', hideOnScroll);
  });

  return (
    <footer className={s.Content}>
      <div className={`pure-menu pure-menu-horizontal pure-menu-scrollable ${s.Show}`}>
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
