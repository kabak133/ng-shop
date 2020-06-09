import {Component, OnInit} from '@angular/core';
import {slideInOut} from "../../animations/sliddInOut";
import {Select, Store} from "@ngxs/store";
import {CartGet} from "../../../shared/state/cart/cart.actions";
import {CartState} from "../../../shared/state/cart/cart.state";
import {Observable} from "rxjs";
import {ICartItem} from "../../../shared/models/cart.models";
import {map} from "rxjs/operators";
import {log} from "util";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: slideInOut
})
export class CartComponent implements OnInit {

  cartIsShow = false
  countProducts = 2
  productsInCart = []
  totalPrice: number

  @Select(CartState.cartItems) cartItems$: Observable<ICartItem[]>

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    console.log('cart')
    this.store.dispatch(new CartGet)
    this.cartItems$
      .subscribe(cartItems => {
        this.productsInCart = cartItems
        this.countProducts = cartItems.reduce((acc, {count}) => acc + count, 0 )
        this.totalPrice = cartItems.reduce((acc, {price}) => acc + price, 0 )

      })
  }

  emptyCart(): boolean {
    return this.countProducts === 0
  }

  showSideCart(): void {
    this.cartIsShow = true
  }

  hideSideCart(): void {
    this.cartIsShow = false
  }

}
