import {Routes} from '@angular/router';
import {Home} from '../home/home';
import {TLDR} from '../tldr/tldr';


export const routes: Routes = [{
  path: '', component: Home, pathMatch: 'full'
}, {
  path: 'tldr', component: TLDR, pathMatch: 'full'
}];
