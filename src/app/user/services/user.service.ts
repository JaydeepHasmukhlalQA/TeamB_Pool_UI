import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Observable } from 'rxjs';
import { IMatch } from '../interfaces/imatch';

import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private req: RequestService) { }

  //username from session storage
  getMatchesData(): Observable<IMatch[]> {
    return this.req.get<IMatch[]>('http://localhost:8080/match/getMatches');
}

  getUserData(username: any): Observable<IUser> {
    return this.req.get<IUser>('http://localhost:8080/player/byUsername', { username: username });
  }

}