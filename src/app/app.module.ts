import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgImageSliderModule} from "ng-image-slider";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import {FormsModule} from "@angular/forms";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ClickStopPropagation} from "./directives/click-stop-propagation";

@NgModule({
  declarations: [
    AppComponent,
    ProductsListPageComponent,
    ProductDetailsPageComponent,
    NavbarComponent,
    SidebarComponent,
    NotFoundComponent,
    ProductsListComponent,
    ProductItemComponent,
    CartComponent,
    CartItemComponent,
    CartPageComponent,
    ClickStopPropagation
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    FormsModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
