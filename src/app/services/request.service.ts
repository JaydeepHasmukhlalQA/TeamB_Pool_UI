import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  //type T, as type will be passed down from [module].service
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
}
