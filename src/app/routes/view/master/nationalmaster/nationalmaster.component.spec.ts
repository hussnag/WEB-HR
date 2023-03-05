import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalmasterComponent } from './nationalmaster.component';

describe('NationalmasterComponent', () => {
  let component: NationalmasterComponent;
  let fixture: ComponentFixture<NationalmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
