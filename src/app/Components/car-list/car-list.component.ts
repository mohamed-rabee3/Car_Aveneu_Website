import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Car } from '../../models/car.model';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { CartService } from '../../services/cart.service';

@Component({
  standalone: true,
  selector: 'app-car-list',
  styleUrl: './car-list.component.css',
  imports: [CommonModule, NgFor, NgIf, CurrencyPipe],
  templateUrl: './car-list.component.html',
})
export class CarListComponent implements OnInit, OnDestroy {
  cars: Car[] = [];
  wishlistMap: { [key: number]: boolean } = {};
  hasMore = false;
  loading = false;
  private destroy$ = new Subject<void>();

  constructor(
    private CarService: CarService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // Load initial products
    this.CarService.getProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe((products) => {
        this.cars = products;
        // Check wishlist status for each product
      });

    // Subscribe to hasMore status
    this.CarService.hasMoreProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe((hasMore) => {
        this.hasMore = hasMore;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadMore(): void {
    this.loading = true;
    setTimeout(() => {
      this.CarService.loadMore();
      this.loading = false;
    }, 500); // Added small delay to show loading state
  }

  addToCart(product: Car): void {
    this.cartService.addToCart(product);
  }
}
