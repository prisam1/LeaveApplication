import Welcome from '../../screens/Details/Welcome';
import Personal from '../../screens/Details/Personal'

export const DataScreen = [
  {
    route: 'Welcome',
    component: Welcome,
    options: {headerShown: false},
  }, 
  {
    route: 'Personal',
    component: Personal,
    options: {headerShown: false},
  }
];
