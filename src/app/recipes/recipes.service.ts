import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from '../shoping-list/shoping-list.service';

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
            'Thi is a simple Test', 
            'https://blog.restorando.com/wp-content/uploads/2017/12/flan-3-1.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Pears', 10)
            ] ),
        new Recipe('Other Test Recipe', 
            'Thi is a simple Other Test', 
            'https://placeralplato.com/files/2015/04/Receta-de-milanesas-de-pollo-a-la-napolitana.jpg',
            [new Ingredient('Meat', 1),
            new Ingredient('Buns', 10)
            ])
        ];

    constructor(private shopingListService: ShopingListService){}
     
    getRecipes(){
          return this.recipes.slice();
    }

    addIngredientToShopingList(ingredient: Ingredient[]){
        this.shopingListService.addIngredients(ingredient);

    }

    getRecipe(index: number){
        return this.recipes[index];
    }
}