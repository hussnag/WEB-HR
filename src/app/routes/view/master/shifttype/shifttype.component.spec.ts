import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShifttypeComponent } from './shifttype.component';

describe('ShifttypeComponent', () => {
  let component: ShifttypeComponent;
  let fixture: ComponentFixture<ShifttypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShifttypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShifttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
