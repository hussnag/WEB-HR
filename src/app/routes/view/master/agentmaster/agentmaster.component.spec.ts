import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentmasterComponent } from './agentmaster.component';

describe('AgentmasterComponent', () => {
  let component: AgentmasterComponent;
  let fixture: ComponentFixture<AgentmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
