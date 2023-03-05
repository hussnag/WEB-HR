import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisacompanydesignationComponent } from './visacompanydesignation.component';

describe('VisacompanydesignationComponent', () => {
  let component: VisacompanydesignationComponent;
  let fixture: ComponentFixture<VisacompanydesignationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisacompanydesignationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisacompanydesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
