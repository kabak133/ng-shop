import { Component, OnInit } from '@angular/core';
import {slideInOut} from "../animations/sliddInOut";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: slideInOut
})
export class CartComponent implements OnInit {

  cartIsShow = false
  countProducts = 2
  productsInCart= [ 1, 2]

  constructor() { }

  ngOnInit(): void {
  }

  emptyCart() : boolean{
    return this.countProducts === 0
  }

  showSideCart(): void{
    this.cartIsShow = true
  }

  hideSideCart(): void{
    this.cartIsShow = false
  }

}
