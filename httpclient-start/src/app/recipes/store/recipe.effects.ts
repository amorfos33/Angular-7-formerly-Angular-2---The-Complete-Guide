import { Effect, Actions } from '@ngrx/effects';
import * as RecipeActions from '../store/recipe.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Recipe } from '../recipe.model';
import { Store } from '@ngrx/store';
import * as fromRecipe from '../store/recipe.reducers';


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


    @Effect({dispatch: false})
    recipeStore = this.actions$
        .ofType(RecipeActions.STORE_RECIPES)
        .withLatestFrom(this.store.select('recipes'))
        .switchMap(([action, state]) => {
            const req = new HttpRequest('PUT', 'https://ng-recipe-book-e8d2e.firebaseio.com/recipe.json', state.recipes, {
            reportProgress: true});
        return this.httpClient.request(req);
        });
    constructor (private actions$: Actions,
                private httpClient: HttpClient,
                private store: Store<fromRecipe.FeatureState>) {}
}
