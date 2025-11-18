import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expert-card',
  imports: [],
  templateUrl: './expert-card.component.html',
  styleUrl: './expert-card.component.scss'
})
export class ExpertCardComponent {
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() experience: number = 0;
  @Input() profileImage: string = '';

  @Input() communicationScore: number = 0;
  @Input() technicalScore: number = 0;

  @Input() showHireButton: boolean = true;
  @Input() showProfileButton: boolean = true;
}
