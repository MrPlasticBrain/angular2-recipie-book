import { Injectable } from '@angular/core';
import { Ingredient } from "app/shared/ingredient";

@Injectable()
export class ShoppingListService {

  constructor() { }

  ingredients: Ingredient[]=[];

  getIngredients()
  {
    return this.ingredients;
  }

  addToShoppingList(input: Ingredient[])
  {
    Array.prototype.push.apply(this.ingredients,input);
  }

}
