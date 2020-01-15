import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsavedPlacesComponent } from './allsaved-places.component';

describe('AllsavedPlacesComponent', () => {
  let component: AllsavedPlacesComponent;
  let fixture: ComponentFixture<AllsavedPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllsavedPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllsavedPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
