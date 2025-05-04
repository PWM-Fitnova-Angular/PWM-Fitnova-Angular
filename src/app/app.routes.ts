import { Routes } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {SettingsComponent} from './components/settings/settings.component';
import {PremiumComponent} from './components/premium/premium.component';
import { ProfileComponent } from './components/profile/profile.component';
import {RegisterComponent} from './components/register/register.component';
import {ExerciseRecipesComponent} from './components/exercise-recipes/exercise-recipes.component';
import {LoginComponent} from './components/login/login.component';
import {PaymentComponent} from './components/payment/payment.component';
import { DeleteComponent } from './components/delete/delete.component';
import { DetailsWorkoutRecipeComponent } from './templates/details-workout-recipe/details-workout-recipe.component';
import {SavedRecipesWorkoutsProgressComponent} from './templates/saved-recipes-workouts-progress/saved-recipes-workouts-progress.component';
import {SaveExcercisesProgressComponent} from './templates/save-excercises-progress/save-excercises-progress.component';

export const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'settings', component: SettingsComponent},
  { path: 'premium', component: PremiumComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'exercises', component: ExerciseRecipesComponent},
  { path: 'recipes', component: ExerciseRecipesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'delete', component: DeleteComponent},
  { path: 'details', component: DetailsWorkoutRecipeComponent},
  { path: 'saved-recipes', component: SavedRecipesWorkoutsProgressComponent},
  { path: 'saved-exercises', component: SaveExcercisesProgressComponent},
  { path: '**' ,redirectTo: 'home', pathMatch: 'full' }
];

export class AppRoutingModule { }
