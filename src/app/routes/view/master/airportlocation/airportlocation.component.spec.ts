import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportlocationComponent } from './airportlocation.component';

describe('AirportlocationComponent', () => {
  let component: AirportlocationComponent;
  let fixture: ComponentFixture<AirportlocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportlocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
