import { Component } from '@angular/core';

@Component({
  selector: 'app-photos-page',
  standalone: false,
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.css']
})
export class PhotosPageComponent {
  images = [
    'Pic2-gallery.jpg',
    'Pic3-gallery.jpg',
    'Pic4-gallery.jpg',
    'Pic5-gallery.jpg',
    'Pic7-gallery.jpg',
    'Pic8-gallery.jpg',
    'Pic9-gallery.jpg',
    'Pic10-gallery.jpg'
  ];
}
