import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Observable } from 'rxjs';
import { IUserStats } from '../interfaces/iuser-stats';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private req: RequestService) { }

  getUserData(): Observable<IUserStats> {
    return this.req.get<IUserStats>('/assets/test-user.json');
}
}