import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CarsComponent} from "./cars.components/cars/cars.component";
import {CarsService} from "./cars.services/cars.service";

const routes: Routes = [
  {path: '', component: CarsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CarsService],
})
export class CarsRoutingModule {
}
