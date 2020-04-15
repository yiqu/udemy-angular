import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Tweet } from './http.component';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpPracService {

  private baseUrl: string = "https://udemy-angular-665a2.firebaseio.com/";
  public refreshClick$: Subject<any> = new Subject<any>();

  constructor(public http: HttpClient) {

  }

  postData<T>(data: Tweet): Observable<HttpResponse<T>> {
    const urlPost: string = "tweets.json";
    return this.http.post<T>(this.baseUrl + urlPost, data, {observe: 'response'});
  }

  getData<T>(): Observable<HttpResponse<T>> {
    const urlGet: string = "tweets.json";
    return this.http.get<T>(this.baseUrl + urlGet, {observe: 'response'});
  }

}
