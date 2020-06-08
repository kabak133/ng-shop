import {Component, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  productItem = {
    name: 'Кроссовки «Kaiwa» Y3 x Adidas',
    price: 320,
    count: 2,
    images: [
      {
        thumbImage: '/assets/img/product-images/p2.jpg',
      }
    ]
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  productCountChanged({model}) {
    this.setCountProducts(model)
  }

  decrementCountProduct() {
    this.setCountProducts(this.productItem.count - 1)
  }

  incrementCountProduct() {
    this.setCountProducts(this.productItem.count + 2)
  }

  setCountProducts(count: number) {
    this.productItem.count = count
  }

}
