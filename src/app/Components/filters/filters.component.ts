// car-filters.component.ts
import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { FilterOptions } from '../../models/filters.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-filters',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="filters-container">
      <form [formGroup]="filterForm" class="filters-form">
        <!-- Model Dropdown -->
        <select formControlName="model" class="filter-select">
          <option value="">Select Model</option>
          @for (model of models; track model) {
          <option [value]="model">{{ model }}</option>
          }
        </select>

        <!-- Year Dropdown -->
        <select formControlName="year" class="filter-select">
          <option value="">Select Year</option>
          @for (year of years; track year) {
          <option [value]="year">{{ year }}</option>
          }
        </select>

        <!-- Price Range Dropdown -->
        <select formControlName="priceRange" class="filter-select">
          <option value="">Select Price Range</option>
          @for (range of priceRanges; track range.value) {
          <option [value]="range.value">{{ range.label }}</option>
          }
        </select>

        <button type="button" (click)="applyFilters()" class="search-button">
          Search
        </button>
      </form>
    </div>
  `,
  styles: [
    `
      .filters-container {
        padding: 1rem;
        background-color: rgp(0, 0, 0);
        border-radius: 8px;
      }

      .filters-form {
        display: flex;
        gap: 1rem;
        align-items: center;
      }

      .filter-select {
        padding: 0.5rem;
        border: 1px solid #ced4da;
        border-radius: 4px;
        min-width: 200px;
        height: 40px;
      }

      .search-button {
        padding: 0.5rem 1.5rem;
        background-color: black;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        height: 40px;
      }

      .search-button:hover {
        background-color: #0056b3;
      }

      @media (max-width: 768px) {
        .filters-form {
          flex-direction: column;
        }

        .filter-select {
          width: 100%;
        }
      }
    `,
  ],
})
export class CarFiltersComponent implements OnInit {
  filterForm: FormGroup;
  models: string[] = [];
  years: number[] = [];
  priceRanges: { label: string; value: string }[] = [];

  constructor(private carService: CarService, private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      model: [''],
      year: [''],
      priceRange: [''],
    });
  }

  ngOnInit(): void {
    // Initialize filter options
    this.models = this.carService.getUniqueModels();
    this.years = this.carService.getUniqueYears();
    this.priceRanges = this.carService.getPriceRanges();
  }

  applyFilters(): void {
    const filters: FilterOptions = {};
    const formValues = this.filterForm.value;

    // Only add non-empty values to filters
    if (formValues.model) filters.model = formValues.model;
    if (formValues.year) filters.year = Number(formValues.year);
    if (formValues.priceRange) filters.priceRange = formValues.priceRange;

    this.carService.applyFilters(filters);
  }
}
