import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StafftypeComponent } from './stafftype.component';

describe('StafftypeComponent', () => {
  let component: StafftypeComponent;
  let fixture: ComponentFixture<StafftypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StafftypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StafftypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
