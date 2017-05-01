import {Component, OnDestroy, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model'; // Import class 'Recipe' from model
import { RecipesService } from '../service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(
      private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();

    this.subscription = this.recipesService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
