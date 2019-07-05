import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Observable } from 'rxjs';
import { IMatch } from '../interfaces/imatch';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private req: RequestService) { }

  //username from session storage
  getMatchesData(): Observable<IMatch[]> {
    return this.req.get<IMatch[]>('http://localhost:8080/match/getMatches');
}
}