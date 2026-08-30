import { Component } from '@angular/core';

@Component({
  selector: 'app-photos-page',
  standalone: false,
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.css']
})
export class PhotosPageComponent {
  images = [
    'Pic2.jpg',
    'Pic3.jpg',
    'Pic4.jpg',
    'Pic5.jpg',
    'Pic7.jpg',
    'Pic8.jpg',
    'Pic9.jpg'
  ];
}
