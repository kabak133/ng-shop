import {Component, OnInit, ViewChild} from '@angular/core';
import {NgImageSliderComponent} from "ng-image-slider";
import {Router} from "@angular/router";

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
    id: 1,
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

  constructor(private router: Router){}

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
    this.indexLargeImage = imgIndx
  }

  arrowClick(){
    console.log(this.slider)
  }

  moveToProductDetails(){
    console.log('moveToProductDetails')
    this.router.navigate(['/product', this.item.id]);
  }
}
