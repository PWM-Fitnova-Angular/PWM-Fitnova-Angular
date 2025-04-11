import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseRecipesComponent } from './exercise-recipes.component';

describe('ExerciseRecipesComponent', () => {
  let component: ExerciseRecipesComponent;
  let fixture: ComponentFixture<ExerciseRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseRecipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
