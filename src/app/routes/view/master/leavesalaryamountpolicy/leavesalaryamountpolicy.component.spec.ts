import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesalaryamountpolicyComponent } from './leavesalaryamountpolicy.component';

describe('LeavesalaryamountpolicyComponent', () => {
  let component: LeavesalaryamountpolicyComponent;
  let fixture: ComponentFixture<LeavesalaryamountpolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavesalaryamountpolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavesalaryamountpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
