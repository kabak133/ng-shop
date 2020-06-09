export interface ICartItem {
  id: number,
  name: string,
  price: number,
  count: number,
  thumbImage: string
}

export class CartStateModel {
  public productInCart: ICartItem[];
}

export interface ICartResponse {
  data: ICartItem[]
}
