import { Component, OnInit } from '@angular/core';
import { Ingredient } from "app/shared/ingredient";
import { ShoppingListService } from "app/shared/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: []
})
export class ShoppingListComponent implements OnInit {

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.sls.getIngredients();
  }

  ingredients: Ingredient[] =[];

}
