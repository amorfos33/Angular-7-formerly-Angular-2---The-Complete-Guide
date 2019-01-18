import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe(
            'A test Recipe',
            'Thi is simple test',
// tslint:disable-next-line:max-line-length
'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/enchiladas-aux-legumes-1a1102aa.jpg',
            [
                new Ingredient('Meate', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'A test Recipe',
            'Thi is simple test',
'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meate', 1)
            ])
      ];
    constructor(private slService: ShoppingListService) {}
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index: number) {
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: null) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
