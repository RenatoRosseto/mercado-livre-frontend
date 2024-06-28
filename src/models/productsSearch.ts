import { Product } from './product';

export interface ProductsSearch {
  query: string;
  categories: string[];
  products: Product[];
}
