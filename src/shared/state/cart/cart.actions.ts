import {ICartItem} from "../../models/cart.models";

export class CartAdd {
  static readonly type = '[Cart] Add item';

  constructor(public payload: string) {
  }
}

export class CartGet {
  static readonly type = '[Cart] Get cart';

  constructor() {
  }
}

export class CartSetCountItem {
  static readonly type = '[Cart] Set count product item to cart';
  constructor(public pl:ICartItem) {
  }
}
