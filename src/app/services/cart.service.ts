import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root', // This makes the service available application-wide as a singleton
})
export class CartService {
  private cartItems: Car[] = [];
  private cartItemsSubject = new BehaviorSubject<Car[]>([]);
  private cartCountSubject = new BehaviorSubject<number>(0);
  private isCartOpenSubject = new BehaviorSubject<boolean>(false);

  // Observable properties for components to subscribe to
  cartCount$ = this.cartCountSubject.asObservable();
  isCartOpen$ = this.isCartOpenSubject.asObservable(); // Exposing cart open state

  constructor() {}

  // Method to get cart items as an observable
  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }

  // Method to get cart count as an observable
  getCartCount() {
    return this.cartCountSubject.asObservable();
  }

  // Method to toggle cart visibility
  toggleCart() {
    const newState = !this.isCartOpenSubject.value;
    console.log('Toggling cart, new state:', newState);
    this.isCartOpenSubject.next(newState);
  }

  // Method to add a car to the cart
  addToCart(car: Car) {
    this.cartItems.push(car);
    this.cartItemsSubject.next(this.cartItems);
    this.cartCountSubject.next(this.cartItems.length);
  }

  // Method to remove a car from the cart by its ID
  removeFromCart(carId: number) {
    const index = this.cartItems.findIndex((item) => item.id === carId);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.cartItemsSubject.next(this.cartItems);
      this.cartCountSubject.next(this.cartItems.length);
    }
  }

  // Method to clear the cart
  clearCart() {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
    this.cartCountSubject.next(0);
  }

  // Method to calculate total price of items in the cart
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}
