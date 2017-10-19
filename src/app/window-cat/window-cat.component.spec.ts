import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowCatComponent } from './window-cat.component';

describe('WindowCatComponent', () => {
  let component: WindowCatComponent;
  let fixture: ComponentFixture<WindowCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
