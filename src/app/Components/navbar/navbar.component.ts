import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule, SidebarModule],
})
export class NavbarComponent {
  isScrolled = false;
  cartItemCount = 50;
  isUserMenuOpen = false;
  isMenuOpen = false;
  sidebarVisible: boolean = false;

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
