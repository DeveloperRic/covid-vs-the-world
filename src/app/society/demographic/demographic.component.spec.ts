import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyDemographicComponent } from './demographic.component';

describe('DemographicComponent', () => {
  let component: SocietyDemographicComponent;
  let fixture: ComponentFixture<SocietyDemographicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyDemographicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyDemographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
