import { Component, Input, OnInit } from '@angular/core';
import { ProductConfig } from '../../../../../../../core/models/product';
import { CartService } from '../../../../../../../core/services/cart-service/cart-service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { inject } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [AsyncPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCardComponent implements OnInit {
  @Input() productData!: ProductConfig;

  quantity$!: Observable<number>;

  cartService = inject(CartService);

  ngOnInit() {
    this.quantity$ = this.cartService.cartSubject.pipe(
      map(() => this.cartService.getQuantity(this.productData)),
    );
  }
  addToCart() {
    this.cartService.addToCart(this.productData);
  }

  increase() {
    this.cartService.increase(this.productData);
  }

  decrease() {
    this.cartService.decrease(this.productData);
  }

  get quantity(): number {
    return this.cartService.getQuantity(this.productData);
  }
}
