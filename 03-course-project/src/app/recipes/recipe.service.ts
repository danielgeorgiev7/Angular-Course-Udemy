import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      ' This is simply a test',
      'https://miro.medium.com/v2/resize:fit:1400/1*CJzrbVAPRaJsH5ZaJa_q4Q.jpeg',
      [new Ingredient('Meat', 1), new Ingredient('French fries', 20)]
    ),
    new Recipe(
      'A test Recipe',
      ' This is simply a test',
      'https://miro.medium.com/v2/resize:fit:1400/1*CJzrbVAPRaJsH5ZaJa_q4Q.jpeg',
      [new Ingredient('Buns', 1), new Ingredient('Meat', 2)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
