import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

//Libs
import {NgImageSliderModule} from "ng-image-slider";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";

//Storage
import {NgxsModule} from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {ngxsConfig} from "../../ngxs.config";
import {stateList} from "../shared/state";

//Router
import {AppRoutingModule} from './app-routing.module';

//Pages
import {ProductsListPageComponent} from './pages/products-list-page/products-list-page.component';
import {ProductDetailsPageComponent} from './pages/product-details-page/product-details-page.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {CartPageComponent} from './pages/cart-page/cart-page.component';

//Components
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {ProductItemComponent} from './components/product-item/product-item.component';
import {CartComponent} from './components/cart/cart.component';
import {CartItemComponent} from './components/cart/cart-item/cart-item.component';
import {ClickStopPropagation} from "./directives/click-stop-propagation";
import {ApiProductsService} from "../services/api-products.service";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";


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
    NgxsModule.forRoot([...stateList], ngxsConfig),
    NgxsReduxDevtoolsPluginModule.forRoot({disabled: environment.production}),
    NgxsLoggerPluginModule.forRoot({disabled: environment.production}),

    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    FormsModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ApiProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
