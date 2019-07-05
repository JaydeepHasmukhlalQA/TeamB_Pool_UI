import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private req: RequestService) { }

  getPlayerData(): Observable<IUser> {
    return this.req.get<IUser>('');
  }
}
