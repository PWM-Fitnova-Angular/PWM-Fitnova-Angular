import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-workout-recipe',
  imports: [],
  templateUrl: './details-workout-recipe.component.html',
  styleUrl: './details-workout-recipe.component.css'
})
export class DetailsWorkoutRecipeComponent {

  card:any;

  constructor(private router:Router) {
    const nav = this.router.getCurrentNavigation();
    this.card = nav?.extras?.state?.['cardObject'];

  }


}
