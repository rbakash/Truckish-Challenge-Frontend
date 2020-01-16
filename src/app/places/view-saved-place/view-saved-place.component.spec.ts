import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSavedPlaceComponent } from './view-saved-place.component';

describe('ViewSavedPlaceComponent', () => {
  let component: ViewSavedPlaceComponent;
  let fixture: ComponentFixture<ViewSavedPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSavedPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSavedPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
