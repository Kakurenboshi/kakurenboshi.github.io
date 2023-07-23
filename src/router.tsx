import React from 'react';

import ErrorPage from './components/error-page/ErrorPage';
import Page from './components/page/Page';
import Root from './components/root/Root';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';

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
        element: <Home />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
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
