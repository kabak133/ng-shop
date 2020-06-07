import {Component, OnInit, ViewChild} from '@angular/core';
import {NgImageSliderComponent} from "ng-image-slider";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @ViewChild('nav') slider: NgImageSliderComponent;

  largeImage: string;
  indexLargeImage: number;
  item = {
    name: 'Рубашка на пуговицах',
    category: 'РУБАШКИ',
    price: 320,
    balance: 133,
    images: [
      {
        thumbImage: '/assets/img/product-images/p1.jpg',
      },
      {
        thumbImage: '/assets/img/product-images/p2.jpg'
      },
      {
        thumbImage: '/assets/img/product-images/p3.jpg'
      },
      {
        thumbImage: '/assets/img/product-images/p4.jpg'
      },
      {
        thumbImage: '/assets/img/product-images/p5.jpg'
      },
      {
        thumbImage: '/assets/img/product-images/p6.jpg'
      }
    ]
  }

  constructor() {
  }

  ngOnInit(): void {
    this.largeImage = this.item.images[0].thumbImage
    this.indexLargeImage = 0
  }
  setLargeImage() {
    return  this.item.images[this.indexLargeImage].thumbImage
  }

  prevImageClick(): void {
    this.slider.prev();
    this.indexLargeImage = this.indexLargeImage  <= 0 ? this.indexLargeImage : this.indexLargeImage - 1
  }

  nextImageClick(): void {
    this.slider.next();
    this.indexLargeImage = this.indexLargeImage  >= this.item.images.length - 1 ? this.indexLargeImage : this.indexLargeImage + 1
  }

  imgClick(imgIndx){
    //console.log(img)

    this.indexLargeImage = imgIndx
  }

  arrowClick(){
    console.log(this.slider)

  }

}
