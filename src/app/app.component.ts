import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './Components/footer/footer.component';
import { CarsForSaleComponent } from './pages/cars-for-sale/cars-for-sale.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    CarsForSaleComponent,
    NavbarComponent,
    HomeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CAR_AVENEU_WEBSITE';
}
