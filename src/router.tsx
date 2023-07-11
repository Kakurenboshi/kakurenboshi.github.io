import React from 'react';

import ErrorPage from './components/error-page/ErrorPage';
import Page from './components/page/Page';
import Root from './components/root/Root';

const Routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: (
      <Page>
        <ErrorPage />
      </Page>
    ),
    children: [
      {
        path: '/',
        element: <h1>Home</h1>,
      },
      {
        path: '/about',
        element: <h1>About</h1>,
      },
      {
        path: '/contact',
        element: <h1>Contact</h1>,
      },
    ],
  },
];

export default Routes;
