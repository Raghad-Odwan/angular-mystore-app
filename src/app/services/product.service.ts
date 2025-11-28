import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProductById(id: number): Observable<Product> {
    return new Observable(observer => {
      this.getProducts().subscribe(products => {
        const product = products.find(p => p.id === id);
        if (product) {
          observer.next(product);
        } else {
          observer.error('Product not found');
        }
        observer.complete();
      });
    });
  }
}