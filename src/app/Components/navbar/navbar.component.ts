import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { CartService } from '../../services/cart.service';
import { CartModalComponent } from '../cart/cart.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, SidebarModule, CartModalComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isScrolled = false;
  isMenuOpen = false;
  isUserMenuOpen = false;
  cartCount$;

  constructor(private cartService: CartService) {
    this.cartCount$ = this.cartService.getCartCount();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  toggleCart() {
    this.cartService.toggleCart();
  }

  hoverItem(event: MouseEvent) {
    // Your existing hover logic
    console.log('Item hovered', event.target);
  }

  unhoverItem(event: MouseEvent) {
    // Logic for when mouse leaves the item
    console.log('Item unhovered', event.target);
  }
}
