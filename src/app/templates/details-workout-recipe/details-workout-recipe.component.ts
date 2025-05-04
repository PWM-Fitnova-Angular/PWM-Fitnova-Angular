import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService, Card } from 'app/services/favorites.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-details-workout-recipe',
  templateUrl: './details-workout-recipe.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./details-workout-recipe.component.css']
})
export class DetailsWorkoutRecipeComponent {
  card!: Card;
  saving = false;

  constructor(
    private router: Router,
    private fav: FavoritesService
  ) {
    const nav = this.router.getCurrentNavigation();
    this.card = nav?.extras?.state?.['cardObject'];
  }

  async saveCard() {
    this.saving = true;
    try {
      await this.fav.save(this.card);
      alert('Guardado correctamente');
    } catch (e) {
      console.error(e);
      alert('Error al guardar');
    } finally {
      this.saving = false;
    }
  }
}
