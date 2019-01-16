import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { RockPaperScissorsService } from './rock-paper-scissors.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Play } from '../classes/play';
import { environment } from 'src/environments/environment';

describe('RockPaperScissorsService', () => {

  let injector: TestBed;
  let service: RockPaperScissorsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        RockPaperScissorsService
      ]
    });

    injector = getTestBed();
    service = injector.get(RockPaperScissorsService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should be created', inject([RockPaperScissorsService], (service: RockPaperScissorsService) => {
    expect(service).toBeTruthy();
  }));

  describe('getPlays', () => {
    it('should return an Observable<Play[]>', () => {

      const dummyPlays: Play[] = [
        new Play('You win', 'rock', 'scissors', new Date),
        new Play('You lose', 'rock', 'paper', new Date)
      ];
  
      service.getAllHistory().subscribe(plays => {
        expect(plays.length).toBe(2);
        expect(plays).toEqual(dummyPlays);
      });
  
      const req = httpMock.expectOne(`${environment.apiURL}/plays`);
      expect(req.request.method).toBe("GET");
      req.flush(dummyPlays);
    });
  });

  describe('getHand', () => {
    it('should return a number', () => {

      const hand = 1
  
      service.getHand().subscribe(res => {
        expect(res).toEqual(hand);
      });
  
      const req = httpMock.expectOne(`${environment.apiURL}/plays/hand`);
      expect(req.request.method).toBe("GET");
      req.flush(hand);
    });
  });

});
