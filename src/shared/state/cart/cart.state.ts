import {Injectable} from '@angular/core';
import {State, Action, StateContext} from '@ngxs/store';
import {CartGet} from './cart.actions';
import {CartStateModel} from "../../models/cart.models";


const defaults = {
  items: []
};

@State<CartStateModel>({
  name: 'cart',
  defaults
})
@Injectable()
export class CartState {


  @Action(CartGet)
  get({getState, setState}: StateContext<CartStateModel>, {payload}: CartGet) {
    const state = getState();
    setState({items: [...state.items, payload]});
  }
}
