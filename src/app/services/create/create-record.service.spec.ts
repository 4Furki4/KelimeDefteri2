import { TestBed } from '@angular/core/testing';

import { CreateRecordService } from './create-record.service';

describe('CreateRecordService', () => {
  let service: CreateRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
