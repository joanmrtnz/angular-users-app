import {Routes} from '@angular/router';
import {Home} from './home/home';
import {Details} from './details/details';
import { UserForm } from './user-form/user-form';

const routeConfig: Routes = [
  {
    path: '',
    component: Home,
    title: 'HealthTrack',
  },
  {
    path: 'details/:id',
    component: Details,
    title: 'HealthTrack',
  },
   {
    path: 'new-user',
    component: UserForm,
    title: 'HealthTrack',
  },
];
export default routeConfig;