import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Play } from '../classes/play';

@Injectable()
export class RockPaperScissorsService {

  constructor(private http: HttpClient) {
  }

  // API CALLS

  // GET - Get all history
  getAllHistory(): Observable<Play[]> {
    return this.http
      .get<Play[]>(`${environment.apiURL}/plays`);
  }

  // GET - Get a hand
  getHand(): Observable<number> {
    return this.http
      .get<number>(`${environment.apiURL}/plays/hand`);
  }

  // POST - Create a play
  postPlay(play: Play): Observable<Play> {
    return this.http
      .post<Play>(`${environment.apiURL}/plays`, play);
  }

}
