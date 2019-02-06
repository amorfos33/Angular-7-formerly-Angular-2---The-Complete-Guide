import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://ng-recipe-book-e8d2e.firebaseio.com/recipe.json?auth=' + token, this.recipeService.getRecipes());
    }
    getRecipe() {
        const token = this.authService.getToken();
        return this.http.get('https://ng-recipe-book-e8d2e.firebaseio.com/recipe.json?auth=' + token)
        .map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                // tslint:disable-next-line:prefer-const
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        )
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}
