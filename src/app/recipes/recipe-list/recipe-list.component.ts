import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipesWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Thi is a simple Test', 'https://blog.restorando.com/wp-content/uploads/2017/12/flan-3-1.jpg' ),
    new Recipe('Other Test Recipe', 'Thi is a simple Other Test', 'https://blog.restorando.com/wp-content/uploads/2017/12/flan-3-1.jpg' )
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipesWasSelected.emit(recipe);
  }
}
