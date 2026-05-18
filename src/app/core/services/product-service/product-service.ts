import { Injectable } from '@angular/core';
import { allProductsDataConfig } from '../../data/all-products-data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProductsBySlug(categoryId: number) {
    return allProductsDataConfig.filter((p) => p.categoryId === categoryId);
  }
}
