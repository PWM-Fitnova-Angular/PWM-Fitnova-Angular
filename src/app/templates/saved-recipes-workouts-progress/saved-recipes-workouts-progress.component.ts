import { Component, OnInit } from '@angular/core';
import { FavoritesService, Card } from '../../services/favorites.service';
import { Router } from '@angular/router';
import {NgForOf, NgIf, SlicePipe} from '@angular/common';

@Component({
  selector: 'app-saved-recipes-workouts-progress',
  templateUrl: './saved-recipes-workouts-progress.component.html',
  imports: [
    SlicePipe,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./saved-recipes-workouts-progress.component.css']
})
export class SavedRecipesWorkoutsProgressComponent implements OnInit {
  recipes: Card[] = [];
  loading = true;

  constructor(
    private fav: FavoritesService,
    private router: Router
  ) {}

  async ngOnInit() {
    const all = await this.fav.loadAll();
    this.recipes = all.filter(c => Array.isArray((c as any).tags));
    this.loading = false;
  }

  viewDetail(card: Card) {
    this.router.navigate(['/details'], { state: { cardObject: card } });
  }
}
