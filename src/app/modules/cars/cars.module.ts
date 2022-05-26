import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {CarsRoutingModule} from './cars-routing.module';
import {CarsComponent} from './cars.components/cars/cars.component';
import {CarComponent} from './cars.components/car/car.component';
import {CarsService} from "./cars.services";
import {MainInterceptor} from "../../main.interceptor";
import { CarsLayoutComponent } from './cars.components/cars-layout/cars-layout.component';
import { CreateCarComponent } from './cars.components/create-car/create-car.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateCarComponent } from './cars.components/update-car/update-car.component';


@NgModule({
  declarations: [
    CarsComponent,
    CarComponent,
    CarsLayoutComponent,
    CreateCarComponent,
    UpdateCarComponent,
  ],
    imports: [
        CommonModule,
        CarsRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
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
