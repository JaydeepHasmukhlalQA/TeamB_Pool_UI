import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }

  getUserData(): Observable<IUser>{
    return this.req.get<IUser>('/');
  }


}
