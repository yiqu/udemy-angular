import { createSelector, createReducer, createFeatureSelector } from '@ngrx/store';
import { ICarState, TweetState, UserState } from './models';
import { AppState } from '../global-store/app.reducer';


/**
 * Selectors has memoization
 */

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

export const carStartedDateSelector = createSelector(
  getCarState,
  (state: ICarState) => {
    return "Your car start date is " + state.carStartedDate + ".";
  }
);

export const carStartedSelector = createSelector(
  getCarState,
  (state: ICarState) => {
    return "Is car started: " + state.carStarted + ".";
  }
);

export const selectFeatureTweet = createSelector(
  getTweetState,
  (state: TweetState) => {
    return state;
  }
);

export const selectFeatureUser = createSelector(
  getUserState,
  (state: UserState) => {
    return state;
  }
);

/**
 * Combing data from two feature slices
 *
 * car and user tweets can be selected with feature selectors and interact with the data.
 * This elimates the uses of combineLatest for 2 different store.select()'s
 */
export const aFeatureState = createFeatureSelector<ICarState>('car');
export const aFeatureState2 = createFeatureSelector<TweetState>('userTweets');

export const driverTweets = createSelector(
  aFeatureState,
  aFeatureState2,
  (state: ICarState, ts: TweetState) => {

    return {
      ...state,
      ...ts
    };
  }
);
