import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {ExerciseRecipeCardComponent} from '../../templates/exercise-recipe-card/exercise-recipe-card.component';
import { ExerciseService } from '../../services/exercise.service';

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

  cardItems: any[] = [];

  constructor(private router: Router, private exerciseService: ExerciseService) {}

  ngOnInit() {
    const route = this.router.url
    if(route.includes('recipes')) {
      this.loadRecipes();
    }else if(route.includes('exercises')) {
      this.loadExercises();
    }

    this.loadCardItems();
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

    this.cardItems = await this.exerciseService.getExercises();
    console.log(this.cardItems);
    console.log(typeof this.cardItems[0]);
  }

  private loadRecipes() {
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
  }

  private loadCardItems() {
    const isExercises = this.router.url.includes('exercises');

    if (isExercises) {

    } else {
      this.cardItems = [
        { cardLabel: 'Breakfast', cardTitle: 'Oatmeal Bowl' },
        { cardLabel: 'Lunch', cardTitle: 'Chicken Salad' },
        { cardLabel: 'Snack', cardTitle: 'Protein Bar' },
        { cardLabel: 'Dinner', cardTitle: 'Salmon with Veggies' },
        { cardLabel: 'Breakfast', cardTitle: 'Protein Pancakes' },
        { cardLabel: 'Lunch', cardTitle: 'Quinoa Bowl' },
        { cardLabel: 'Snack', cardTitle: 'Greek Yogurt' },
        { cardLabel: 'Dinner', cardTitle: 'Turkey Meatballs' }
      ];
    }
  }
}
