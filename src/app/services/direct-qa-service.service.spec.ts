import { TestBed } from '@angular/core/testing';

import { DirectQaServiceService } from './direct-qa-service.service';

describe('DirectQaServiceService', () => {
  let service: DirectQaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectQaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
