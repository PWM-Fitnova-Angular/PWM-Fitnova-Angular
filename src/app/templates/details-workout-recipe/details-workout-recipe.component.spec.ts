import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsWorkoutRecipeComponent } from './details-workout-recipe.component';

describe('DetailsWorkoutRecipeComponent', () => {
  let component: DetailsWorkoutRecipeComponent;
  let fixture: ComponentFixture<DetailsWorkoutRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsWorkoutRecipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsWorkoutRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
