import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {ExerciseRecipeCardComponent} from '../../templates/exercise-recipe-card/exercise-recipe-card.component';
import { ExerciseService } from '../../services/exercise.service';
import {RecipeService} from '../../services/recipes.service';

@Component({
  selector: 'app-exercise-recipes',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    NgIf,
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

  allItems: any[] = [];
  cardItems: any[] = [];
  topFilterActive: string | null = null;

  constructor(private router: Router, private exerciseService: ExerciseService, private recipeService: RecipeService) {}

  ngOnInit() {
    const route = this.router.url
    if(route.includes('recipes')) {
      this.loadRecipes();
    }else if(route.includes('exercises')) {
      this.loadExercises();
    }
  }

  private async loadExercises() {
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

    const data = await this.exerciseService.getExercises();
    this.allItems = data;
    this.cardItems = [...data]

  }

  private async loadRecipes() {
    this.title= 'RECIPES';
    this.bodyClass= 'recipes-body';
    this.mainItems= ['Breakfast', 'Lunch', 'Snack', 'Dinner'];
    this.mainIcons = ['fa-coffee', 'fa-hamburger', 'fa-cookie', 'fa-drumstick-bite'];

    this.sideItems= [
      'Vegan recipes',
      'Vegetarian recipes',
      'High-Protein recipes',
      'Desserts recipes',
      'Meal Prep recipes'
    ];
    this.sideIcons = ['fa-seedling', 'fa-leaf', 'fa-egg', 'fa-ice-cream', 'fa-box'];

    const data = await this.recipeService.getRecipes();
    this.allItems = data;
    this.cardItems = [...data]
  }

  topFilter(item: string) {

    item = item.split(' ')[0];

    if (this.topFilterActive === item) {
      this.topFilterActive = null;
      this.cardItems = [...this.allItems];
    } else {
      this.topFilterActive = item;
      this.cardItems = this.allItems.filter(e =>
        e.muscleGroups?.includes(item) || e.categories?.includes(item)
      );
    }

  }

}
