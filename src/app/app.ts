import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoriesComponent } from './layout/pages/categories/categories';
import { LayoutComponent } from './layout/layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ShoppingWebsite');
}
