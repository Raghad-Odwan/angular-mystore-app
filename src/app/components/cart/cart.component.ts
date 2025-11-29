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
  // Validate full name
  if (!this.fullName || this.fullName.trim().length < 3) {
    alert('Please enter a valid full name (at least 3 characters)');
    return;
  }

  // Validate address
  if (!this.address || this.address.trim().length === 0) {
    alert('Please enter your address');
    return;
  }

  // Validate credit card - NUMBERS ONLY (16 digits)
  const creditCardRegex = /^\d{16}$/;
  if (!this.creditCard || !creditCardRegex.test(this.creditCard)) {
    alert('Please enter a valid 16-digit credit card number (numbers only)');
    return;
  }

  // Check if cart is empty
  if (this.cartItems.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  // Navigate to confirmation page
  this.router.navigate(['/confirmation'], {
    state: {
      fullName: this.fullName,
      totalPrice: this.totalPrice
    }
  });

  // Clear cart and form
  this.cartService.clearCart();
  this.fullName = '';
  this.address = '';
  this.creditCard = '';
}
}