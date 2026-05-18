import { ProductConfig } from './product';

export interface CartItem {
  product: ProductConfig;
  quantity: number;
}
