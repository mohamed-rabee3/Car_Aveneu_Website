import { Component } from '@angular/core';
import { CarListComponent } from '../../Components/car-list/car-list.component';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service';
import { CarFiltersComponent } from '../../Components/filters/filters.component';

@Component({
  selector: 'app-cars-for-sale',
  standalone: true,
  imports: [CarListComponent, CarFiltersComponent],
  templateUrl: './cars-for-sale.component.html',
  styleUrl: './cars-for-sale.component.css',
})
export class CarsForSaleComponent {}
