import { CategoryConfig } from '../models/category';
import { digitalProductsData } from './products-data/digital-products-data';
import { laptopData } from './products-data/laptop-products-data';
import { mobileData } from './products-data/mobile-products-data';

export const categoriesData: CategoryConfig[] = [
  {
    id: 1,
    name: 'موبایل',
    image: 'assets/images/mobile.jpg',
    slug: 'mobile',
    products: mobileData,
  },
  {
    id: 2,
    name: 'لپ تاپ',
    image: 'assets/images/laptop.jpg',
    slug: 'laptop',
    products: laptopData,
  },
  {
    id: 3,
    name: 'کالای دیجیتال',
    image: 'assets/images/digital-product.jpg',
    slug: 'digital-product',
    products: digitalProductsData,
  },
  {
    id: 4,
    name: 'خانه و آشپزخانه',
    image: 'assets/images/home-product.jpg',
    slug: 'home-product',
    products: [],
  },
  {
    id: 5,
    name: 'لوازم خانگی برقی',
    image: 'assets/images/electric-appliances.jpg',
    slug: 'electric-appliances-product',
    products: [],
  },
  {
    id: 6,
    name: 'کتاب',
    image: 'assets/images/book.jpg',
    slug: 'book',
    products: [],
  },
];
