import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PremiumComponent} from './premium/premium.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {ExerciseRecipesComponent} from './exercise-recipes/exercise-recipes.component';
import {SettingsComponent} from './settings/settings.component';
import {LoginComponent} from './login/login.component';
import {PaymentComponent} from './payment/payment.component';
import {DeleteComponent} from './delete/delete.component';


export const routes: Routes = [
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
  { path: '**' ,redirectTo: 'home', pathMatch: 'full' }
];
