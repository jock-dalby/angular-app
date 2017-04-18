import { Component, OnInit } from '@angular/core';

import { ShoppingListService } from './service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(
      private shoppingListService: ShoppingListService
  ) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    // Subscribe to listen to ingredientsChanged event so notified if ingredients array changes.
    this.shoppingListService.ingredientsChanged.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
    );
  }

}
