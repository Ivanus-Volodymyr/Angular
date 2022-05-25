import {Component, OnInit} from '@angular/core';

import {CarsService} from "../../cars.services";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private carsService: CarsService) {
  }

  ngOnInit(): void {
    this.carsService.getAll().subscribe(value => console.log(value))
  }

}
