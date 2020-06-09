import {Component, OnInit} from '@angular/core';
import {slideUpDown} from "../../animations/slideUpDown";
import {Store} from "@ngxs/store";
import {
  GetProductsListByCategorySort
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

  selectCategory(category: string | undefined): void {
    this.selectedCategory = category
    this.selectByCategoryWithSort()
  }

  selectSorting(sorting: string | undefined): void {
    this.selectedSorting = sorting
    this.selectByCategoryWithSort()
  }


  selectByCategoryWithSort() {
    this.store.dispatch(new GetProductsListByCategorySort(this.selectedCategory, this.selectedSorting))
  }

}
