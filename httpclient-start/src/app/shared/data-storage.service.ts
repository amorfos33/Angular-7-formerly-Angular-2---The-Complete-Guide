import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService) {
  }

  storeRecipes() {
        // const token = this.authService.getToken();
        // const header = new HttpHeaders().set('Authorization', 'Bearer ddfdfdfdbbfb');
        // tslint:disable-next-line:max-line-length
        // return this.httpClient.put('https://ng-recipe-book-e8d2e.firebaseio.com/recipe.json', this.recipeService.getRecipes(), {
        //     observe: 'body',
        //     // headers: header
        //     params: new HttpParams().set('auth', token)
        // });
        const req = new HttpRequest('PUT', 'https://ng-recipe-book-e8d2e.firebaseio.com/recipe.json', this.recipeService.getRecipes(), {
            reportProgress: true});
        return this.httpClient.request(req);
    }
    getRecipe() {
        // const token = this.authService.getToken();
        // return this.httpClient.get<Recipe []>('https://ng-recipe-book-e8d2e.firebaseio.com/recipe.json?auth=' + token)
        return this.httpClient.get<Recipe []>('https://ng-recipe-book-e8d2e.firebaseio.com/recipe.json', {
            observe: 'body',
            responseType: 'json'
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
