import { Root } from '@/modules/root';
import { Login } from '@/modules/login';
import { Dashboard } from '@/modules/dashboard';

// https://www.npmjs.com/package/react-router-config

export const routes = [
  {
    component: Root,
    path: '/',
    routes: [
      {
        path: '/modules/login',
        component: Login,
      },
      {
        path: '/modules/dashboard',
        component: Dashboard,
      },
    ],
  },
];
