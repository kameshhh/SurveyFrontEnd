import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakensurveyComponent } from './takensurvey.component';

describe('TakensurveyComponent', () => {
  let component: TakensurveyComponent;
  let fixture: ComponentFixture<TakensurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakensurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakensurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
