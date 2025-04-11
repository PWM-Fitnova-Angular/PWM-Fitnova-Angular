import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {ExerciseRecipeCardComponent} from '../templates/exercise-recipe-card/exercise-recipe-card.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-exercise-recipes',
  imports: [
    NgClass,
    NgForOf,
    ExerciseRecipeCardComponent
  ],
  templateUrl: './exercise-recipes.component.html',
  styleUrl: './exercise-recipes.component.css'
})
export class ExerciseRecipesComponent implements OnInit {
  bodyClass: string = '';
  mainItems: string[] = [];
  sideItems: string[] = [];
  title: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    const route = this.router.url
    if(route.includes('recipes')) {
      this.loadRecipes();
    }else if(route.includes('exercises')) {
      this.loadExercises();
    }
  }
  private loadExercises(){
    this.title= 'WORKOUTS';
    this.bodyClass= 'exercise-body';
    this.mainItems= ['Arm exercises', 'Chest exercises', 'Back exercises', 'Leg exercises'];
    this.sideItems= [
      'Cardio exercises',
      'Pulley exercises',
      'Machine exercises',
      'Dumbbell exercises',
      'Body exercises'
    ];
  }

  private loadRecipes() {
    this.title= 'RECIPES';
    this.bodyClass= 'recipes-body';
    this.mainItems= ['Breakfast', 'Lunch', 'Snack', 'Dinner'];
    this.sideItems= [
      'Vegan recipes',
      'Vegetarian recipes',
      'High-Protein recipes',
      'Desserts recipes',
      'Meal Prep recipes'
    ];
  }


}
