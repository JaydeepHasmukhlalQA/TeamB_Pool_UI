import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private req: RequestService) { }

  getUserData(username:any): Observable<IUser> {
    return this.req.get<IUser>('/byUsername/' + username);
}

 
}