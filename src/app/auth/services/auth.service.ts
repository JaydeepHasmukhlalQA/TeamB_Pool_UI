import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../user';
import { RequestService } from 'src/app/services/request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private req: RequestService) { }



  getUserData(username): Observable<IUser> {
    return this.req.get<IUser>('/byUsername/'+ username);
  }

  sendUserData(): Observable<IUser>  {
    return this.req.set<IUser>('/createPlayer');
  };

  



}
