import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveExcercisesProgressComponent } from './save-excercises-progress.component';

describe('SaveExcercisesProgressComponent', () => {
  let component: SaveExcercisesProgressComponent;
  let fixture: ComponentFixture<SaveExcercisesProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveExcercisesProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveExcercisesProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
