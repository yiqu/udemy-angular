import { FireUser } from "../../../app/14-auth/auth.model";
import { UserState } from '../rx-store/models';
import { AuthAction } from './auth.actions';
import * as fromAuthAction from './auth.actions';


const inititalState: UserState = {
  user: null,
  loading: false,
  error: null
}


export function authReducer(state = inititalState, action: AuthAction): UserState {
  switch (action.type) {
    case fromAuthAction.LOGIN_DONE: {
      const u = action.payload;
      return {
        ...state,
        user: u,
        loading: false,
        error: null
      }
    }
    case fromAuthAction.LOGOUT_DONE: {
      const u = action.payload;
      return {
        ...state,
        user: u,
        loading: false,
        error: null
      }
    }
    case fromAuthAction.LOGIN_START: {
      return {
        ...state,
        user: null,
        loading: true,
        error: null
      }
    }
    case fromAuthAction.LOGIN_FAILED: {
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload
      }
    }
    case fromAuthAction.LOGIN_AUTO_FAILED: {
      return {
        ...state,
        user: null,
        loading: false,
        error:null
      }
    }

    default: {
      return state;
    }
  }


}
