import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";
import {GetProductsListAction} from "../../../shared/state/products-list/products-list.actions";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  item = [1,2,3,4,5,6]
  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetProductsListAction)
  }

}
