import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TweetState, AppState, Tweet } from './rx-store/models';
import * as TweetsActions from './rx-store/tweets.actions';

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
