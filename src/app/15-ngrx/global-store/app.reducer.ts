import { TweetState, UserState } from '../rx-store/models';
import { ActionReducerMap } from '@ngrx/store';
import { userTweetsReducer } from '../rx-store/tweets.reducer';
import { authReducer } from '../auth/auth.reducer';

export interface AppState {
  userTweets: TweetState;
  verifiedUser: UserState;
}


export const appReducers: ActionReducerMap<AppState> = {
  userTweets: userTweetsReducer,
  verifiedUser: authReducer
}
