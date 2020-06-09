import {ICartItem} from "../../models/cart.models";
import {ProductItemModel} from "../../models/product-item-model";

export class CartAdd {
  static readonly type = '[Cart] Add to art';

  constructor(public payload: ProductItemModel) {
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
