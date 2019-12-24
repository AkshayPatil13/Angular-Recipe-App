import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipies: Recipe[] = [
    new Recipe('Recipe 1','Testing Functionality','https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_960_720.jpg'),
    new Recipe('Recipe 2','Testing Functionality','https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
