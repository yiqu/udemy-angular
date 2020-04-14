import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpPracService {

  private baseUrl: string = "https://udemy-angular-665a2.firebaseio.com/";

  constructor(public http: HttpClient) {

  }

  postData() {

  }

}
