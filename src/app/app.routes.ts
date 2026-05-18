import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout';
import { HomeComponent } from './layout/pages/home/home';
import { CategoriesComponent } from './layout/pages/categories/categories';
import { CartComponent } from './layout/pages/cart/cart';
import { ProductsComponent } from './layout/pages/categories/pages/products/products';
import { ProductDetailsComponent } from './layout/pages/categories/pages/products/pages/product-details/product-details';
import { LoginComponent } from './layout/pages/auth/login/login';
import { RegisterComponent } from './layout/pages/auth/register/register';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'categories',
        children: [
          {
            path: '',
            component: CategoriesComponent,
          },
          {
            path: 'products',
            children: [
              {
                path: '',
                component: ProductsComponent,
              },
              {
                path: 'product-details',
                component: ProductDetailsComponent,
              },
            ],
          },
          { path: ':slug', component: ProductsComponent },
        ],
      },
      { path: 'cart', component: CartComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
