import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseRecipeCardComponent } from './exercise-recipe-card.component';

describe('ExerciseRecipeCardComponent', () => {
  let component: ExerciseRecipeCardComponent;
  let fixture: ComponentFixture<ExerciseRecipeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseRecipeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseRecipeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
