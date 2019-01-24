import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from './shoping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private subscription: Subscription;
  
  constructor(private shopingListService: ShopingListService) { 
  }

  ngOnInit() {
    this.ingredients = this.shopingListService.getIngredients();
    this.subscription = this.shopingListService.ingredientsChanged
      .subscribe((ingredients: Ingredient[])=>{
        this.ingredients = ingredients;
      });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onEditItem(index: number){
    this.shopingListService.startedEditing.next(index);
  }
}
