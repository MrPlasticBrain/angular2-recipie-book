import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "app/recipes/recipe";
import { RecipesService } from "app/recipes/recipes.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [],
  providers: [RecipesService]
})
export class RecipeListComponent implements OnInit {

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
  }
  dummyRecipe1 = new Recipe('Dummy recipe 1','Dummy recipe 1 description','https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png', []);
  dummyRecipe2 = new Recipe('Dummy recipe 2','Dummy recipe 2 description','http://www.lakritzplanet.de/wp-content/uploads/2013/06/rezept-150x150.jpg', [] );
  dummyRecipe3 = new Recipe('Dummy recipe 3','Dummy recipe 3 description','https://static1.squarespace.com/static/55046251e4b00ffe14052494/t/55426539e4b03d711b26c456/1430414654082/', []);

  recipes: Array<Recipe> = [
    this.dummyRecipe1,
    this.dummyRecipe2,
    this.dummyRecipe3
  ];

  @Output() emitRecipe = new EventEmitter<Recipe>();

  recipeSelected(input:Recipe){
    this.emitRecipe.emit(input);
  }
}
