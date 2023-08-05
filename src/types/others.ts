export interface SearchObj {
  page: number;
  limit: number;
  order: string;
}

export interface ProductSearchObject {
  page: number;
  limit: number;
  order: string;
  restaurant_mb_id?: string;
  product_collection?: string;
}
