import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipes.service';
import { Http, Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';


@Injectable()
export class DataStorageService {

    constructor(private http: Http, private recipeService: RecipeService) {
    }

    storeRecipes() {
        return this.http.put('https://ng-recipe-book-c9267.firebaseio.com/recipe.json',
            this.recipeService.getRecipes());
    }
    
    getRecipes() {
        return this.http.get('https://ng-recipe-book-c9267.firebaseio.com/recipe.json')
            .pipe(map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
            )
    }
}
