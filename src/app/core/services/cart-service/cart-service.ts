import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../../models/cart-item';
import { ProductConfig } from '../../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];

  cartSubject = new BehaviorSubject<CartItem[]>([]);

  constructor() {
    this.loadCart();
  }

  private updateCart() {
    this.cartSubject.next([...this.cartItems]);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  private loadCart() {
    const savedCart = localStorage.getItem('cart');

    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
      this.cartSubject.next([...this.cartItems]);
    }
  }

  private findCartItem(product: ProductConfig) {
    return this.cartItems.find(
      (item) => item.product.id === product.id && item.product.categoryId === product.categoryId,
    );
  }

  addToCart(product: ProductConfig) {
    const existing = this.findCartItem(product);

    if (existing) {
      if (existing.quantity >= existing.product.count) return;
      existing.quantity++;
    } else {
      this.cartItems.push({
        product,
        quantity: 1,
      });
    }

    this.updateCart();
  }

  increase(product: ProductConfig) {
    const item = this.findCartItem(product);

    if (!item) return;

    if (item.quantity >= item.product.count) return;

    item.quantity++;
    this.updateCart();
  }

  decrease(product: ProductConfig) {
    const item = this.findCartItem(product);

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {
      this.remove(product);
      return;
    }

    this.updateCart();
  }

  remove(product: ProductConfig) {
    this.cartItems = this.cartItems.filter(
      (item) => item.product.id !== product.id || item.product.categoryId !== product.categoryId,
    );

    this.updateCart();
  }

  getQuantity(product: ProductConfig): number {
    const item = this.findCartItem(product);
    return item ? item.quantity : 0;
  }

  getTotalCount(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  clearCart() {
    this.cartItems = [];
    this.updateCart();
  }
}
