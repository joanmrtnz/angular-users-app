import {Routes} from '@angular/router';
import {Home} from './home/home';
import {Details} from './details/details';
import { UserForm } from './user-form/user-form';

const routeConfig: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: Details,
    title: 'Home details',
  },
   {
    path: 'new-user',
    component: UserForm,
    title: 'New User',
  },
];
export default routeConfig;