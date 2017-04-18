import { Component, OnInit } from '@angular/core';

import { ShoppingListService } from './service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(
      private shoppingListService: ShoppingListService
  ) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.shoppingListService.ingredientAdded.subscribe(
        (ingredient: Ingredient) => {
          this.ingredients.push(ingredient);
        }
    );
  }

}
