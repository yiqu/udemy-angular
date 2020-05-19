import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { TweetState, AppState, Tweet } from './rx-store/models';
import { takeUntil } from 'rxjs/operators';
import { NgRxComponentService } from './comp.service';


@Component({
  selector: 'app-ngrx',
  templateUrl: 'ngrx.component.html',
  styleUrls: ['./ngrx.component.css']
})
export class NgrxComponent implements OnInit, OnDestroy {

  userTweets$: Observable<TweetState>;
  userPostedTweets: Tweet[] = [];
  compDest$: Subject<any> = new Subject<any>();
  userName: string = "Me";
  userTweet: string = "Something...";

  constructor(public store: Store<AppState>, public ns: NgRxComponentService) {

  }

  ngOnInit() {
    // userTweets property is defined in module file
    this.store.select('userTweets').pipe(
      takeUntil(this.compDest$)
    )
    .subscribe(
      (res: TweetState) => {
        this.userPostedTweets = res.postedTweets;
      },
      (err) => {
      },
      () => {
        console.log("done");
      }
    )

  }

  onTweetSubmit() {
    if (this.userName, this.userTweet) {
      const tweet = new Tweet(this.userName, this.userTweet, new Date().getTime(),
        Math.random().toString().slice(2), false, "PROGRESS");
      this.ns.postTweet(tweet);
    }

  }

  onTweetEdit(t: Tweet) {
    if (t.editing) {
    } else {
      this.ns.EditStartTweet(t.id);
    }
  }

  onTweetSave(t: Tweet) {
    this.ns.EditSaveTweet(t);
  }


  onTweetDelete(t: Tweet) {
    console.log(t)
    this.ns.deleteTweet(t);
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
