import {Action} from '@ngrx/store';


export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class Singnup implements Action {
    readonly type = SIGNUP;
}
export class Singnin implements Action {
    readonly type = SIGNIN;
}
export class Logout implements Action {
    readonly type = LOGOUT;
}
export class SetToken implements Action {
    readonly type = SET_TOKEN;
    constructor(public payload: string) {}
}

export type AuthActions = Singnup | Singnin | Logout | SetToken;
