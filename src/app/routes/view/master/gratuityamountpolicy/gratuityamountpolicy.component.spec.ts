import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GratuityamountpolicyComponent } from './gratuityamountpolicy.component';

describe('GratuityamountpolicyComponent', () => {
  let component: GratuityamountpolicyComponent;
  let fixture: ComponentFixture<GratuityamountpolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GratuityamountpolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GratuityamountpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
