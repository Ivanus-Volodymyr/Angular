import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {AuthService} from "../../auth.services";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this._createForm()
  }

  _createForm() {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.minLength(4), Validators.maxLength(15), Validators.required]),
      password: new FormControl(null, [Validators.minLength(4), Validators.maxLength(15), Validators.required]),
      confirmPassword: new FormControl(null, [Validators.minLength(5), Validators.maxLength(20), Validators.required]),
    }, [this._checkPasswords]);
  }

  register(): void {
    const formData = this.form.getRawValue();
    delete formData.confirmPassword;
    this.authService.registration(formData).subscribe(value => console.log(value))
  }

  _checkPasswords(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return password.value === confirmPassword.value ? null : {notSame: 'Password not confirm'};
  }
}
