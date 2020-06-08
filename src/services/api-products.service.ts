import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {IProductListResponse, ProductItemModel} from "../shared/models/product-item-model";
import {catchError, map} from "rxjs/operators";
import {ASC, DESC} from "../shared/types/constants";

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
        return throwError(err);
      })
    );
  }

  /** get products from API */
  public getProductsByCategory({category}): Observable<ProductItemModel[]> {
    return this.http.get(this.productsURL, this.httpOptions).pipe(
      map(({data}: IProductListResponse) => {
        return data.filter(el => el.category.toLowerCase() === category.toLowerCase())
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

    /** get products from API with imitation sorting by server */
  public getProductsSorting({sorting}): Observable<ProductItemModel[]> {
    return this.http.get(this.productsURL, this.httpOptions).pipe(
      map(({data}: IProductListResponse) => {
        const result = data.sort((a, b) => {
          if (sorting === DESC) {
            return b.price - a.price
          } else if (sorting === ASC) {
            return a.price - b.price
          } else if (sorting === 'popular') {
            return b.id - a.id
          } else if (sorting === 'popular') {
            return a.id - b.id
          }
        })
        return result
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }


  public getProductsCategorySorting({category, sorting}){
    console.log('getProductsCategorySorting', {category, sorting})
    return this.http.get(this.productsURL, this.httpOptions).pipe(
      map(({data}: IProductListResponse) => {

        let result = data
        if(category){
          result = result.filter(el => el.category.toLowerCase() === category.toLowerCase())
        }

        if(sorting){
          result = result.sort((a, b) => {
            if (sorting === DESC) {
              return b.price - a.price
            } else if (sorting === ASC) {
              return a.price - b.price
            } else if (sorting === 'popular') {
              return b.id - a.id
            } else if (sorting === 'popular') {
              return a.id - b.id
            }
          })
        }
        return result
      })
    )
  }
}
