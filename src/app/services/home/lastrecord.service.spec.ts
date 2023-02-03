import { TestBed } from '@angular/core/testing';

import { LastrecordService } from './lastrecord.service';

describe('LastrecordService', () => {
  let service: LastrecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastrecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
