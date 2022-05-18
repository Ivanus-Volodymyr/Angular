import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { UsersRoutingModule } from './users-routing.module';

import {UsersComponent} from "./users.components/users/users.component";
import {UsersService} from "./users.service";
import { UserComponent } from './users.components/user/user.component';




@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
  ],
  providers:[UsersService],
})
export class UsersModule { }
