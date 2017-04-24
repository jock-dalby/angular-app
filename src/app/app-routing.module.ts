import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { NoRecipeDetailComponent } from './recipes/no-recipe-detail/no-recipe-detail.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: NoRecipeDetailComponent},
        {path: 'new', component: RecipeEditComponent},
        // Note: if 'new' was set after ':id', the router would try to parse '/new' as an id and throw and error.
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}

