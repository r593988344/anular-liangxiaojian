import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceStatisticsComponent } from './police-statistics.component';

describe('PoliceStatisticsComponent', () => {
  let component: PoliceStatisticsComponent;
  let fixture: ComponentFixture<PoliceStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliceStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
