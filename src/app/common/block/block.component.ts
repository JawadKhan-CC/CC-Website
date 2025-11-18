import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block',
  imports: [],
  templateUrl: './block.component.html',
  styleUrl: './block.component.scss'
})
export class BlockComponent {
  @Input() imageUrl: string = '';
  @Input() name: string = '';
  @Input() content: string = '';
  showPopup: boolean = false;

  openDetailPopup() {
    this.showPopup = true;
  }

  closeDetailPopup() {
    this.showPopup = false;
  }
}
