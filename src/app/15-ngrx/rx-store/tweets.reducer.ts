import { Action } from '@ngrx/store';
import * as TweetsActions from '../rx-store/tweets.actions';
import { TweetState, Tweet } from './models';


const inititalState: TweetState = {
  postedTweets: [
    new Tweet("Kevin", "Hello Reducers!", new Date().getTime(), "0", false, "SENT"),
    new Tweet("Kevin", "Hello Actions!", new Date().getTime(), "1", false, "SENT"),
  ]
}

export function userTweetsReducer(state: TweetState = inititalState,
  action: TweetsActions.TweetAction): TweetState {

  switch (action.type) {
    case TweetsActions.POST_NEW_TWEET: {
      return {
        ...state,
        postedTweets: [...state.postedTweets, action.payload]
      }
    }
    case TweetsActions.DELETE_TWEET: {
      const i = state.postedTweets.findIndex((t: Tweet) => {
        return action.payload.id === t.id;
      });

      const na = [...state.postedTweets];
      na.splice(i, 1);

      return {
        ...state,
        postedTweets: [...na]
      }
    }
    case TweetsActions.EDIT_TWEET: {
      const idOfTweet: string = action.payload;
      const i = state.postedTweets.findIndex((t) => {
        return t.id === idOfTweet;
      })
      const tweetBeingEdit = new Tweet(state.postedTweets[i].userName,
        state.postedTweets[i].content,
        state.postedTweets[i].date,
        state.postedTweets[i].id,
        true,
        state.postedTweets[i].sendStatus,
      )
      const updatedTweets = [...state.postedTweets];
      updatedTweets[i] = tweetBeingEdit;

      return {
        ...state,
        postedTweets: updatedTweets
      }
    }
    case TweetsActions.EDIT_SAVE_TWEET: {
      const i = state.postedTweets.findIndex((t) => {
        return t.id === action.payload.id;
      });
      const tweetToUpdate = state.postedTweets[i];
      const updatedTweet = {
        ...tweetToUpdate,
        ...action.payload
      };
      updatedTweet.editing = false;
      const updatedTweets = [...state.postedTweets];
      updatedTweets[i] = updatedTweet;

      return {
        ...state,
        postedTweets: updatedTweets
      }

    }
    default: {
      return state;
    }
  }
}
