import { TweetState, UserState, ICarState } from '../rx-store/models';
import { ActionReducerMap } from '@ngrx/store';
import { userTweetsReducer } from '../rx-store/tweets.reducer';
import { authReducer } from '../auth/auth.reducer';
import { carReducer } from '../rx-store/car.reducer';

export interface AppState {
  userTweets: TweetState;
  verifiedUser: UserState;
  car: ICarState
}


export const appReducers: ActionReducerMap<AppState> = {
  userTweets: userTweetsReducer,
  verifiedUser: authReducer,
  car: carReducer
}
