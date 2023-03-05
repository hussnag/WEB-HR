import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionmasterComponent } from './religionmaster.component';

describe('ReligionmasterComponent', () => {
  let component: ReligionmasterComponent;
  let fixture: ComponentFixture<ReligionmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReligionmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReligionmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
