import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PremiumComponent} from './premium/premium.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {ExerciseRecipesComponent} from './exercise-recipes/exercise-recipes.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'premium', component: PremiumComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'exercises', component: ExerciseRecipesComponent},
  { path: 'recipes', component: ExerciseRecipesComponent},
  { path: '' ,redirectTo: 'home', pathMatch: 'full' },
];
