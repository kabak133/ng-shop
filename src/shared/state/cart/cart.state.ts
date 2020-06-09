import {Injectable} from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import {CartGet, CartSetCountItem} from './cart.actions';
import {CartStateModel, ICartItem} from "../../models/cart.models";

import {ApiCartService} from "../../../services/api/api-cart.service";
import {take} from "rxjs/operators";
import {patch, removeItem, updateItem} from "@ngxs/store/operators";


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
  static cartItems(state: CartStateModel) {
    return state.productInCart
  }


  @Action(CartGet)
  get({patchState}: StateContext<CartStateModel>) {
    return this.apiCart.getCart()
      .pipe(
        take(1)
      )
      .subscribe((cartItems: ICartItem[]) => {
        patchState({
          productInCart: cartItems
        })
      })
  }

  @Action(CartSetCountItem)
  setCountItem({getState, setState, patchState}: StateContext<CartStateModel>, {pl: {id, count}}) {
    if (count > 0) {
      setState(
        patch({
          productInCart: updateItem(
            item => item.id === id,
            patch({count: count})
          )
        }))
    } else {
      setState(
        patch({
          productInCart: removeItem(
            item => item.id === id
          )
        }))
    }
  }
}
