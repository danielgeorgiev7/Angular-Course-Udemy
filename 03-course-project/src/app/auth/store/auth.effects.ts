import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable()
export class AuthEffects {
  authLogin = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.START_LOGIN),
      switchMap((authData: AuthActions.StartLogin) => {
        return this.http
          .post<AuthResponseData>(
            'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' +
              environment.firebaseAPIKey,
            {
              email: authData.payload.email,
              password: authData.payload.password,
              returnSecureToken: true,
            }
          )
          .pipe(
            map((resData) => {
              const expirationDate = new Date(
                new Date().getTime() + +resData.expiresIn * 1000
              );

              return new AuthActions.Login({
                email: resData.email,
                userId: resData.email,
                token: resData.idToken,
                expirationDate,
              });
            }),
            catchError((errorRes) => {
              let errorMessage = 'An unknown error occurred!';
              if (!errorRes.error || !errorRes.error.error) {
                return of(new AuthActions.LoginFail(errorMessage));
              }
              switch (errorRes.error.error.message) {
                case 'EMAIL_EXISTS':
                  errorMessage = 'This email exists already';
                  break;
                case 'EMAIL_NOT_FOUND':
                  errorMessage = 'This email does not exist.';
                  break;
                case 'INVALID_PASSWORD':
                  errorMessage = 'This password is not correct.';
                  break;
              }
              return of(new AuthActions.LoginFail(errorMessage));
            })
          );
      })
    )
  );

  authSuccess = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.LOGIN),
        tap(() => {
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
  ) {}
}
