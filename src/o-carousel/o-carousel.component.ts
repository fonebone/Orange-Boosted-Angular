/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-carousel.component.ts
 * copyright 2018 Orange SA
 * src: https://github.com/ksachdeva/angular2-swiper/blob/master/src/ks-swiper.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  Component,
  Injectable,
  Inject,
  ElementRef,
  Host,
  AfterViewInit
} from '@angular/core';

import { OCarouselContainerComponent } from './o-carousel-container.component';

@Injectable()
@Component({
  selector: 'o-carousel-slide',
  template: '<div><ng-content></ng-content></div>'
})
export class OCarouselComponent implements AfterViewInit {

  private elm: HTMLElement;
  private swiper: OCarouselContainerComponent;

  constructor(
    @Inject(ElementRef) elementRef: ElementRef,
    @Host() @Inject(OCarouselContainerComponent) swiper: OCarouselContainerComponent
  ) {
    this.elm = elementRef.nativeElement;
    this.swiper = swiper;
  }

  public ngAfterViewInit() {
    this.elm.classList.add('swiper-slide');
    this.swiper.update();
  }

}
