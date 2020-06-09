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
