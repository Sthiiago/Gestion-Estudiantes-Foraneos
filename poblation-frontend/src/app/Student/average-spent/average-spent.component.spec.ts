import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageSpentComponent } from './average-spent.component';

describe('AverageSpentComponent', () => {
  let component: AverageSpentComponent;
  let fixture: ComponentFixture<AverageSpentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AverageSpentComponent]
    });
    fixture = TestBed.createComponent(AverageSpentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
