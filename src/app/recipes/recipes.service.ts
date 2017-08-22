import { Injectable } from '@angular/core';
import { Recipe } from "app/recipes/recipe";
import { Ingredient } from "app/shared/ingredient";

@Injectable()
export class RecipesService {

  constructor() { }
  recipes: Recipe[]= [new Recipe('Sarma', 'Cabage and minced meat with rice', 'https://s-media-cache-ak0.pinimg.com/originals/9b/3e/01/9b3e0121c28abb3d7377d826ff2d7369.jpg', [
      new Ingredient('Cabage', '1'),
      new Ingredient('Minced meat', '200g'),
      new Ingredient('Rice', '300g'),
    ]),
    new Recipe('Tavce', 'Beans', 'http://kulinarskikutak.info/wp-content/uploads/2016/04/gravche-tavche.jpg', [
      new Ingredient('Beans', '500g')
    ]),
    new Recipe('Cordon Bleu', 'Meat, cheese, ham', 'http://cookdiary.net/wp-content/uploads/images/Cordon-Bleu_5533.jpg', [
      new Ingredient('Veal', '300g'),
      new Ingredient('Cheese', '200g'),
      new Ingredient('Ham', '100g'),
    ])];

    getRecipes()
    {
      return this.recipes;
    }
}
