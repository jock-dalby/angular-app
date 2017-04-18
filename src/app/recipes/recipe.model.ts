import { Ingredient } from '../shared/ingredient.model';

export class Recipe { // Export TS class

    public name: string; // Public accessor and can be accessed from outside if using this as an instantiated object
    public description: string; // format => accessor property-name: type;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    } // Constructors allow us to instantiate the recipe object using the Recipe keyword.

}

// A modal is blueprint for objects to be created, here achieved using a vanilla typescript class.
// When the class is instatiated we can create new objects based on this class which defines what a single recipe should look like.

// Instantiate => to represent (an abstraction) by a concrete instance.
