import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  item = [1,2,3,4,5,6,7,8,9]
  constructor() { }

  ngOnInit(): void {
  }

}
