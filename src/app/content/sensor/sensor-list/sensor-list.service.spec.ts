import { TestBed } from '@angular/core/testing';

import { SensorListService } from './sensor-list.service';

describe('SensorListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SensorListService = TestBed.get(SensorListService);
    expect(service).toBeTruthy();
  });
});
