import { Component, Input } from '@angular/core';
import { CategoryConfig } from '../../../../../core/models/category';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-card',
  imports: [RouterLink],
  templateUrl: './category-card.html',
  styleUrl: './category-card.css',
})
export class CategoryCardComponent {
  // @Input() id!: number;
  // @Input() name!: string;
  // @Input() image!: string;

  @Input() categoryData!: CategoryConfig;
}
