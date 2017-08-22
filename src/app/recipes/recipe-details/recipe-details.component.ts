import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "app/recipes/recipe";
import { Ingredient } from "app/shared/ingredient";
import { ShoppingListService } from "app/shared/shopping-list.service";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styles: []
})
export class RecipeDetailsComponent implements OnInit {

  constructor(private sls: ShoppingListService) { }

  @Input() selectedRecipe : Recipe;

  ngOnInit() {
  }

  addToShoppingList(input: Ingredient[])
  {
    this.sls.addToShoppingList(input);
  }
}
