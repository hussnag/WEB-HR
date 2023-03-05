import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryheadsComponent } from './salaryheads.component';

describe('SalaryheadsComponent', () => {
  let component: SalaryheadsComponent;
  let fixture: ComponentFixture<SalaryheadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryheadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryheadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
