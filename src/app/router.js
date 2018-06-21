/**
 * Routes of application
 * @module Router
 */

import Router from '@cerebral/router';

export default Router({
  routes: [
    {
      path: '/',
      signal: 'rootRouted',
    },
    {
      path: '/admin',
      signal: 'adminRouted',
    },
    {
      path: '/login',
      signal: 'loginRouted',
    },
  ],
});
