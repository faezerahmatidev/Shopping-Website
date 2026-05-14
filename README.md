# 🛍️ Angular Shopping Website

A modern **e-commerce web application** built with **Angular (Standalone Components)** and **Tailwind CSS** following a clean **Feature-Based Architecture**.  
The project demonstrates scalable Angular structure, reusable components, dynamic routing, and a persistent shopping cart system.

---

## 🚀 Technologies

- Angular
- TypeScript
- Tailwind CSS
- RxJS
- Angular Router
- LocalStorage API

---

## 📂 Project Structure

src/app

core  
&nbsp;&nbsp;&nbsp;&nbsp;data  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;products-data  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;all-products-data.ts  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digital-products-data.ts  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;laptop-products-data.ts  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mobile-products-data.ts  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;categories-data.ts  

&nbsp;&nbsp;&nbsp;&nbsp;models  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;category.ts  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;product.ts  

&nbsp;&nbsp;&nbsp;&nbsp;services  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cart-service  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;category-service  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;product-service  

layout  
&nbsp;&nbsp;&nbsp;&nbsp;components  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;footer  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;navbar  

&nbsp;&nbsp;&nbsp;&nbsp;pages  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cart  

pages  
&nbsp;&nbsp;&nbsp;&nbsp;home  

&nbsp;&nbsp;&nbsp;&nbsp;categories  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;components  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;category-card  

&nbsp;&nbsp;&nbsp;&nbsp;products  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;components  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;product-card  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pages  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;product-details  

app.config.ts  
app.routes.ts  
app.ts  
app.html  

---

## 🧠 Architecture

The project follows a **Feature-Based Architecture** to keep the application modular and maintainable.

### Core

Contains:

- Models
- Mock Data
- Services
- Business Logic

### Layout

Contains:

- Navbar
- Footer
- Global Layout wrapper

### Pages

Contains application pages:

- Home
- Categories
- Products
- Product Details
- Cart

---

## 🧩 Models

### Category Model

```ts
export interface CategoryConfig {
  id: number;
  name: string;
  image: string;
  slug: string;
  products: Array<any>;
}
```

### Product Model

```ts
export interface ProductConfig {
  id: number;
  name: string;
  image: string;
  price: number;
  stock: number;
  count: number;
  categoryId: number;
}
```

---

## 🛠️ Services

### CategoryService

Handles:

- Getting all categories
- Finding categories by slug

### ProductService

Handles:

- Getting all products
- Filtering products by category
- Finding product by id

### CartService

Handles:

- Add to cart
- Remove item from cart
- Update quantity
- Persist cart in LocalStorage
- Reactive cart updates using BehaviorSubject

---

## 🧭 Routing

The application uses **dynamic routing** based on category and product slugs.

Routes example:

/home  
/categories  
/categories/:slug  
/categories/:slug/products/:id  
/cart  

---

## 🎨 UI Components

### Navbar

Features:

- Category dropdown menu
- Cart icon
- Cart item count
- Responsive navigation

### Category Card

Displays:

- Category image
- Category name

Navigation:

/categories/:slug

### Product Card

Displays:

- Product image
- Product title
- Product price
- Product stock
- Add-to-cart button

Built using **TailwindCSS Flex utilities**.

### Product Details

Displays:

- Product image
- Product description
- Product price
- Add to cart button

---

## 🎨 Styling

The entire UI is built using **Tailwind CSS**.

Common utilities used:

flex  
grid  
gap  
shadow  
rounded  
text  
p-  
m-  
w-  
justify-between  
items-center  

Example responsive grid:

grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6

---

## 📌 Technical Notes

- Built using **Angular Standalone Components**
- Uses **Feature-Based Folder Structure**
- Uses **TailwindCSS for responsive design**
- Uses **optional chaining (?.)** to avoid runtime errors
- Uses **trackBy for rendering optimization**
- Uses **SEO-friendly slugs for routing**
- Mock data stored inside **core/data**

---

## ▶️ Installation

npm install

---

## ▶️ Run Project

ng serve

Open:

http://localhost:4200

---

## 🔮 Future Improvements

- Backend API integration
- Authentication system
- Wishlist system
- Checkout page
- Product search
- Filtering and sorting
- Dark mode support

---

## 👨‍💻 Author

Developed using **Angular** and **TailwindCSS**.
:::
