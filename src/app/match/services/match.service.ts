import { Iqueue } from './../interfaces/iqueue';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  constructor(private req: RequestService) { }

  getMatchQueueData(): Observable<Iqueue[]> {
    return this.req.get<Iqueue[]>('http://localhost:8080/queue/all');
  }
}
