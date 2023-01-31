import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertakensurveyComponent } from './usertakensurvey.component';

describe('UsertakensurveyComponent', () => {
  let component: UsertakensurveyComponent;
  let fixture: ComponentFixture<UsertakensurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsertakensurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertakensurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
