import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import 'hammerjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    ngOnInit(): void {

        this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];

        this.galleryImages = [
          {
            small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-small.jpeg',
            medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-medium.jpeg',
            big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg'
          },
          {
            small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-small.jpeg',
            medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-medium.jpeg',
            big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg'
          },
          {
            small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg',
            medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg',
            big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg'
          },
          {
            small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg',
            medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg',
            big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg'
          },
          {
            small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg',
            medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg',
            big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg'
          }      
        ];
    }

}
