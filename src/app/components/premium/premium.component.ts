import { Component } from '@angular/core';
import {PlanTypesComponent} from '../../templates/plan-types/plan-types.component';


@Component({
  selector: 'app-premium',
  imports: [
    PlanTypesComponent
  ],
  templateUrl: './premium.component.html',
  styleUrl: './premium.component.css'
})
export class PremiumComponent {

}
