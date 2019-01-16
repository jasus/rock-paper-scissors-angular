import { TestBed, inject } from '@angular/core/testing';

import { RockPaperScissorsService } from './rock-paper-scissors.service';

describe('RockPaperScissorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RockPaperScissorsService]
    });
  });

  it('should be created', inject([RockPaperScissorsService], (service: RockPaperScissorsService) => {
    expect(service).toBeTruthy();
  }));
});
