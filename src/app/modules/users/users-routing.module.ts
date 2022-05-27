import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from "./users.components/users/users.component";
import {UserDetailsComponent} from "./users.components/user.details/user.details.component";
import {UserDetailsResolver, UsersResolver} from "./users.service";
import {UsersGuard} from "./guards";

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    canActivate: [UsersGuard],
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
