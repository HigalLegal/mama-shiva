import { Component } from '@angular/core';
import { Food, foodsFakeItalian, foodsFakeIndian, drinksFake } from '../../datas/datas'

@Component({
  selector: 'app-menu-foods',
  templateUrl: './menu-foods.component.html',
  styleUrls: ['./menu-foods.component.css', './menu-foods-responsive.component.css']
})
export class MenuFoodsComponent {

  foodsItalian: Food[];
  foodsIndian: Food[];
  drinks: Food[];

  constructor() {
    this.foodsItalian = foodsFakeItalian;
    this.foodsIndian = foodsFakeIndian;
    this.drinks = drinksFake;
  }

}
