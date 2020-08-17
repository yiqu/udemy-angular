import { createSelector, createReducer, createFeatureSelector } from '@ngrx/store';
import { ICarState, TweetState, UserState } from './models';
import { AppState } from '../global-store/app.reducer';

export const selectDriver = (state: ICarState) => state.driver;
export const selectStartDate = (state: ICarState) => state.carStartedDate;

export const selectBothSelector = createSelector(
  selectDriver,
  selectStartDate,
  (driver, date) => {
    return driver + " started the car on date: " + date;
  }
); // it has a memoized value of null, because it has not yet been invoked.



/**
 * Specfic feature states of the AppState
 *
 * Slices of the AppState
 */
export const getCarState = createFeatureSelector<AppState, ICarState>('car');
export const getTweetState = createFeatureSelector<AppState, TweetState>('userTweets');
export const getUserState = createFeatureSelector<AppState, UserState>('verifiedUser');


export const selectFeatureCarDriver = createSelector(
  getCarState,
  (state: ICarState) => {
    return state.driver + " is driving the car.";
  }
);

export const selectFeatureTweet = createSelector(
  getTweetState,
  (state: TweetState) => state
);

export const selectFeatureUser = createSelector(
  getUserState,
  (state: UserState) => state
);

