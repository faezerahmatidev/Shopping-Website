import { Component } from '@angular/core';
import { CategoryConfig } from '../../../core/models/category';
import { categoriesData } from '../../../core/data/categories-data';
import { CategoryCardComponent } from './components/category-card/category-card';

@Component({
  selector: 'app-categories-component',
  imports: [CategoryCardComponent],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class CategoriesComponent {
  categories: CategoryConfig[] = categoriesData;
}
