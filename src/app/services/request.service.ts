import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient
    ) { }

  get<T>(
    url: string,
    queryParams?: HttpParams | { [param: string]: string | string[] }
  ): Observable<T> {
    return this.http.get<T>(url, {
      ...httpOptions,
      params: queryParams
    })
  }

  //POST request

  post<T>(url:string, body:any, queryParams?: HttpParams | { [param: string]: string | string[] }): Observable<T> {
    return this.http.post<T>(url, body, {
      ...httpOptions,
      params: queryParams
    });
  
 }


 delete<T>(url:string, queryParams?: HttpParams | { [param: string]: string | string[]}): Observable<T>{
    return this.http.delete<T>(url,{
      ...httpOptions,
      params: queryParams});
 }


 put<T>(url:string, body:any, queryParams?: HttpParams | { [param: string]: string | string[]}): Observable<T>{
  return this.http.put<T>(url, body, {
    ...httpOptions,
    params: queryParams});
}




}
