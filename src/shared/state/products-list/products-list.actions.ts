export interface IFilters {
  category: string | undefined,
  sorting: string | undefined
}


export class GetProductsListAction {
  static readonly type = '[ProductsList] get products list';
}

export class GetProductsListByCategory {
  static readonly type = '[ProductsListByCategory] get products by category';

  constructor(public category) {
  }
}

export class ProductsListBySorting {
  static readonly type = '[ProductsListBySorting] get sorted products';

  constructor(public sorting) {
  }
}
