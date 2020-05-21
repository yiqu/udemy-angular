import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { TweetState, Tweet, UserState } from './rx-store/models';
import { takeUntil } from 'rxjs/operators';
import { NgRxComponentService } from './comp.service';
import { AppState } from './global-store/app.reducer';
import { AuthService } from '../14-auth/auth.service';
import { FireUser } from '../14-auth/auth.model';
import * as fromAuthActions from './auth/auth.actions';
import { Router, ActivatedRoute } from '@angular/router';


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

  signinUserName: string = "test@test.com";
  signinUserPassword: string = "123456";
  signinLoading: boolean;
  signinError: any;

  currentUser: FireUser;

  constructor(public store: Store<AppState>, public ns: NgRxComponentService,
    public as: AuthService, public router: Router, public route: ActivatedRoute) {

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

    this.store.select("verifiedUser").pipe(
      takeUntil(this.compDest$)
    )
    .subscribe(
      (res: UserState) => {
        console.log(res)
        this.signinLoading = res.loading;
        this.signinError = res.error;
        this.currentUser = res.user;
        //this.router.navigate(['landing'], {relativeTo: this.route});
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

  onSignIn() {
    const name = this.signinUserName;
    const pw = this.signinUserPassword;
    this.store.dispatch(new fromAuthActions.LoginStart({email: name, password: pw}));
  }

  onSignOut() {
    this.as.onLogout2();
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
