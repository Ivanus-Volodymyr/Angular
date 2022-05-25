import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {CarsRoutingModule} from './cars-routing.module';
import {CarsComponent} from './cars.components/cars/cars.component';
import {CarComponent} from './cars.components/car/car.component';
import {CarsService} from "./cars.services";
import {MainInterceptor} from "../../main.interceptor";


@NgModule({
  declarations: [
    CarsComponent,
    CarComponent,
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CarsService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor,
    },
  ]
})
export class CarsModule {
}
