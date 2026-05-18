import { Component, inject, OnInit } from '@angular/core';
import { routes } from '../../../../../app.routes';
import { ActivatedRoute } from '@angular/router';
import { categoriesData } from '../../../../../core/data/categories-data';
import { ProductCardComponent } from './components/product-card/product-card';
import { ProductConfig } from '../../../../../core/models/product';

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsComponent implements OnInit {
  products: ProductConfig[] = [];
  private route = inject(ActivatedRoute);
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      const category = categoriesData.find((c) => c.slug === slug);
      this.products = category?.products ?? [];

      console.log('this.products', this.products);
    });
  }
}
