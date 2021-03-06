import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {UsersRoutingModule} from './users-routing.module';

import {UsersComponent} from "./users.components/users/users.component";
import {UserDetailsResolver, UsersResolver, UsersService} from "./users.service";
import {UserComponent} from './users.components/user/user.component';
import {UserDetailsComponent} from './users.components/user.details/user.details.component';
import {UsersGuard} from "./guards";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
  ],
  providers: [UsersService, UsersResolver, UserDetailsResolver, UsersGuard],
})
export class UsersModule {
}
