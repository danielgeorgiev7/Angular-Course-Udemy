import { Action } from '@ngrx/store';

export const START_LOGIN = '[Auth] START_LOGIN';
export const LOGIN = '[Auth] LOGIN';
export const LOGIN_FAIL = '[Auth] LOGIN_FAIL';
export const LOGOUT = '[Auth] LOGOUT';

export class StartLogin implements Action {
  readonly type = START_LOGIN;
  constructor(public payload: { email: string; password: string }) {}
}

export class Login implements Action {
  readonly type = LOGIN;

  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
    }
  ) {}
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;
  constructor(public payload: string) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export type AuthActions = Login | Logout | StartLogin | LoginFail;
