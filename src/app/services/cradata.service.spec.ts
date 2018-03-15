import { TestBed, inject } from '@angular/core/testing';

import { CradataService } from './cradata.service';

describe('CradataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CradataService]
    });
  });

  it('should be created', inject([CradataService], (service: CradataService) => {
    expect(service).toBeTruthy();
  }));
});
