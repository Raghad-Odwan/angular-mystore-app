# MyStore – Angular E-Commerce Application

MyStore is a fully functional single-page e-commerce web application built with **Angular**.  
It includes a product catalog, product details page, cart management, checkout form, and order confirmation page.  
This project was developed as part of the **Udacity Front-End Nanodegree Program**.

---

##  Features

-  Display a list of products  
-  View detailed product information  
-  Add items to the shopping cart  
-  Update item quantities or remove items  
-  Auto calculation of total price  
-  Checkout form with validation  
-  Order confirmation page  
-  Routing between all pages  
-  Service-based architecture  

---

##  Tech Stack

- **Angular 17**
- **TypeScript**
- **RxJS / Observables**
- **HTML, CSS**
- **Angular Routing**
- **Local Service Data (mock API)**

---

##  Running the Project Locally

### 1. Clone the repository:
git clone https://github.com/Raghad-Odwan/angular-mystore-app
cd angular-mystore-app

### 2. Install dependencies
npm install

### 3. Start development server
ng serve

### 4. Open in browser
http://localhost:4200

## Technologies Used
* Angular 16+
* TypeScript
* RxJS
* HTML / CSS
* Git & GitHub 

##  Project Structure
src/
┣ app/
┃ ┣ components/
┃ ┃ ┣ product-list/
┃ ┃ ┣ product-item/
┃ ┃ ┣ product-item-detail/
┃ ┃ ┣ cart/
┃ ┃ ┗ confirmation/
┃ ┣ services/
┃ ┣ models/
┃ ┗ app-routing.module.ts
┣ assets/
┗ index.html

## Notes
* No backend server is required; data is loaded from assets/data.json
* Cart state is managed using RxJS BehaviorSubject
* Routing is implemented using Angular Router
```bash
git clone https://github.com/Raghad-Odwan/angular-mystore-app
