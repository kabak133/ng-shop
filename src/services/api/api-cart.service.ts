import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";

import {catchError, map} from "rxjs/operators";
import {ICartItem, ICartResponse} from "../../shared/models/cart.models";

@Injectable({
  providedIn: 'root'
})
export class ApiCartService {
  private cartURL = 'assets/mocks/cart.json';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  createAuthorizationHeader() {
    this.httpOptions.headers.append('Authorization', 'Basic ' + 'Token');
  }

  /** get products in cart from API */
  public getCart(): Observable<ICartItem[]> {
    this.createAuthorizationHeader()
    return this.http.get(this.cartURL, this.httpOptions).pipe(
      map(({data}: ICartResponse) => data),
      catchError(err => {
        return throwError(err);
      })
    );
  }
}
