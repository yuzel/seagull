
import Home from '@/pages/Home';
import BJLandmark from '@/pages/BJLandmark';
import Logo from '@/pages/Logo';
import FontDesign from '@/pages/FontDesign';
import Child from '@/pages/Child';
import CouldCourt from '@/pages/CouldCourt';
import Neighbours from '@/pages/Neighbours';
import FoodPoster from '@/pages/FoodPoster';
import FoodIcon from '@/pages/FoodIcon';
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
        path: '/bjLandmark',
        component: BJLandmark,
      },
      {
        path: '/fontDesign',
        component: FontDesign,
      },
      {
        path: '/child',
        component: Child,
      },
      {
        path: '/logo',
        component: Logo,
      },
      {
        path: '/couldCourt',
        component: CouldCourt,
      },
      {
        path: '/neighbours',
        component: Neighbours,
      },
      {
        path: '/foodPoster',
        component: FoodPoster,
      },
      {
        path: '/foodIcon',
        component: FoodIcon,
      },
      {
        component: NotFound,
      },

    ],
  },
];

export default routerConfig;
