import { Component } from '@angular/core';
import {PlanTypesComponent} from '../templates/plan-types/plan-types.component';

@Component({
  selector: 'app-home',
  imports: [
    PlanTypesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
