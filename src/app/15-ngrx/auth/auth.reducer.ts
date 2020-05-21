import { FireUser } from "../../../app/14-auth/auth.model";
import { UserState } from '../rx-store/models';
import { AuthAction } from './auth.actions';
import * as fromAuthAction from './auth.actions';


const inititalState: UserState = {
  user: null
}


export function authReducer(state = inititalState, action: AuthAction): UserState {
  switch (action.type) {
    case fromAuthAction.LOGIN_DONE: {
      const u = action.payload;
      return {
        ...state,
        user: u
      }
    }
    case fromAuthAction.LOGOUT_DONE: {
      const u = action.payload;
      return {
        ...state,
        user: u
      }
    }
    default: {
      return state;
    }
  }


}
