import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CarouselComponent} from './carousel/carousel.component';
import {CarouselModule} from "ngx-bootstrap/carousel";

@NgModule({
  declarations: [
    CarouselComponent,
  ],
  imports: [
    CarouselModule,
    CommonModule,
  ],
  providers: [],
  exports: [
    CarouselComponent,
  ],
  bootstrap: [CarouselComponent]
})
export class TestCarouselModule {
}
