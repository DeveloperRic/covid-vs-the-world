import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDemographicComponent } from './demographic.component';

describe('DemographicComponent', () => {
  let component: PeopleDemographicComponent;
  let fixture: ComponentFixture<PeopleDemographicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleDemographicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleDemographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
