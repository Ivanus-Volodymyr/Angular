import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form_login: FormGroup;

  constructor(private router: Router) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form_login = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
    });
  }

  login() {
    this.router.navigate(['auth/registration'])
  }
}
