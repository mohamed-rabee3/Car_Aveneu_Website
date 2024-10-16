import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule],
})
export class NavbarComponent {
  isScrolled = false;
  cartItemCount = 50;
  isUserMenuOpen = false;
  isMenuOpen = false;

  // Listen to scroll events to change navbar background and logo on scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 50; // Change logo after scrolling 50px
  }

  // Toggle user menu dropdown
  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  // Toggle the hamburger menu for mobile view
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Hover effect for menu items
  hoverItem(event: Event) {
    const target = event.target as HTMLElement;
    target.style.color = '#b6aa04';
  }

  unhoverItem(event: Event) {
    const target = event.target as HTMLElement;
    target.style.color = '';
  }
}
