import React from 'react';

import Footer from '../footer/Footer';
import Header from '../header/Header';
import s from './Page.module.scss';

type Props = {
  children?: React.ReactNode;
};

const Page = ({ children }: Props) => {
  return (
    <div className={s.page}>
      <Header />
      <div className={s.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default Page;
