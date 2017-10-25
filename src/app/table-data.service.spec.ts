import { TestBed, inject } from '@angular/core/testing';

import { TableDataService } from './table-data.service';

describe('TableDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableDataService]
    });
  });

  it('should be created', inject([TableDataService], (service: TableDataService) => {
    expect(service).toBeTruthy();
  }));
});
