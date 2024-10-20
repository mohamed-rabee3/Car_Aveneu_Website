import { Injectable } from '@angular/core';
import { Car } from './car.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
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
      images: ['img-1', 'img-2'],
      specs: {
        engine: '1600cc',
        horsepower: 250,
      },
    },
    {
      id: 2,
      model: 'toyota corolla',
      year: 2019,
      price: 1_350_000,
      images: ['img-1', 'img-2'],
      specs: {
        engine: '1600cc',
        horsepower: 250,
      },
    },
    {
      id: 3,
      model: 'toyota corolla',
      year: 2019,
      price: 1_350_000,
      images: ['img-1', 'img-2'],
      specs: {
        engine: '1600cc',
        horsepower: 250,
      },
    },
    {
      id: 4,
      model: 'toyota corolla',
      year: 2019,
      price: 1_350_000,
      images: ['img-1', 'img-2'],
      specs: {
        engine: '1600cc',
        horsepower: 250,
      },
    },
    {
      id: 5,
      model: 'toyota corolla',
      year: 2019,
      price: 1_350_000,
      images: ['img-1', 'img-2'],
      specs: {
        engine: '1600cc',
        horsepower: 250,
      },
    },
    {
      id: 6,
      model: 'toyota corolla',
      year: 2019,
      price: 1_350_000,
      images: ['img-1', 'img-2'],
      specs: {
        engine: '1600cc',
        horsepower: 250,
      },
    },
  ];

  constructor() {}
  // Fetch all cars
  getCars(): Observable<Car[]> {
    return of(this.cars);
  }

  // Fetch a car by ID
  getCarById(id: number): Observable<Car | undefined> {
    const car = this.cars.find((c) => c.id === id);
    return of(car);
  }
}
