import { Component, OnInit } from '@angular/core';
import { AuthService } from '../14-auth/auth.service';
import { HttpResponse } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { Tweet } from '../11-http/http.component';
import { map, shareReplay, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-main',
  templateUrl: 'rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})

export class RxJsComponent implements OnInit {

  tweets$: Observable<Tweet[]>;

  constructor(private as: AuthService) {
    this.tweets$ = this.getTweets();
  }

  ngOnInit() {
   // this.fetchTweets();
   // this.sharedExample();
  }

  getTweets(): Observable<Tweet[]> {
    return this.as.getData<Tweet[]>("tweets.json").pipe(
      map(res => res.body),
      shareReplay() // only makes the call once
    );
  }

  fetchTweets() {
    const tweets$ = this.getTweets();
    tweets$.subscribe(
      (res) => {
        console.log(res)
      }
    )

    tweets$.subscribe(
      (res) => {
        console.log("again", res);
      }
    )
  }

  /**
   *  source A:  0
      source A:  1
      source A:  2
      source B:  2 <-- after 3 seconds, B starts. and it outputs 2 because the last replayed value was 2, and it is SHARED
      source A:  3
      source B:  3
   */
  sharedExample() {
    const obs$ = interval(1000);
    const shared$ = obs$.pipe(
      take(4),
      shareReplay(1)
    );
    shared$.subscribe(x => console.log('source A: ', x));
    setTimeout(() => {
      shared$.subscribe(y => console.log('source B: ', y));
    }, 3000)
  }
}
