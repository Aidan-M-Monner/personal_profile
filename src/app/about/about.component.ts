import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  images: Array<string> = [
    'https://cdn.donmai.us/original/9b/5c/9b5cc9c9cf2e54284a0fae2b94b6f6c6.jpg',
    'http://static2.minitokyo.net/view/39/13/523189.jpg',
    'http://static2.minitokyo.net/view/34/13/523184.jpg', 
    'http://static2.minitokyo.net/view/05/06/522805.jpg', 
    'http://static2.minitokyo.net/view/49/47/512399.jpg'
  ]

  imageSrc = this.images[0];

  onClick(imageNameObject: any) {
    this.imageSrc = imageNameObject;
  }
}
