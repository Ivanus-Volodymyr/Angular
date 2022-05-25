import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AuthRoutingModule} from './auth-routing.module';
import {RegistrationComponent} from './auth.components/registration/registration.component';
import {LoginComponent} from './auth.components/login/login.component';
import {AuthService} from "./auth.services";



@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService],
})
export class AuthModule {
}
