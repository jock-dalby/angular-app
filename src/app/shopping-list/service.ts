import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  constructor() { }

  ingredients:  Ingredient[] = [
    new Ingredient('Apples', 5), // Use Ingredient constructor method
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    // Will return an array that is an exact copy of recipes but not a direct reference to it. This will prevent the original array from getting altered or deleted from outside this file.
    return this.ingredients.slice();
  }

  getIngredientById(index: number): Ingredient {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    // Add new ingredient to ingredients array.
    this.ingredients.push(ingredient);
    // When a new ingredient is added we send out an EventEmitter so any subscribed components are sent the updated array.
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(newIngredient: Ingredient, index: number) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    console.log(index);
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
