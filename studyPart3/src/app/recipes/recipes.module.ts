import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';
import { RecipeRoutingModule } from './recipes-routing.module';


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
        RecipeRoutingModule
    ]
})
export class RecipesModule {}
