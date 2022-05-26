import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CarsService} from "../../cars.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  form: FormGroup;

  constructor(private carsService: CarsService, private router: Router) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm() {
    this.form = new FormGroup({
      model: new FormControl(null, [Validators.minLength(1), Validators.maxLength(20), Validators.required]),
      year: new FormControl(null, [Validators.min(1996), Validators.max(new Date().getFullYear()), Validators.required]),
      price: new FormControl(null, [Validators.min(0), Validators.max(1000000), Validators.required]),
    });
  }

  create(): void {
    const formData = this.form.getRawValue();
    this.carsService.create(formData).subscribe(() => {
      this.router.navigate(['cars/all'])
    })
  }
}
