import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor() { }

  ingredients:  Ingredient[] = [
    new Ingredient('Apples', 5), // Use Ingredient constructor method
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    // Will return an array that is an exact copy of recipes but not a direct reference to it. This will prevent the original array from getting altered or deleted from outside this file.
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    // Add new ingredient to ingredients array.
    this.ingredients.push(ingredient);
    // When a new ingredient is added we send out an EventEmitter so any subscribed components are sent the updated array.
    this.ingredientsChanged.emit(this.ingredients);
  }

}
