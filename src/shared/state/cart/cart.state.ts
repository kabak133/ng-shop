import {Injectable} from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import {CartGet} from './cart.actions';
import {CartStateModel, ICartItem} from "../../models/cart.models";

import {ApiCartService} from "../../../services/api/api-cart.service";
import {take} from "rxjs/operators";


const defaults = {
  productInCart: []
};

@State<CartStateModel>({
  name: 'cart',
  defaults
})
@Injectable()
export class CartState {
  constructor(private apiCart: ApiCartService) {
  }

  @Selector()
  static cartItems(state: CartStateModel){
    return state.productInCart
  }


  @Action(CartGet)
  get({patchState}: StateContext<CartStateModel>) {
    return this.apiCart.getCart()
      .pipe(
        take(1)
      )
      .subscribe((cartItems: ICartItem[]) => {
        console.log(cartItems)
        patchState({
          productInCart: cartItems
        })
      })


  }
}
