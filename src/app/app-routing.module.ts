import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsListPageComponent} from "./pages/products-list-page/products-list-page.component";
import {ProductDetailsPageComponent} from "./pages/product-details-page/product-details-page.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {CartPageComponent} from "./pages/cart-page/cart-page.component";

const routes: Routes = [
  {
    path:'',
    component: ProductsListPageComponent
  },
  {
    path:'product',
    redirectTo: '',
    pathMatch: 'full',
    children:[
      {
       path: ":id",
        component: ProductDetailsPageComponent
      }
    ]
  },
  {
    path: "cart",
    component: CartPageComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
