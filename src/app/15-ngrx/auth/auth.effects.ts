import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as fromAuthActions from './auth.actions';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { FirebaseSignUpRestRequestBody, FirebaseSignInResponse, FireUser } from '../../../app/14-auth/auth.model';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../../app/14-auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, from, of, Observable } from 'rxjs';
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';

const baseUrl: string = "https://udemy-angular-665a2.firebaseio.com/";
const baseSignInWithPasswordUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword";
const baseSignUpUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts:signUp";

const saveInfoToLocalStorage = (u: FireUser) => {
  localStorage.setItem("fire-user-ngrx", JSON.stringify(u));
}

const handleAuthentication = (res: any) => {
  console.log("in effect, ", res)
  const info = res.body;
  const expiresInSeconds: number = (+info['expiresIn']);
  const expireDateInSeconds: number = (new Date().getTime()) + ((expiresInSeconds) * 1000);
  const expireDate: Date = new Date(expireDateInSeconds);

  const newUser = new FireUser(
    info['displayName'],
    info['email'],
    info['localId'],
    info['refreshToken'],
    info['registered'],
    info['idToken'],
    expireDate);
  saveInfoToLocalStorage(newUser);
  return new fromAuthActions.Login(newUser);
}

@Injectable()
export class AuthEffects {

  constructor(public actions$: Actions, public as: AuthService, public router: Router, public route: ActivatedRoute) {
  }

  userLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.LOGIN_START),
      switchMap((a: fromAuthActions.LoginStart) => {
        const bod = new FirebaseSignUpRestRequestBody(a.payload.email, a.payload.password);
        const apiKeyParam = {
          key: environment.firebaseConfig.apiKey
        }
        return this.as.postData<FirebaseSignInResponse>(baseSignInWithPasswordUrl, bod, apiKeyParam)
        .pipe(
          map((res: HttpResponse<FirebaseSignInResponse>) => {
            return handleAuthentication(res)
          }),
          catchError((err: HttpErrorResponse) => {
            return of(new fromAuthActions.LoginFailed(this.as.handleErrorNgrx(err)));
          }),
        );
      })
    )
  });

  userLoginRedirect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.LOGIN_DONE),
      tap(() => {
        const snapshot: RouterStateSnapshot = this.router.routerState.snapshot;
        this.router.navigate(['ngrx', 'landing']);
      })
    );
  }, { dispatch: false });


  userLoginAuto$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.LOGIN_AUTO),
      map(() => {
        //console.log("tryna login")
        const localStorageUser: any = JSON.parse(localStorage.getItem("fire-user-ngrx"));
        if (!localStorageUser) {
          return new fromAuthActions.LoginAutoFailed();
        }
        const reg = localStorageUser['registered'];
        const expireDate: Date = new Date(localStorageUser._tokenExpireDate);
        const u: FireUser = new FireUser(localStorageUser.displayName, localStorageUser.email, localStorageUser.localId,
          localStorageUser.refreshToken, reg, localStorageUser._token, expireDate);
        if (u.token) {
          return new fromAuthActions.Login(u);
        }
        console.log(u)
        return new fromAuthActions.LoginAutoFailed();
      })
    )
  });


  userLogout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.LOGOUT_DONE),
      tap(() => {
        this.router.navigate(['ngrx']);
        localStorage.removeItem("fire-user-ngrx");
      })
    );
  }, { dispatch: false });


  // userLogout$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(fromAuthActions.LOGOUT_DONE),
  //     tap(() => {
  //       localStorage.removeItem("fire-user");
  //     })
  //   )
  // });

}
