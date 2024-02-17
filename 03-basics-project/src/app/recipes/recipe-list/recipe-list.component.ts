import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      ' This is simply a test',
      'https://miro.medium.com/v2/resize:fit:1400/1*CJzrbVAPRaJsH5ZaJa_q4Q.jpeg'
    ),
  ];
}
