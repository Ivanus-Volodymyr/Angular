import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CarsComponent} from "./cars.components/cars/cars.component";
import {MainInterceptor} from "../../main.interceptor";
import {CarsLayoutComponent} from "./cars.components/cars-layout/cars-layout.component";
import {CreateCarComponent} from "./cars.components/create-car/create-car.component";
import {UpdateCarComponent} from "./cars.components/update-car/update-car.component";

const routes: Routes = [
  {
    path: '', component: CarsLayoutComponent, children: [
      {
        path: 'all', component: CarsComponent,
        children: [
          {path: 'update/:id', component: UpdateCarComponent}
        ]
      },
      {path: 'create', component: CreateCarComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [MainInterceptor],
})
export class CarsRoutingModule {
}
