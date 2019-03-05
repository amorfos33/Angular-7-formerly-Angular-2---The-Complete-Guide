import { Effect, Actions } from '@ngrx/effects';
import * as RecipeActions from '../store/recipe.actions';
import 'rxjs/operator/switchMap';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe.model';

export class RecipeEffects {
    @Effect()
    recipeFetch = this.actions$
        .ofType(RecipeActions.FETCH_RECIPE)
        .switchMap((action: RecipeActions.FetchRecipe) => {
            return this.httpClient.get<Recipe []>('https://ng-recipe-book-e8d2e.firebaseio.com/recipe.json', {
                observe: 'body',
                responseType: 'json'
                });
            })
            .map(
                (recipes) => {
                console.log(recipes);
                // tslint:disable-next-line:prefer-const
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                    recipe['ingredients'] = [];
                    }
                }
                return {
                    type: RecipeActions.SET_RECIPES,
                    payload: recipes
                };
        }
        );

    constructor (private actions$: Actions,
                private httpClient: HttpClient) {}
}
