import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images = [
    {
      imageSrc: '/assets/home/Aidan-Monner.png',
      imageAlt: 'main-img'
    },
    {
      imageSrc: '/assets/home/Aidan-Monner-Beasley.png',
      imageAlt: 'dog'
    },
    {
      imageSrc: '/assets/home/Aidan-Monner-drawing.png',
      imageAlt: 'drawing'
    },
    {
      imageSrc: '/assets/home/Aidan-Monner-Aquarium.png',
      imageAlt: 'aquarium'
    },
    {
      imageSrc: '/assets/home/Aidan-Monner-Monado.png',
      imageAlt: 'monado'
    },
    {
      imageSrc: '/assets/home/Aidan-Monner-Nostalgia-Critic.png',
      imageAlt: 'nostalgia'
    },
  ]
}
