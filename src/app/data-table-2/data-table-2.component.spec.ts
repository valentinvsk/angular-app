import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTable2Component } from './data-table-2.component';

describe('DataTable2Component', () => {
  let component: DataTable2Component;
  let fixture: ComponentFixture<DataTable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
