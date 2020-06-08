import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {IProductListResponse, ProductItemModel} from "../shared/models/product-item-model";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {
  private productsURL = 'assets/products.json';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  /** get products from API */
  public getProducts(): Observable<ProductItemModel[]> {
    return this.http.get(this.productsURL, this.httpOptions).pipe(
      map(({data}: IProductListResponse) => data),
      catchError(err => {
        console.log(err);
        return throwError(err);
      })
    );
  }
}
