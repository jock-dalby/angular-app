import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService} from '../shopping-list/service';
import {Subject} from 'rxjs/Subject';

@Injectable()

export class RecipesService {

  recipesChanged = new Subject<Recipe[]>();

  recipes: Recipe[] = [ // Shows the 'recipes' property, is an array of objects, each of the type 'Recipe'.
    // Using the 'new' keyword we can create a new object based on the Recipe blueprint by calling the constructor function.
    new Recipe(
        'Cheese Pizza',
        'Delicious as bro!',
        'https://c1.staticflickr.com/7/6215/6306091349_8cf7571ff8_z.jpg',
        [
          new Ingredient('bread', 6),
          new Ingredient('cheese', 4),
          new Ingredient('tomato', 6)
        ]
    ),
    new Recipe(
        'Chocolate Brownie',
        'Lovely bit of choc',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Whiskey_Chocolate_Cake.jpg/800px-Whiskey_Chocolate_Cake.jpg',
        [
          new Ingredient('chocolate', 6),
          new Ingredient('flour', 4),
          new Ingredient('butter', 6)
        ]
    )
  ];

  constructor(
      private shoppingListService: ShoppingListService
  ) { }

  getRecipes() {
    // Will return an array that is an exact copy of recipes but not a direct reference to it. This will prevent the original array from getting altered or deleted from outside this file.
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
      return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

}
