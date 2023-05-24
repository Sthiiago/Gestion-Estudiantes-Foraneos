import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageRentComponent } from './average-rent.component';

describe('AverageRentComponent', () => {
  let component: AverageRentComponent;
  let fixture: ComponentFixture<AverageRentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AverageRentComponent]
    });
    fixture = TestBed.createComponent(AverageRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
