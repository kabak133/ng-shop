import {Injectable} from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import {
  GetProductsListAction,
  GetProductsListByCategory,
  GetProductsListByCategorySort,
  ProductsListBySorting
} from './products-list.actions';
import {ProductItemModel} from "../../models/product-item-model";
import {ApiProductsService} from "../../../services/api/api-products.service";

import {tap} from "rxjs/operators";

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

  @Selector()
  static productsList(state: ProductsListStateModel) {
    return state.productsList
  }

  @Action(GetProductsListAction)
  getProductList({patchState}: StateContext<ProductsListStateModel>) {
    return this.apiProductsService.getProducts()
      .pipe(tap(productsList => patchState({productsList: productsList})))
  }

  @Action(GetProductsListByCategory)
  getProductsListByCategory({patchState}: StateContext<ProductsListStateModel>, {category}: GetProductsListByCategory) {
    return this.apiProductsService.getProductsByCategory({category})
      .pipe(tap(productsList => patchState({productsList: productsList})))
  }


  @Action(ProductsListBySorting)
  getProductsListBySorting({patchState}: StateContext<ProductsListStateModel>, {sorting}: ProductsListBySorting) {
    return this.apiProductsService.getProductsSorting({sorting})
      .pipe(tap(productsList => patchState({productsList: productsList})))
  }

  @Action(GetProductsListByCategorySort)
  GetProductsListByCategorySort({patchState}: StateContext<ProductsListStateModel>, {category, sorting}: GetProductsListByCategorySort) {
    return this.apiProductsService.getProductsCategorySorting({category, sorting})
      .pipe(tap(productsList => patchState({productsList: productsList})))
  }
}
