import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationmasterComponent } from './relationmaster.component';

describe('RelationmasterComponent', () => {
  let component: RelationmasterComponent;
  let fixture: ComponentFixture<RelationmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
