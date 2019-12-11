
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import BlankLayout from '@/layouts/BlankLayout';

const routerConfig = [
  {
    path: '/',
    component: BlankLayout,
    children: [
      {
        path: '/home',
        component: Home,
      },
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/resume',
        component: NotFound,
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
