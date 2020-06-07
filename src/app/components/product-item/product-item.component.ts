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
      {path:'/assets/img/product-images/p1.jpg'},
      {path:'/assets/img/product-images/p2.jpg'},
      {path:'/assets/img/product-images/p3.jpg'},
      {path:'/assets/img/product-images/p4.jpg'},
      {path:'/assets/img/product-images/p5.jpg'},
      {path:'/assets/img/product-images/p6.jpg'}
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
