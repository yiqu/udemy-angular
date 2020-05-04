import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, Subject, from, of, throwError } from 'rxjs';
import { map, catchError, delay } from 'rxjs/operators';
import { Utilservice } from '../shared/util.service';
import { FirebaseSignUpRestRequestBody } from './auth.model';
import { environment } from 'src/environments/environment';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "https://udemy-angular-665a2.firebaseio.com/";
  private baseSignInWithPasswordUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword";
  private baseSignUpUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts:signUp";

  public refreshClick$: Subject<any> = new Subject<any>();


  constructor(public http: HttpClient, public firestore: AngularFireDatabase,
    public us: Utilservice) {
  }

  createParams() {

  }

  handleError(err: HttpErrorResponse) {
    this.us.openSnackBar("Error! " + err.message);
    return throwError(err);
  }

  postData<T>(url: string, data: any, params?: any): Observable<HttpResponse<T>> {
    const urlPost: string = url;
    let httpParams = new HttpParams();
    if (params) {
      for (const key in params) {
        httpParams = httpParams.set(key, params[key]);
      }
    }
    return this.http.post<T>(urlPost, data, {observe: 'response', params: httpParams}).pipe(
      //delay(2000),
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  }

  updateData<T>(data: any): Observable<HttpResponse<T>> {
    const urlPut: string = "";
    return this.http.put<T>(this.baseUrl + urlPut, data, {observe: 'response'});
  }

  getData<T>(params?: any): Observable<HttpResponse<T>> {
    const urlGet: string = "";
    let httpParams = new HttpParams();
    if (params) {
      for (const key in params) {
        httpParams = httpParams.set(key, params[key]);
      }
    }
    return this.http.get<T>(this.baseUrl + urlGet, {observe: 'response', params: httpParams}).pipe(
     // delay(2000),
     catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  }

  deleteData(tweetId: string) {
    const deleteUrl: string = "";
    return this.http.delete(this.baseUrl + deleteUrl, {observe: 'response'});
  }

  signInUser(email: string, pw: string): Observable<HttpResponse<unknown>> {
    if (email && pw) {
      const bod = new FirebaseSignUpRestRequestBody(email, pw);
      const apiKeyParam = {
        key: environment.firebaseConfig.apiKey
      }
      return this.postData(this.baseSignInWithPasswordUrl, bod, apiKeyParam);
    }
  }

  signUpUser<T>(email: string, pw: string): Observable<HttpResponse<T>> {
    if (email && pw) {
      const bod = new FirebaseSignUpRestRequestBody(email, pw);
      const apiKeyParam = {
        key: environment.firebaseConfig.apiKey
      }
      return this.postData<T>(this.baseSignUpUrl, bod, apiKeyParam);
    }
  }


}
