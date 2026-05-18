import { ProductConfig } from '../models/product';
import { digitalProductsData } from './products-data/digital-products-data';
import { laptopData } from './products-data/laptop-products-data';
import { mobileData } from './products-data/mobile-products-data';

export const allProductsDataConfig: ProductConfig[] = [
  ...mobileData,
  ...laptopData,
  ...digitalProductsData,
];
