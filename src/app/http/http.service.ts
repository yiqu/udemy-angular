import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Tweet } from './http.component';
import { Observable, Subject, from, of, throwError } from 'rxjs';
import { map, catchError, delay } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Utilservice } from '../shared/util.service';

@Injectable({
  providedIn: 'root'
})
export class HttpPracService {

  private baseUrl: string = "https://udemy-angular-665a2.firebaseio.com/";
  public refreshClick$: Subject<any> = new Subject<any>();

  // angular fire tweet list
  tweetList: AngularFireList<any>;

  constructor(public http: HttpClient, public firestore: AngularFireDatabase,
    public us: Utilservice) {

    this.tweetList = this.firestore.list('tweets2');
    this.tweetList.snapshotChanges().pipe(
      map((changes) => {
        //console.log("tweet snap shot changed: ",changes)
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    ).subscribe((val) => {
      //console.log("tweet snapshot value:",val)
    });

    this.tweetList.valueChanges().subscribe((val) => {
     // console.log("tweet changed: ",val);
    })
  }

  createParams() {

  }

  handleError(err: HttpErrorResponse) {
    this.us.openSnackBar("Error! " + err.message);
    return throwError(err);
  }

  postData<T>(data: Tweet): Observable<HttpResponse<T>> {
    const urlPost: string = "tweets.json";
    return this.http.post<T>(this.baseUrl + urlPost, data, {observe: 'response'}).pipe(
      //delay(2000),
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  }

  updateData<T>(data: Tweet): Observable<HttpResponse<T>> {
    const urlPut: string = "tweets/" + data.id + ".json";
    return this.http.put<T>(this.baseUrl + urlPut, data, {observe: 'response'});
  }

  getData<T>(params?: any): Observable<HttpResponse<T>> {
    const urlGet: string = "tweets.json";
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
    const deleteUrl: string = "tweets/" + tweetId + ".json";
    return this.http.delete(this.baseUrl + deleteUrl, {observe: 'response'});
  }

  updateData2(t: Tweet) {
    const ref = this.firestore.object('tweets2');
    return from(ref.update(t));
  }

  postData2(data: Tweet) {
    this.tweetList.push(data);
  }

}
