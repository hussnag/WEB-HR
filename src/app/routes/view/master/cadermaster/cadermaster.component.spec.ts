import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadermasterComponent } from './cadermaster.component';

describe('CadermasterComponent', () => {
  let component: CadermasterComponent;
  let fixture: ComponentFixture<CadermasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadermasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
