import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }


  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url, {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    })
  }
}