import {Component, Input, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';
import {ICartItem} from "../../../../shared/models/cart.models";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() productItem: ICartItem;

  constructor() {
  }

  ngOnInit(): void {
  }

  productCountChanged({model}) {
    this.setCountProducts(model)
  }

  decrementCountProduct() {
    this.setCountProducts(this.productItem.count - 1)
  }

  incrementCountProduct() {
    this.setCountProducts(this.productItem.count + 2)
  }

  setCountProducts(count: number) {
    this.productItem.count = count
  }

}
