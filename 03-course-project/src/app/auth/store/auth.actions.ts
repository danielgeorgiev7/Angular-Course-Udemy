import { Action } from '@ngrx/store';

export const START_SIGNUP = '[Auth] SIGNUP_START';
export const START_LOGIN = '[Auth] START_LOGIN';

export const AUTH_SUCCESS = '[Auth] AUTH_SUCCESS';
export const AUTH_FAIL = '[Auth] AUTH_FAIL';

export const AUTO_LOGIN = '[Auth] AUTO_LOGIN';
export const CLEAR_ERROR = '[Auth] CLEAR_ERROR';
export const LOGOUT = '[Auth] LOGOUT';

export class StartLogin implements Action {
  readonly type = START_LOGIN;
  constructor(public payload: { email: string; password: string }) {}
}

export class StartSignup implements Action {
  readonly type = START_SIGNUP;
  constructor(public payload: { email: string; password: string }) {}
}

export class AuthenticateSuccess implements Action {
  readonly type = AUTH_SUCCESS;

  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
      redirect: boolean;
    }
  ) {}
}

export class AuthenticateFail implements Action {
  readonly type = AUTH_FAIL;
  constructor(public payload: string) {}
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export type AuthActions =
  | StartLogin
  | StartSignup
  | AuthenticateSuccess
  | AuthenticateFail
  | AutoLogin
  | ClearError
  | Logout;
