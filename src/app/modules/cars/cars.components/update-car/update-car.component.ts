import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

import {ICar} from "../../cars.models";
import {CarsService, DataService} from "../../cars.services";


@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  cars: ICar[];
  car: ICar;
  id: number;
  updateForm: FormGroup;

  constructor(
    private carsService: CarsService,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
  ) {
    this._createUpdateForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => this.id = +value['id'])
    this.car = history.state.car;
    this.updateForm?.setValue({model: this.car?.model, year: this.car?.year, price: this.car?.price})
  }

  _createUpdateForm(): void {
    this.updateForm = new FormGroup({
      model: new FormControl(null, [Validators.minLength(1), Validators.maxLength(20)]),
      year: new FormControl(null, [Validators.min(1996), Validators.max(new Date().getFullYear())]),
      price: new FormControl(null, [Validators.min(0), Validators.max(1000000)]),
    });
  }

  update(): void {
    const newCarValue = this.updateForm.getRawValue();

    this.carsService.updateCar(this.id, newCarValue).subscribe(() => {
      this.dataService.storage.subscribe(cars => {
        const index = cars.findIndex(car => car.id === newCarValue.id);
        cars.splice(index, 1);
        cars.push(newCarValue);
        console.log(cars);
        this.router.navigate(['cars/all'])
      })
    });
  }
}
