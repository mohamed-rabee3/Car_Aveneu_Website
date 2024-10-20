import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { of } from 'rxjs';
import { FilterOptions } from '../models/filters.model';
@Injectable({
  providedIn: 'root',
})
export class CarService {
  private cars: Car[] = [
    {
      id: 1,
      model: 'toyota corolla',
      year: 2019,
      price: 1_350_000,
      images: ['/img/cars/toyota-corolla.jpg'],
      specs: {
        engine: '1600cc',
        horsepower: 250,
      },
    },
    {
      id: 2,
      model: 'nissan sunny',
      year: 2020,
      price: 1_000_000,
      images: ['/img/cars/nissan-sunny.png'],
      specs: {
        engine: '2000cc',
        horsepower: 250,
      },
    },
    {
      id: 3,
      model: 'fiat 128',
      year: 1970,
      price: 100_000,
      images: ['/img/cars/128.jpeg'],
      specs: {
        engine: '1600cc',
        horsepower: 250,
      },
    },
    {
      id: 4,
      model: 'beetle',
      year: 1940,
      price: 1,
      images: ['/img/cars/beetle.jpeg'],
      specs: {
        engine: '1600cc',
        horsepower: 10,
      },
    },
    {
      id: 5,
      model: 'verna',
      year: 2013,
      price: 240_000,
      images: ['/img/cars/verna.jpeg'],
      specs: {
        engine: '1600cc',
        horsepower: 250,
      },
    },
    {
      id: 6,
      model: 'mercedes Benz',
      year: 2024,
      price: 300_0000_000,
      images: ['/img/cars/mercedes.jpg'],
      specs: {
        engine: '5000cc',
        horsepower: 600,
      },
    },
    {
      id: 6,
      model: 'toyota supra mk5',
      year: 2019,
      price: 44_350_000,
      images: ['./img/cars/toyta supra mk5.jpeg'],
      specs: {
        engine: '7000cc',
        horsepower: 1000,
      },
    },
    {
      id: 6,
      model: 'Dodge Challenger',
      year: 1970,
      price: 60_350_000,
      images: ['/img/cars/dodge challenger.jpeg'],
      specs: {
        engine: '2000cc',
        horsepower: 500,
      },
    },
    {
      id: 6,
      model: 'Mustang gt',
      year: 2019,
      price: 1_350_000,
      images: ['/img/cars/Mustang GT.jpg'],
      specs: {
        engine: '2600cc',
        horsepower: 250,
      },
    },
    {
      id: 6,
      model: 'shahin',
      year: 2009,
      price: 1_350,
      images: ['/img/cars/shahin.jpeg'],
      specs: {
        engine: '1600cc',
        horsepower: 250,
      },
    },
  ];

  private readonly PAGE_SIZE = 8;
  private currentPage = 1;
  private productsSubject = new BehaviorSubject<Car[]>([]);
  private hasMoreSubject = new BehaviorSubject<boolean>(true);
  private filteredCars: Car[] = [];
  private currentFilters: FilterOptions = {};
  constructor() {
    this.loadInitialProducts();
  }

  // Get unique values for filters
  getUniqueModels(): string[] {
    return [...new Set(this.cars.map((car) => car.model))].sort();
  }

  getUniqueYears(): number[] {
    return [...new Set(this.cars.map((car) => car.year))].sort((a, b) => b - a);
  }

  getUniqueEngines(): string[] {
    return [...new Set(this.cars.map((car) => car.specs.engine))].sort();
  }

  getPriceRanges() {
    return [
      { label: 'Under 200,000', value: '0-200000' },
      { label: '200,000 - 500,000', value: '200000-500000' },
      { label: '500,000 - 1,000,000', value: '500000-1000000' },
      { label: '1,000,000 - 5,000,000', value: '1000000-5000000' },
      { label: 'Above 5,000,000', value: '5000000-999999999' },
    ];
  }

  // Apply filters and reset pagination
  applyFilters(filters: FilterOptions): void {
    this.currentFilters = filters;
    this.filteredCars = this.cars.filter((car) => {
      let matchesFilters = true;

      if (filters.model) {
        matchesFilters =
          matchesFilters &&
          car.model.toLowerCase().includes(filters.model.toLowerCase());
      }

      if (filters.year) {
        matchesFilters = matchesFilters && car.year === filters.year;
      }

      if (filters.engine) {
        matchesFilters = matchesFilters && car.specs.engine === filters.engine;
      }

      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(Number);
        matchesFilters = matchesFilters && car.price >= min && car.price <= max;
      }

      return matchesFilters;
    });

    // Reset pagination
    this.currentPage = 1;
    this.loadFilteredProducts();
  }

  private loadFilteredProducts(): void {
    const endIndex = this.currentPage * this.PAGE_SIZE;
    const paginatedProducts = this.filteredCars.slice(0, endIndex);

    this.productsSubject.next(paginatedProducts);
    this.hasMoreSubject.next(endIndex < this.filteredCars.length);
  }

  // Original methods with filter support
  private loadInitialProducts(): void {
    this.filteredCars = [...this.cars];
    const initialProducts = this.filteredCars.slice(0, this.PAGE_SIZE);
    this.productsSubject.next(initialProducts);
    this.hasMoreSubject.next(this.filteredCars.length > this.PAGE_SIZE);
  }

  getProducts(): Observable<Car[]> {
    return this.productsSubject.asObservable();
  }

  hasMoreProducts(): Observable<boolean> {
    return this.hasMoreSubject.asObservable();
  }

  loadMore(): void {
    const startIndex = this.currentPage * this.PAGE_SIZE;
    const endIndex = startIndex + this.PAGE_SIZE;
    const newProducts = this.filteredCars.slice(0, endIndex);

    this.currentPage++;
    this.productsSubject.next(newProducts);
    this.hasMoreSubject.next(endIndex < this.filteredCars.length);
  }

  getProductById(id: number): Car | undefined {
    return this.cars.find((c) => c.id === id);
  }

  getTotalProducts(): number {
    return this.filteredCars.length;
  }

  // Reset filters
  resetFilters(): void {
    this.currentFilters = {};
    this.filteredCars = [...this.cars];
    this.currentPage = 1;
    this.loadFilteredProducts();
  }

  // Sort products
  sortProducts(
    sortBy: 'price' | 'year' | 'model',
    order: 'asc' | 'desc'
  ): void {
    this.filteredCars.sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case 'price':
          comparison = a.price - b.price;
          break;
        case 'year':
          comparison = a.year - b.year;
          break;
        case 'model':
          comparison = a.model.localeCompare(b.model);
          break;
      }

      return order === 'asc' ? comparison : -comparison;
    });

    this.loadFilteredProducts();
  }

  // Search by model name
  searchByModel(query: string): void {
    if (!query) {
      this.resetFilters();
      return;
    }

    this.filteredCars = this.cars.filter((car) =>
      car.model.toLowerCase().includes(query.toLowerCase())
    );

    this.currentPage = 1;
    this.loadFilteredProducts();
  }

  // Get current filters
  getCurrentFilters(): FilterOptions {
    return { ...this.currentFilters };
  }
}
