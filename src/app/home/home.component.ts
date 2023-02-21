import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images = [
    {
      imageSrc: 'https://64.media.tumblr.com/tumblr_lz46chSuSk1qh5juxo1_1280.jpg',
      imageAlt: 'Finn-bot'
    },
    {
      imageSrc: 'https://64.media.tumblr.com/171193b48d6e1482d73a813daf1942eb/cadb65208b1c3d8c-71/s540x810/c85a0da9ad19c6a3202e99d93813366515f0a08f.jpg',
      imageAlt: 'BMO-bubbles'
    },
    {
      imageSrc: 'https://www.desktopbackground.org/download/1440x900/2015/01/01/880483_adventure-time-wallpaper-tumblr-walleo-co_1920x1080_h.jpg',
      imageAlt: 'Finn-Jake-quotes'
    },
    {
      imageSrc: 'https://wallpaperaccess.com/full/830205.png',
      imageAlt: 'Adventure-Time'
    },
  ]
}
