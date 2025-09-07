import {Routes} from '@angular/router';
import {Home} from '../home/home';

export const appServerRoutes: ServerRoute[] = [{
  path: '', component: Home, pathMatch: 'full'
}];
