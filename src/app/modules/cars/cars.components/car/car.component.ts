import {Component, Input, OnInit} from '@angular/core';

import {ICar} from "../../cars.models";
import {CarsService} from "../../cars.services";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private carsService: CarsService) {
  }

  @Input()
  car: ICar
  carForUpdate: ICar;

  ngOnInit(): void {
  }

  deleteCar(id: number): void {
    this.carsService.deleteById(id).subscribe(() => {
      window.location.reload();
    });
  }


  update(car: ICar) {
    this.carForUpdate = car;
  }
}
