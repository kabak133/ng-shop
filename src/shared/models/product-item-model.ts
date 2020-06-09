export interface ProductItemImageModel {
  thumbImage: string
}

/** product item  */
export interface ProductItemModel {
  /** unique product id from dictionary */
  id: number;
  name: string,
  category: string,
  price: number,
  balance: number,
  images: ProductItemImageModel[]
}

export interface IProductListResponse {
  data: ProductItemModel[]
}
