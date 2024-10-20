import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Car } from '../../models/car.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartModalComponent implements OnInit {
  cartItems$: Observable<Car[]>;
  totalPrice$: Observable<number>;
  isCartOpen$: Observable<boolean>;

  constructor(private cartService: CartService) {
    this.cartItems$ = this.cartService.getCartItems();
    this.totalPrice$ = this.cartItems$.pipe(
      map((items) => items.reduce((total, item) => total + item.price, 0))
    );
    // Subscribe to cart open state from the CartService
    this.isCartOpen$ = this.cartService.isCartOpen$;
  }

  ngOnInit(): void {
    this.isCartOpen$.subscribe((isOpen) => {
      console.log('Cart open state changed:', isOpen);
    });
  }

  closeModal() {
    this.cartService.toggleCart(); // Toggle cart state when closing
  }

  removeItem(carId: number) {
    this.cartService.removeFromCart(carId);
  }
}
