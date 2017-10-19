import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkingCatComponent } from './walking-cat.component';

describe('WalkingCatComponent', () => {
  let component: WalkingCatComponent;
  let fixture: ComponentFixture<WalkingCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkingCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkingCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
