import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { RouterOutlet } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories';
import { CategoryConfig } from '../core/models/category';
import { categoriesData } from '../core/data/categories-data';

@Component({
  selector: 'app-layout-component',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class LayoutComponent {
  categories: CategoryConfig[] = categoriesData;
}
