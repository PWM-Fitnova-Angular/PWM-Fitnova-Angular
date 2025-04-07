import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PremiumComponent} from './premium/premium.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'premium', component: PremiumComponent },
  { path: '' ,redirectTo: 'home', pathMatch: 'full' },
];
