import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from "./users.components/users/users.component";
import {UserDetailsComponent} from "./users.components/user.details/user.details.component";
import {UsersResolver} from "./users.service";
import {UserDetailsResolver} from "./users.service/user.details.resolver";

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    resolve: {usersData: UsersResolver},
    children: [
      {
        path: 'details/:id', component: UserDetailsComponent,
        resolve: {userDetailData: UserDetailsResolver}
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
