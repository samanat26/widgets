import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
})
export class CtaComponent {
  ngOnInit() {
    // this.swiper();
  }

  // swiper(){
  //   var swiper = new Swiper('.swiper', {
  //     effect: 'coverflow',
  //     grabCursor: true,
  //     centeredSlides: true,
  //     coverflowEffect: {
  //       rotate: 0,
  //       stretch: 0,
  //       depth: 100,
  //       modifier: 3,
  //       slideShadows: true,
  //     },
  //     loop: true,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
  //     breakpoints: {
  //       640: {
  //         slidesPerView: 2,
  //       },
  //       768: {
  //         slidesPerView: 1,
  //       },
  //       1024: {
  //         slidesPerView: 2,
  //       },
  //       1560: {
  //         slidesPerView: 3,
  //       },
  //     },
  //   });
  // }
}
