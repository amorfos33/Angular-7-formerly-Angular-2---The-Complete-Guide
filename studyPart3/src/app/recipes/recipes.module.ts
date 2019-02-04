import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipesListComponent,
    RecipeEditComponent,
    RecipesDetailComponent,
    RecipesItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule {}
