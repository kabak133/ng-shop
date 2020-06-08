import {Injectable} from '@angular/core';
import {State, Action, StateContext} from '@ngxs/store';
import {GetProductsListAction} from './products-list.actions';
import {ProductItemModel} from "../../models/product-item-model";
import {ApiProductsService} from "../../../services/api-products.service";

export class ProductsListStateModel {
  public productsList: ProductItemModel[];
}

const defaults = {
  productsList: []
};

@State<ProductsListStateModel>({
  name: 'productsList',
  defaults
})
@Injectable()
export class ProductsListState {
  constructor(private apiProductsService: ApiProductsService) {
  }

  @Action(GetProductsListAction)
  getProDuctList({getState, setState}: StateContext<ProductsListStateModel>) {
    // const state = getState();
    //setState({ items: [ ...state.items, payload ] });
    this.apiProductsService.getProducts().subscribe((productsList) => {
      console.log(productsList)
      setState({
        productsList
      })
    })
  }
}
