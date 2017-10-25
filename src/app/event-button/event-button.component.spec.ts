import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventButtonComponent } from './event-button.component';

describe('EventButtonComponent', () => {
  let component: EventButtonComponent;
  let fixture: ComponentFixture<EventButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
