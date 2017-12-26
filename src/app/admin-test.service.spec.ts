import { TestBed, inject } from '@angular/core/testing';

import { AdminTestService } from './admin-test.service';

describe('AdminTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminTestService]
    });
  });

  it('should be created', inject([AdminTestService], (service: AdminTestService) => {
    expect(service).toBeTruthy();
  }));
});
