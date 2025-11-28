import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../../models/cartItem';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  
  fullName: string = '';
  address: string = '';
  creditCard: string = '';

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity > 0) {
      this.cartService.updateQuantity(productId, quantity);
    }
  }

  removeItem(productId: number): void {
    if (confirm('Are you sure you want to remove this item?')) {
      this.cartService.removeFromCart(productId);
    }
  }

  onSubmit(): void {
    if (!this.fullName || this.fullName.length < 3) {
      alert('Please enter a valid full name (at least 3 characters)');
      return;
    }

    if (!this.address) {
      alert('Please enter your address');
      return;
    }

    if (!this.creditCard || this.creditCard.length < 16) {
      alert('Please enter a valid credit card number (at least 16 digits)');
      return;
    }

    if (this.cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    this.router.navigate(['/confirmation'], {
      state: {
        fullName: this.fullName,
        totalPrice: this.totalPrice
      }
    });

    this.cartService.clearCart();
  }
}