import { TestBed } from '@angular/core/testing';

import { RecordDetailService } from './record-detail.service';

describe('RecordDetailService', () => {
  let service: RecordDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
