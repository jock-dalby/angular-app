import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipesService} from '../../service'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe; // Create property recipe of type Recipe which is passed in from a parent component 'Input()'
  @Input() index: number;

  constructor(
      private recipesService: RecipesService
  ) {}

  ngOnInit() {
  }

}
