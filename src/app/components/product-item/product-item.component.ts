import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  item = {
    name: 'Рубашка на пуговицах',
    category: 'РУБАШКИ',
    price: 320,
    balance: 133,
    images:[

    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
