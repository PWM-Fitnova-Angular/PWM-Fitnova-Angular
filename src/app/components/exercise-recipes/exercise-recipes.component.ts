import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';

import {ActivatedRoute, Router} from '@angular/router';
import {ExerciseRecipeCardComponent} from '../../templates/exercise-recipe-card/exercise-recipe-card.component';

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
  mainIcons: string[] = [];
  sideIcons: string[] = [];


  constructor(private router: Router) {}

  ngOnInit() {
    const route = this.router.url
    if(route.includes('recipes')) {
      this.loadRecipes();
    }else if(route.includes('exercises')) {
      this.loadExercises();
    }
  }
  private loadExercises() {
    this.title = 'WORKOUTS';
    this.bodyClass = 'exercise-body';
    this.mainItems = ['Arm exercises', 'Chest exercises', 'Back exercises', 'Leg exercises'];
    this.mainIcons = ['fa-dumbbell', 'fa-heart', 'fa-backward', 'fa-walking'];

    this.sideItems = [
      'Cardio exercises',
      'Pulley exercises',
      'Machine exercises',
      'Dumbbell exercises',
      'Body exercises'
    ];
    this.sideIcons = ['fa-running', 'fa-cogs', 'fa-tools', 'fa-dumbbell', 'fa-user'];
  }

  private loadRecipes() {
    this.title= 'RECIPES';
    this.bodyClass= 'recipes-body';
    this.mainItems= ['Breakfast', 'Lunch', 'Snack', 'Dinner'];
    this.mainIcons = ['fa-coffee', 'fa-hamburger', 'fa-cookie', 'fa-drumstick-bite'];
    this.sideIcons = ['fa-seedling', 'fa-leaf', 'fa-egg', 'fa-ice-cream', 'fa-box'];

    this.sideItems= [
      'Vegan recipes',
      'Vegetarian recipes',
      'High-Protein recipes',
      'Desserts recipes',
      'Meal Prep recipes'
    ];
    this.sideIcons = ['fa-running', 'fa-cogs', 'fa-tools', 'fa-dumbbell', 'fa-user'];
  }


}
