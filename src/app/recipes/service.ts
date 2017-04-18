import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [ // Shows the 'recipes' property, is an array of objects, each of the type 'Recipe'.
    new Recipe('Cheese Pizza', 'Delicious as bro!', 'http://maxpixel.freegreatpicture.com/static/photo/640/Cheese-Lunch-Slice-Pizza-Toppings-Italian-Dinner-329523.jpg'), // Using the 'new' keyword we can create a new object based on the Recipe blueprint by calling the constructor function.
    new Recipe('Chocolate Brownie', 'Lovely bit of choc', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Whiskey_Chocolate_Cake.jpg/800px-Whiskey_Chocolate_Cake.jpg')
  ];

  constructor(
  ) { }

  getRecipes() {
    // Will return an array that is an exact copy of recipes but not a direct reference to it. This will prevent the original array from getting altered or deleted from outside this file.
    return this.recipes.slice();
  }

}
