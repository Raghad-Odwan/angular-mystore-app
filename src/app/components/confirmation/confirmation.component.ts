import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  fullName: string = '';
  totalPrice: number = 0;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      fullName: string;
      totalPrice: number;
    };
    
    if (state) {
      this.fullName = state.fullName;
      this.totalPrice = state.totalPrice;
    }
  }

  ngOnInit(): void {
    if (!this.fullName) {
      this.router.navigate(['/']);
    }
  }
}