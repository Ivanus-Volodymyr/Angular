import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, Router
} from '@angular/router';
import {Observable} from 'rxjs';

import {IUser} from "../users.models";
import {UsersService} from "./users.service";

@Injectable({
  providedIn: 'root'
})
export class UserDetailsResolver implements Resolve<IUser> {


  constructor(private usersService: UsersService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    const user = this.router.getCurrentNavigation()?.extras?.state?.['user'] as IUser;

    if (user) {
      return user;
    }

    const id = route.paramMap.get('id');
    return (this.usersService.getUserById(id))
  }
}
