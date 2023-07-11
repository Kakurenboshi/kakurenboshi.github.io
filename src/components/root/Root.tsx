import React from 'react';

import { Outlet } from 'react-router-dom';
import Page from '../page/Page';

const Root = () => {
  return (
    <Page>
      <Outlet />
    </Page>
  );
};

export default Root;
