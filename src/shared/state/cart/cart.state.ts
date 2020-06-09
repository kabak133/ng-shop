import {Injectable} from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import {CartAdd, CartGet, CartSetCountItem} from './cart.actions';
import {CartStateModel, ICartItem} from "../../models/cart.models";

import {ApiCartService} from "../../../services/api/api-cart.service";
import {take} from "rxjs/operators";
import {patch, removeItem, updateItem, append} from "@ngxs/store/operators";

export class CartItemModel {
  create(id = 1, name = '', price = 0, count = 1, thumbImage = '') {
    return { id, name, price, count, thumbImage };
  }
}


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
          productInCart: removeItem(item => item.id === id)
        }))
    }
  }

  @Action(CartAdd)
  addToCart({getState, setState, patchState}: StateContext<CartStateModel>, {payload: {id, name, price, images}}) {

    const state = getState()
    const prodIncludeInCart = state.productInCart.find(product => product.id === id)

    if (prodIncludeInCart) {
      setState(
        patch({
          productInCart: updateItem(
            item => item.id === id,
            patch({count: prodIncludeInCart.count + 1})
          )
        }))
    } else {
      const createNewProduct = new CartItemModel
      patchState({
        productInCart: [...state.productInCart, createNewProduct.create(id, name, price, 1, images[0].thumbImage)]
      });

    }
  }
}
