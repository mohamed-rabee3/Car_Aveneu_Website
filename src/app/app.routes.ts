import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CarsForSaleComponent } from './pages/cars-for-sale/cars-for-sale.component';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

export const routes: Routes = [
  //pages routing
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cars-for-sale',
    component: CarsForSaleComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'newPassword',
    component: NewPasswordComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,

  }
  ,
  //components routing
  {
    path: 'navbar',
    component: NavbarComponent,
  },
];
