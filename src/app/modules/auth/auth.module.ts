import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import {AuthRoutingModule} from './auth-routing.module';
import {RegistrationComponent} from './auth.components/registration/registration.component';
import {LoginComponent} from './auth.components/login/login.component';
import {AuthService} from "./auth.services";
import {HttpClient} from "@angular/common/http";


@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
})
export class AuthModule {
}