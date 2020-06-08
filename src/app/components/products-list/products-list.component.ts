import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {GetProductsListAction} from "../../../shared/state/products-list/products-list.actions";
import {ProductItemModel} from "../../../shared/models/product-item-model";
import {Observable} from "rxjs";

import {ProductsListState} from "../../../shared/state/products-list/products-list.state";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  productList: ProductItemModel[]
  @Select(ProductsListState.productsList) productList$: Observable<ProductItemModel[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.productList$.subscribe(productList => {
      this.productList = productList
    })

  }

}
