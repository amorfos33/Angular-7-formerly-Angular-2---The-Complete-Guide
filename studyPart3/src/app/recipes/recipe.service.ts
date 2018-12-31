import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{
    recipeSelect = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A test Recipe', 'Thi is simple test', 'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg'),
        new Recipe('A test Recipe', 'Thi is simple test', 'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg')
      ];
    getRecipes(){
        return this.recipes.slice();
    }
}