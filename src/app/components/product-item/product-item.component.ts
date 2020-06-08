import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgImageSliderComponent} from "ng-image-slider";
import {Router} from "@angular/router";
import {ProductItemModel} from "../../../shared/models/product-item-model";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() item: ProductItemModel;

  @ViewChild('nav') slider: NgImageSliderComponent;

  largeImage: string;
  indexLargeImage: number;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.largeImage = this.item.images[0].thumbImage
    this.indexLargeImage = 0
  }

  setLargeImage() {
    return this.item.images[this.indexLargeImage].thumbImage
  }

  //TODO: search help
  itemImages(){
    console.log(this.item.images[0])
    const imagesArr = this.item.images.map(el => ({...el}))
    console.log(imagesArr)
    return imagesArr
  }

  prevImageClick(): void {
    //this.slider.prev();
    this.indexLargeImage = this.indexLargeImage <= 0 ? this.indexLargeImage : this.indexLargeImage - 1
  }

  nextImageClick(): void {
    //this.slider.next();
    this.indexLargeImage = this.indexLargeImage >= this.item.images.length - 1 ? this.indexLargeImage : this.indexLargeImage + 1
  }

  imgClick(imgIndx) {
    this.indexLargeImage = imgIndx
  }

  moveToProductDetails() {
    this.router.navigate(['/product', this.item.id]);
  }
}
