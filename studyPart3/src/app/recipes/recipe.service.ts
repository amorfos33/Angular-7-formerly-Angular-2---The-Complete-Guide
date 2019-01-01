import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelect = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'A test Recipe', 
            'Thi is simple test', 
            'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg',
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
    constructor(private slService: ShoppingListService){}
    getRecipes(){
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}