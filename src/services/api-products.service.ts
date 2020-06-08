import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductItemImageModel} from "../shared/models/product-item-model";

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {
  private productsURL = 'api/products';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** get products from API */
  public getProducts(): Observable<ProductItemImageModel[]> {
    return this.http.get<ProductItemImageModel[]>(this.productsURL, this.httpOptions);
  }
}
