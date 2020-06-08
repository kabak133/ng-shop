import {Component, OnInit} from '@angular/core';
import {slideUpDown} from "../../animations/slideUpDown";
import {Store} from "@ngxs/store";
import {
  GetProductsListAction,
  GetProductsListByCategory, ProductsListBySorting
} from "../../../shared/state/products-list/products-list.actions";

export const DESC = "decs"
export const ASC = "asc"

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [slideUpDown]
})
export class SidebarComponent implements OnInit {

  DESC = DESC
  ASC = ASC

  selectedCategory: string | undefined = undefined
  selectedSorting: string | undefined = undefined
  showSelect = false

  constructor(private store: Store) {
  }


  ngOnInit(): void {
  }

  selectCategory(category: string | undefined) {
    this.selectedCategory = category
    if (category) {
      this.store.dispatch(new GetProductsListByCategory(category))
    } else {
      this.store.dispatch(new GetProductsListAction)
    }
  }

  selectSorting(sorting: string | undefined) {
    this.selectedSorting = sorting
    this.store.dispatch(new ProductsListBySorting({sorting}))
  }

}
