import {Component, OnDestroy, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model'; // Import class 'Recipe' from model
import { RecipesService } from '../service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
      private recipesService: RecipesService,
      private router: Router
  ) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();

    this.subscription = this.recipesService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
  }


  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
