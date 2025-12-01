import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  typedText = "";
fullText = "TRANSFORM - UPGRADE - EXCEL";
index = 0;

ngOnInit() {
  this.startTyping();
}

startTyping() {
  const typingSpeed = 120; // adjust speed here

  const interval = setInterval(() => {
    this.typedText += this.fullText[this.index];
    this.index++;

    if (this.index === this.fullText.length) {
      clearInterval(interval);
    }
  }, typingSpeed);
}
  }