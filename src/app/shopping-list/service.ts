import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ingredients:  Ingredient[] = [
    new Ingredient('Apples', 5), // Use Ingredient constructor method
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

}
