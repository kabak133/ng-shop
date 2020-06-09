import {Component, Input, OnInit} from '@angular/core';
import {ICartItem} from "../../../../shared/models/cart.models";
import {Store} from "@ngxs/store";
import {CartSetCountItem} from "../../../../shared/state/cart/cart.actions";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() productItem: ICartItem;
  countOfProducts = 0

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.countOfProducts = this.productItem.count
  }

  productCountChanged({model}) {
    this.setCountProducts(model)
  }

  decrementCountProduct() {
    this.setCountProducts(this.countOfProducts - 1)
  }

  incrementCountProduct() {
    this.setCountProducts(this.countOfProducts + 1)
  }

  setCountProducts(count: number) {
    this.store.dispatch(new CartSetCountItem({...this.productItem, count}))
  }

}
