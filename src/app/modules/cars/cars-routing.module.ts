import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CarsComponent} from "./cars.components/cars/cars.component";
import {MainInterceptor} from "../../main.interceptor";

const routes: Routes = [
  {path: '', component: CarsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [MainInterceptor],
})
export class CarsRoutingModule {
}
