import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedRecipesWorkoutsProgressComponent } from './saved-recipes-workouts-progress.component';

describe('SavedRecipesWorkoutsProgressComponent', () => {
  let component: SavedRecipesWorkoutsProgressComponent;
  let fixture: ComponentFixture<SavedRecipesWorkoutsProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedRecipesWorkoutsProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedRecipesWorkoutsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
