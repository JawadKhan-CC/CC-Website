import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
 openSection: string | null = null;
  isMobile = false;

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 768;
    if (!this.isMobile) this.openSection = null;
  }

  ngOnInit() {
    this.onResize();
  }

  toggleSection(section: string) {
    if (!this.isMobile) return;
    this.openSection = this.openSection === section ? null : section;
  }
}
