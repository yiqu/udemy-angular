import { Action } from '@ngrx/store';
import { FireUser } from '../../../app/14-auth/auth.model';
import { HttpErrorResponse } from '@angular/common/http';

export const LOGIN_START = "[Auth] LOG_IN_START";
export const LOGIN_DONE = "[Auth] LOG_IN_DONE";
export const LOGOUT_DONE = "[Auth] LOG_OUT_DONE";
export const LOGIN_FAILED = "[Auth] LOG_IN_FAILED";

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

export class LoginStart implements Action {
  readonly type = LOGIN_START;
  payload: {email: string, password: string};

  constructor(cred: {email: string, password: string}){
    this.payload = cred;
  }
}

export class LoginFailed implements Action {
  readonly type =  LOGIN_FAILED;
  payload: string;

  constructor(payload: string){
    this.payload = payload;
  }
}

export type AuthAction =
    Login
  | Logout
  | LoginStart
  | LoginFailed
