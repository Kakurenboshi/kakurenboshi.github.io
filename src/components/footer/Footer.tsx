import React from 'react';

import s from './Footer.module.scss';

function Footer() {
  return (
    <footer>
      <div className={s.Content}>
        <div className='pure-g'>
          <div className={`pure-u-1 pure-u-sm-2-5 ${s.Column}`}>
            <p>© Kakurenboshi 2023</p>
          </div>
          <div className={`pure-u-1 pure-u-sm-1-5 ${s.Column}`}>
            <p>Support Us</p>
          </div>
          <div className={`pure-u-1 pure-u-sm-1-5 ${s.Column}`}>
            <p>Github</p>
          </div>
          <div className={`pure-u-1 pure-u-sm-1-5 ${s.Column}`}>
            <p>Discord</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
