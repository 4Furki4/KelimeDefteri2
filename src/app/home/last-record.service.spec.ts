import { TestBed } from '@angular/core/testing';

import { LastRecordService } from './last-record.service';

describe('LastRecordService', () => {
  let service: LastRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
