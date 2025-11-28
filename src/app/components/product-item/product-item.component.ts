import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  selectedQuantity: number = 1;

  constructor(private cartService: CartService) { }

  addToCart(): void {
    if (this.selectedQuantity > 0) {
      this.cartService.addToCart(this.product, this.selectedQuantity);
      this.selectedQuantity = 1;
    }
  }

  onQuantityChange(event: any): void {
    const value = parseInt(event.target.value);
    if (value > 0) {
      this.selectedQuantity = value;
    }
  }
}