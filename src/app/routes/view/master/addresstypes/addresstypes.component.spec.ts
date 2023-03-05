import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresstypesComponent } from './addresstypes.component';

describe('AddresstypesComponent', () => {
  let component: AddresstypesComponent;
  let fixture: ComponentFixture<AddresstypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresstypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresstypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
