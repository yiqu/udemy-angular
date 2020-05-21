import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, Subject, from, of, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError, delay, tap } from 'rxjs/operators';
import { Utilservice } from '../shared/util.service';
import { FirebaseSignUpRestRequestBody, FireUser } from './auth.model';
import { environment } from 'src/environments/environment';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Tweet } from '../11-http/http.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromAuthActions from '../15-ngrx/auth/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "https://udemy-angular-665a2.firebaseio.com/";
  private baseSignInWithPasswordUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword";
  private baseSignUpUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts:signUp";

  public refreshClick$: Subject<any> = new Subject<any>();

  user$: BehaviorSubject<FireUser> = new BehaviorSubject<FireUser>(null);

  constructor(public http: HttpClient, public firestore: AngularFireDatabase,
    public us: Utilservice, public router: Router, public store: Store) {
  }

  createParams() {

  }

  handleError(err: HttpErrorResponse) {
    this.us.openSnackBar("Error! " + err.message);
    const errMsg: any = err.error.error;
    console.log(err.error.error)
    if ((typeof errMsg === "string") && errMsg.includes("not parse auth")) {
      this.user$.next(null);
    }
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

  updateData<T>(url: string, data: any): Observable<HttpResponse<T>> {
    return this.http.put<T>(this.baseUrl + url, data, {observe: 'response'});
  }

  getData<T>(url: string, params?: any): Observable<HttpResponse<T>> {
    let httpParams = new HttpParams();
    if (params) {
      for (const key in params) {
        httpParams = httpParams.set(key, params[key]);
      }
    }
    return this.http.get<T>(this.baseUrl + url, {observe: 'response', params: httpParams}).pipe(
     // delay(2000),
     catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  }

  deleteData(tweetId: string) {
    const deleteUrl: string = "";
    return this.http.delete(this.baseUrl + deleteUrl, {observe: 'response'});
  }

  signInUser<T>(email: string, pw: string): Observable<HttpResponse<T>> {
    if (email && pw) {
      const bod = new FirebaseSignUpRestRequestBody(email, pw);
      const apiKeyParam = {
        key: environment.firebaseConfig.apiKey
      }
      return this.postData<T>(this.baseSignInWithPasswordUrl, bod, apiKeyParam).pipe(
        catchError(this.handleFirebaseSignInUpError),
        tap((u: HttpResponse<T>) => this.handleAuthentication(u))
      );;
    }
  }

  signInUserAndNgrx<T>(email: string, pw: string): Observable<HttpResponse<T>> {
    if (email && pw) {
      const bod = new FirebaseSignUpRestRequestBody(email, pw);
      const apiKeyParam = {
        key: environment.firebaseConfig.apiKey
      }
      return this.postData<T>(this.baseSignInWithPasswordUrl, bod, apiKeyParam).pipe(
        catchError(this.handleFirebaseSignInUpError),
        tap((u: HttpResponse<T>) => this.handleAuthenticationAndNgrx(u))
      );;
    }
  }

  signUpUser<T>(email: string, pw: string): Observable<HttpResponse<T>> {
    if (email && pw) {
      const bod = new FirebaseSignUpRestRequestBody(email, pw);
      const apiKeyParam = {
        key: environment.firebaseConfig.apiKey
      }
      return this.postData<T>(this.baseSignUpUrl, bod, apiKeyParam).pipe(
        catchError(this.handleFirebaseSignInUpError),
        tap((u: HttpResponse<T>) => this.handleAuthentication(u))
      );
    }
  }

  handleFirebaseSignInUpError(errResponse) {
    console.log(errResponse)
    let errMessage: string = "An server error has occured.";
    if (!errResponse.error || !errResponse.error.error) {
      return throwError(errMessage);
    }
    switch (errResponse.error.error.message) {
      case "EMAIL_EXISTS": {
        errMessage = "This email has already been registered.";
        break;
      }
      case "TOO_MANY_ATTEMPTS_TRY_LATER": {
        errMessage = "Too many failed login attempts, try again later.";
        break;
      }
      case "WEAK_PASSWORD": {
        errMessage = "Password should be at least 6 characters";
        break;
      }
      case "EMAIL_NOT_FOUND": {
        errMessage = "The account you are trying to sign in with does not exist.";
        break;
      }
      case "INVALID_PASSWORD": {
        errMessage = "Invalid password.";
        break;
      }
      case "USER_DISABLED": {
        errMessage = "This user has been disabled";
        break;
      }
      default: {
        errMessage = errResponse.error.error.message;
      }
    }
    return throwError(errMessage);
  }

  handleErrorNgrx(errResponse: HttpErrorResponse): string {
    let errMessage: string = "An server error has occured.";
    if (!errResponse.error || !errResponse.error.error) {
      return (errMessage);
    }
    switch (errResponse.error.error.message) {
      case "EMAIL_EXISTS": {
        errMessage = "This email has already been registered.";
        break;
      }
      case "TOO_MANY_ATTEMPTS_TRY_LATER": {
        errMessage = "Too many failed login attempts, try again later.";
        break;
      }
      case "WEAK_PASSWORD": {
        errMessage = "Password should be at least 6 characters";
        break;
      }
      case "EMAIL_NOT_FOUND": {
        errMessage = "The account you are trying to sign in with does not exist.";
        break;
      }
      case "INVALID_PASSWORD": {
        errMessage = "Invalid password.";
        break;
      }
      case "USER_DISABLED": {
        errMessage = "This user has been disabled";
        break;
      }
      default: {
        errMessage = errResponse.error.error.message;
      }
    }
    return (errMessage);
  }

  handleAuthentication<T>(u: HttpResponse<T>) {
    const info = u.body;
    const expiresInSeconds: number = (+info['expiresIn']);
    const expireDateInSeconds: number = (new Date().getTime()) + ((expiresInSeconds) * 1000);
    const expireDate: Date = new Date(expireDateInSeconds);

    const newUser = new FireUser(
      info['displayName'],
      info['email'],
      info['localId'],
      info['refreshToken'],
      info['registered'],
      info['idToken'],
      expireDate);

    this.user$.next(newUser);
    this.saveInfoToLocalStorage(newUser);
  }

  handleAuthenticationAndNgrx<T>(u: HttpResponse<T>) {
    const info = u.body;
    const expiresInSeconds: number = (+info['expiresIn']);
    const expireDateInSeconds: number = (new Date().getTime()) + ((expiresInSeconds) * 1000);
    const expireDate: Date = new Date(expireDateInSeconds);

    const newUser = new FireUser(
      info['displayName'],
      info['email'],
      info['localId'],
      info['refreshToken'],
      info['registered'],
      info['idToken'],
      expireDate);

    this.store.dispatch(new fromAuthActions.Login(newUser));
    this.saveInfoToLocalStorage(newUser);
  }

  getTweets(): Observable<Tweet[]> {
    return this.getData("tweets2.json").pipe(
      map((val: HttpResponse<any>) => {
        const res = val.body;

        let list: Tweet[] = [];
        for (const key in res) {
          const t: Tweet = res[key];
          list.push(new Tweet(t.userName, t.content, t.date, key));
        }
        return list.sort((a: Tweet, b: Tweet) => {
          return a.date < b.date ? 1: -1;
        });
      })
    );
  }

  onLogout() {
    localStorage.removeItem("fire-user");
    this.user$.next(null);
    this.router.navigate(['./', 'auth']);
  }

  onLogout2() {
    localStorage.removeItem("fire-user");
    this.store.dispatch(new fromAuthActions.Logout(null));
  }

  tryAutoLogin() {
    const localStorageUser: any = JSON.parse(localStorage.getItem("fire-user"));
    if (!localStorageUser) {
      return;
    }
    const reg = localStorageUser['registered'];
    const expireDate: Date = new Date(localStorageUser._tokenExpireDate);
    const u: FireUser = new FireUser(localStorageUser.displayName, localStorageUser.email, localStorageUser.localId,
      localStorageUser.refreshToken, reg, localStorageUser._token, expireDate);
    if (u.token) {
      this.user$.next(u);
    }
  }

  tryAutoLoginNgrx() {
    const localStorageUser: any = JSON.parse(localStorage.getItem("fire-user"));
    if (!localStorageUser) {
      return;
    }
    const reg = localStorageUser['registered'];
    const expireDate: Date = new Date(localStorageUser._tokenExpireDate);
    const u: FireUser = new FireUser(localStorageUser.displayName, localStorageUser.email, localStorageUser.localId,
      localStorageUser.refreshToken, reg, localStorageUser._token, expireDate);
    if (u.token) {
      console.log("auto logging in now...")
      this.store.dispatch(new fromAuthActions.Login(u));
    }
  }

  saveInfoToLocalStorage(u: FireUser) {
    localStorage.setItem("fire-user", JSON.stringify(u));
  }


}
