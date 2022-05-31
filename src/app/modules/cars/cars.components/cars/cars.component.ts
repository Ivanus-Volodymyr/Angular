import {Component, OnInit} from '@angular/core';

import {CarsService, DataService} from "../../cars.services";
import {ICar} from "../../cars.models";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: ICar[];

  constructor(private carsService: CarsService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.storage.subscribe(value => this.cars = value)
  }

}
