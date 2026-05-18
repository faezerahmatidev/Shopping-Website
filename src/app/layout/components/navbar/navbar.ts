import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryConfig } from '../../../core/models/category';
import { CartService } from '../../../core/services/cart-service/cart-service';
import { AsyncPipe } from '@angular/common';
import { inject } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  @Input() categories: CategoryConfig[] = [];

  cartService = inject(CartService);
}
