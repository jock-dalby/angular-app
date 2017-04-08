import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'; // Import class 'Recipe' from model

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [ // Shows the 'recipes' property, is an array of objects, each of the type 'Recipe'.
      new Recipe('Test Recipe', 'This is a test', 'http://maxpixel.freegreatpicture.com/static/photo/640/Cheese-Lunch-Slice-Pizza-Toppings-Italian-Dinner-329523.jpg') // Using the 'new' keyword we can create a new object based on the Recipe blueprint by calling the constructor function.
  ];

  constructor() { }

  ngOnInit() {
  }

}
