import { TestBed } from '@angular/core/testing';

import { HistoryMessageService } from './history-message.service';

describe('HistoryMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistoryMessageService = TestBed.get(HistoryMessageService);
    expect(service).toBeTruthy();
  });
});
