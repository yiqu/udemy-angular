import { Action } from '@ngrx/store';
import { Tweet } from './models';

export const POST_NEW_TWEET = "POST_NEW_TWEET";
export const DELETE_TWEET = "DELETE_TWEET";
export const EDIT_TWEET = "EDIT_TWEET";
export const EDIT_SAVE_TWEET = "EDIT_SAVE_TWEET";

export class PostNewTweetAction implements Action {
  readonly type = POST_NEW_TWEET;
  payload: Tweet;

  constructor(tweet: Tweet) {
    this.payload = tweet;
  }
}

export class DeleteTweetAction implements Action {
  readonly type = DELETE_TWEET;
  payload: Tweet;

  constructor(tweet: Tweet) {
    this.payload = tweet;
  }
}

export class EditSaveTweetAction implements Action {
  readonly type = EDIT_SAVE_TWEET;
  payload: Tweet;
  constructor(tweet: Tweet) {
    this.payload = tweet;
  }
}

export class EditTweetAction implements Action {
  readonly type = EDIT_TWEET;
  payload: string;
  constructor(id: string) {
    this.payload = id;
  }
}

export type TweetAction =
  PostNewTweetAction
  | DeleteTweetAction
  | EditSaveTweetAction
  | EditTweetAction;
