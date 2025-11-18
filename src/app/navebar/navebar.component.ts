import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navebar',
  imports: [ CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navebar.component.html',
  styleUrl: './navebar.component.scss'
})
export class NavebarComponent {
 isOpen = false;
  isServicesOpen = false; 
  isMobileServicesOpen = false; 

  openServices() {
  this.isServicesOpen = true;
}

closeServices() {
  this.isServicesOpen = false;
}
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

   toggleMobileServices() {
    this.isMobileServicesOpen = !this.isMobileServicesOpen;
  }
}
