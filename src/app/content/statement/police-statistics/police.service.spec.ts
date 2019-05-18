import { TestBed } from '@angular/core/testing';

import { PoliceService } from './police.service';

describe('PoliceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoliceService = TestBed.get(PoliceService);
    expect(service).toBeTruthy();
  });
});
