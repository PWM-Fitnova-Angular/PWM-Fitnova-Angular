import { Component } from '@angular/core';
import {Card, FavoritesService} from '../../services/favorites.service';
import {Router} from '@angular/router';
import {NgForOf, NgIf, SlicePipe} from '@angular/common';

@Component({
  selector: 'app-save-excercises-progress',
  imports: [
    SlicePipe,
    NgIf,
    NgForOf
  ],
  templateUrl: './save-excercises-progress.component.html',
  styleUrl: './save-excercises-progress.component.css'
})
export class SaveExcercisesProgressComponent {
  exercises: Card[] = [];
  loading = true;

  constructor(
    private fav: FavoritesService,
    private router: Router
  ) {}

  async ngOnInit() {
    const all = await this.fav.loadAll();
    this.exercises = all.filter(c => Array.isArray((c as any).muscleGroups));
    this.loading = false;
  }

  viewDetail(card: Card) {
    this.router.navigate(['/details'], { state: { cardObject: card } });
  }
}
