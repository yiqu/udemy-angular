import { createReducer, on } from '@ngrx/store';
import { ICarState } from './models';
import * as fromCarActions from './car.actions';

/**
 * User Info Initial State
 */
const inititalState: ICarState = {
  carStarted: false,
  driver: null,
  carStartedDate: 0
}

/**
 * This reducer will not emit a new value unless driver is different
 */
export const carReducer = createReducer(
  inititalState,
  on(fromCarActions.carStartup, (state, {user, date}) => {
    // if (state.driver !== user)  {
    //   return {
    //     ...state,
    //     carStarted: true,
    //     driver: user,
    //     carStartedDate: date
    //   }
    // }
    // return state;
    return {
      ...state,
      carStarted: true,
      driver: user,
      carStartedDate: date
    }
  }),
)
