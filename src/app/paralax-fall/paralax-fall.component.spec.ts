import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParalaxFallComponent } from './paralax-fall.component';

describe('ParalaxFallComponent', () => {
  let component: ParalaxFallComponent;
  let fixture: ComponentFixture<ParalaxFallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParalaxFallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParalaxFallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
