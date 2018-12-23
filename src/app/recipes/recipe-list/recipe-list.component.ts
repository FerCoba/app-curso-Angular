import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Thi is a simple Test', 'https://blog.restorando.com/wp-content/uploads/2017/12/flan-3-1.jpg' )
  ];

  constructor() { }

  ngOnInit() {
  }

}
