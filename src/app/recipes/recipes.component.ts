import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/recipes/recipe";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styles: []
})
export class RecipesComponent implements OnInit {

  constructor() { }
  selectedRecipe : Recipe;

  ngOnInit() {
  }

}
