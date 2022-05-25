import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this._createForm()
  }

  _createForm() {
    this.form = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
      confirmPassword: new FormControl(null),
    })
  }

  register(): void {
    console.log(this.form);
  }
}
