import { HeaderOption } from './header-option';
import OnBoard from '../../screens/onboard/onboard';
import OnBoard2 from '../../screens/onboard/onboard_2';
import Login from '../../screens/Welcome/index';
import UserLogin from '../../screens/login';
import Register from '../../screens/Register/index' 

 

export const OnBoardListRoutes = [
  {
    route: 'onBoard',
    component: OnBoard,
    options: { headerShown: false },
  },
  {
    route: 'onBoards',
    component: OnBoard2,
    options: { headerShown: false },
  },
  {
    route: 'UserLogin',
    component: Login,
    showHeader: false,
    options: { headerShown: false },
  },
  {
    route: 'UserRegister',
    component: Register,
    showHeader: true,
    options: HeaderOption('Account creattion'),
  },
];
