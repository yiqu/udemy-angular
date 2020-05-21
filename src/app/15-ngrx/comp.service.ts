import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TweetState, Tweet } from './rx-store/models';
import * as TweetsActions from './rx-store/tweets.actions';
import { AppState } from './global-store/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class NgRxComponentService {

  constructor(public store: Store<AppState>) {

  }

  postTweet(t: Tweet) {
    this.store.dispatch(new TweetsActions.PostNewTweetAction(t));
  }

  deleteTweet(t: Tweet) {
    this.store.dispatch(new TweetsActions.DeleteTweetAction(t));
  }

  EditStartTweet(id: string) {
    this.store.dispatch(new TweetsActions.EditTweetAction(id));
  }

  EditSaveTweet(t: Tweet) {
    this.store.dispatch(new TweetsActions.EditSaveTweetAction(t));
  }
}
