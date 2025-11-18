import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { ExpertCardComponent } from '../common/expert-card/expert-card.component';

@Component({
  selector: 'app-service',
  imports: [CommonModule, ExpertCardComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {

  PAGE_SIZE = 18; // 6 columns * 3 rows

  experts = signal(
    [
      {
        id: 1,
        name: 'Aarav Sharma',
        role: 'Cloud Architect',
        experience: 5,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+1',
        communicationScore: 4.0,
        technicalScore: 4.2,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 2,
        name: 'Ben Carter',
        role: 'DevOps Engineer',
        experience: 6,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+2',
        communicationScore: 4.1,
        technicalScore: 4.3,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 3,
        name: 'Chloe Wong',
        role: 'Data Scientist',
        experience: 7,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+3',
        communicationScore: 4.2,
        technicalScore: 4.4,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 4,
        name: 'David Lee',
        role: 'Frontend Lead',
        experience: 8,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+4',
        communicationScore: 4.3,
        technicalScore: 4.5,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 5,
        name: 'Elena Garcia',
        role: 'Security Analyst',
        experience: 9,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+5',
        communicationScore: 4.4,
        technicalScore: 4.6,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 6,
        name: 'Fiona Kelly',
        role: 'Mobile Developer',
        experience: 10,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+6',
        communicationScore: 4.5,
        technicalScore: 4.6,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 7,
        name: 'Aarav Sharma',
        role: 'Cloud Architect',
        experience: 11,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+7',
        communicationScore: 4.6,
        technicalScore: 4.7,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 8,
        name: 'Ben Carter',
        role: 'DevOps Engineer',
        experience: 12,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+8',
        communicationScore: 4.7,
        technicalScore: 4.8,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 9,
        name: 'Chloe Wong',
        role: 'Data Scientist',
        experience: 13,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+9',
        communicationScore: 4.8,
        technicalScore: 4.9,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 10,
        name: 'David Lee',
        role: 'Frontend Lead',
        experience: 14,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+10',
        communicationScore: 4.9,
        technicalScore: 4.9,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 11,
        name: 'Elena Garcia',
        role: 'Security Analyst',
        experience: 5,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+11',
        communicationScore: 4.0,
        technicalScore: 4.2,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 12,
        name: 'Fiona Kelly',
        role: 'Mobile Developer',
        experience: 6,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+12',
        communicationScore: 4.1,
        technicalScore: 4.3,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 13,
        name: 'Aarav Sharma',
        role: 'Cloud Architect',
        experience: 7,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+13',
        communicationScore: 4.2,
        technicalScore: 4.4,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 14,
        name: 'Ben Carter',
        role: 'DevOps Engineer',
        experience: 8,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+14',
        communicationScore: 4.3,
        technicalScore: 4.5,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 15,
        name: 'Chloe Wong',
        role: 'Data Scientist',
        experience: 9,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+15',
        communicationScore: 4.4,
        technicalScore: 4.6,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 16,
        name: 'David Lee',
        role: 'Frontend Lead',
        experience: 10,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+16',
        communicationScore: 4.5,
        technicalScore: 4.6,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 17,
        name: 'Elena Garcia',
        role: 'Security Analyst',
        experience: 11,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+17',
        communicationScore: 4.6,
        technicalScore: 4.7,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 18,
        name: 'Fiona Kelly',
        role: 'Mobile Developer',
        experience: 12,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+18',
        communicationScore: 4.7,
        technicalScore: 4.8,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 19,
        name: 'Aarav Sharma (Page 2)',
        role: 'Cloud Architect',
        experience: 13,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+19',
        communicationScore: 4.8,
        technicalScore: 4.9,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 20,
        name: 'Ben Carter (Page 2)',
        role: 'DevOps Engineer',
        experience: 14,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+20',
        communicationScore: 4.9,
        technicalScore: 4.9,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 21,
        name: 'Chloe Wong (Page 2)',
        role: 'Data Scientist',
        experience: 5,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+21',
        communicationScore: 4.0,
        technicalScore: 4.2,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 22,
        name: 'David Lee (Page 2)',
        role: 'Frontend Lead',
        experience: 6,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+22',
        communicationScore: 4.1,
        technicalScore: 4.3,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 23,
        name: 'Elena Garcia (Page 2)',
        role: 'Security Analyst',
        experience: 7,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+23',
        communicationScore: 4.2,
        technicalScore: 4.4,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 24,
        name: 'Fiona Kelly (Page 2)',
        role: 'Mobile Developer',
        experience: 8,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+24',
        communicationScore: 4.3,
        technicalScore: 4.5,
        showHireButton: true,
        showProfileButton: true
      },
      {
        id: 25,
        name: 'New Expert (Page 2)',
        role: 'UI/UX Designer',
        experience: 9,
        profileImage: 'https://placehold.co/600x400/34495e/ffffff?text=Expert+25',
        communicationScore: 4.4,
        technicalScore: 4.6,
        showHireButton: true,
        showProfileButton: true
      }
    ]
  );

  currentPage = signal(1);

  totalPages = computed(() =>
    Math.ceil(this.experts().length / this.PAGE_SIZE)
  );

  paginatedExperts = computed(() => {
    const start = (this.currentPage() - 1) * this.PAGE_SIZE;
    return this.experts().slice(start, start + this.PAGE_SIZE);
  });

  // ✅ FIX 1 — pages array for @for loop
  pages = computed(() =>
    Array.from({ length: this.totalPages() }, (_, i) => i + 1)
  );

  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update(p => p + 1);
    }
  }

  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update(p => p - 1);
    }
  }

  // ✅ FIX 2 — needed for (click)="goToPage(page)"
  goToPage(page: number) {
    this.currentPage.set(page);
  }

  trackById(index: number, expert: any) {
    return expert.id ?? index;
  }
}
