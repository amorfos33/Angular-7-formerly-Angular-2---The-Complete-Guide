import {Effect, Actions, ofType} from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as AuthActions from './auth.actions';
import { map, switchMap } from 'rxjs/operators';
import * as firebase from 'firebase';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { mergeMap } from 'rxjs-compat/operator/mergeMap';

@Injectable()
export class AuthEffects {
    @Effect()
    authSignup = this.actions$.pipe(
        ofType(AuthActions.TRY_SIGNUP),
        map((action: AuthActions.TrySignup) => {
            return action.payload;
        }),
        switchMap((authData: {username: string, password: string}) => {
            return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
        }),
        switchMap(() => {
            return fromPromise(firebase.auth().currentUser.getIdToken());
        }),
        mergeMap((token: string) => {
            return [
                {
                    type: AuthActions.SIGNUP
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ];
        })
    );

    constructor(private actions$: Actions) {}
}
