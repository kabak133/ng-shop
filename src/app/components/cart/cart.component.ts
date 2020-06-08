import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  countProducts = 2
  productsInCart= [ 1, 2]

  constructor() { }

  ngOnInit(): void {
  }

  emptyCart() : boolean{
    return this.countProducts === 0
  }

}
