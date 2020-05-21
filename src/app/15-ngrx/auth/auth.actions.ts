import { Action } from '@ngrx/store';
import { FireUser } from '../../../app/14-auth/auth.model';

export const LOGIN_DONE = "LOG_IN_DONE";
export const LOGOUT_DONE = "LOG_OUT_DONE";

export class Login implements Action {
  readonly type = LOGIN_DONE;
  payload: FireUser;

  constructor(u: FireUser) {
    this.payload = u;
  }
}

export class Logout implements Action {
  readonly type = LOGOUT_DONE;
  payload: FireUser;
  constructor(u: FireUser) {
    this.payload = u;
  }
}

export type AuthAction =
    Login
  | Logout
