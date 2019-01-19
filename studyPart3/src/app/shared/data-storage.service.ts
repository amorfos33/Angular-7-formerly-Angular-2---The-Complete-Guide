import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';

@Injectable()
export class DataStoregeService {
    constructor(private http: Http, private recipeService: RecipeService) {}
    storeRecipes() {
        return this.http.put('https://ng-recipe-book-e8d2e.firebaseio.com/recipe.json', this.recipeService.getRecipes());
    }
    getRecipe() {
        return this.http.get('https://ng-recipe-book-e8d2e.firebaseio.com/recipe.json')
        .map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
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
            (recipes: Recipe) => {
                this.recipeService.setRecipe(recipes);
            }
        );
    }
}
