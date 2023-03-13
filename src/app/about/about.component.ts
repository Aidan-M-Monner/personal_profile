import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  
  // Heart
  isHeartOpened: boolean = false;
  toggleHeart(): void {
    this.isHeartOpened = !this.isHeartOpened;
  }

  // Lees
  isLeesOpened: boolean = false;
  toggleLees(): void {
    this.isLeesOpened = !this.isLeesOpened;
  }

  //Aurelios
  isAureliosOpened: boolean = false;
  toggleAurelios(): void {
    this.isAureliosOpened = !this.isAureliosOpened;
  }
}
