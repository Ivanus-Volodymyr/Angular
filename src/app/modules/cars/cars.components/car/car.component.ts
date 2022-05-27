import {Component, Input, OnInit} from '@angular/core';

import {ICar} from "../../cars.models";
import {CarsService, DataService} from "../../cars.services";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private carsService: CarsService, private dataService: DataService) {
  }

  @Input()
  car: ICar
  cars: ICar[];

  ngOnInit(): void {
  }

  deleteCar(id: number): void {
    this.carsService.deleteById(id).subscribe(() => {
      this.dataService.storage.subscribe(value => {
        const index = value.findIndex(car => car.id === id);
        value.splice(index, 1)
      });
    });
  }
}
