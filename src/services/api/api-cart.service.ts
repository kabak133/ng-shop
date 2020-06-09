import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {IProductListResponse, ProductItemModel} from "../../shared/models/product-item-model";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiCartService {
  private productsURL = 'assets/mocks/products.json';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  createAuthorizationHeader() {
    this.httpOptions.headers.append('Authorization', 'Basic ' + 'Token');
  }

  /** get products from API */
  public getCart(): Observable<ProductItemModel[]> {
    this.createAuthorizationHeader()
    return this.http.get(this.productsURL, this.httpOptions).pipe(
      map(({data}: IProductListResponse) => data),
      catchError(err => {
        return throwError(err);
      })
    );
  }
}
