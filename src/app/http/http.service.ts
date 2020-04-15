import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Tweet } from './http.component';
import { Observable, Subject, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class HttpPracService {

  private baseUrl: string = "https://udemy-angular-665a2.firebaseio.com/";
  public refreshClick$: Subject<any> = new Subject<any>();

  // angular fire tweet list
  tweetList: AngularFireList<any>;

  constructor(public http: HttpClient, public firestore: AngularFireDatabase) {
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

  postData<T>(data: Tweet): Observable<HttpResponse<T>> {
    const urlPost: string = "tweets.json";
    return this.http.post<T>(this.baseUrl + urlPost, data, {observe: 'response'});
  }

  getData<T>(): Observable<HttpResponse<T>> {
    const urlGet: string = "tweets.json";
    return this.http.get<T>(this.baseUrl + urlGet, {observe: 'response'});
  }

  updateData2(t: Tweet) {
    const ref = this.firestore.object('tweets2');
    return from(ref.update(t));
  }

  postData2(data: Tweet) {
    this.tweetList.push(data);
  }

}
