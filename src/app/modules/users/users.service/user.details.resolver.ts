import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, ActivatedRoute
} from '@angular/router';
import {map, Observable, of} from 'rxjs';

import {IUser} from "../users.models";
import {UsersService} from "./users.service";

@Injectable({
  providedIn: 'root'
})
export class UserDetailsResolver implements Resolve<IUser> {


  constructor(private usersService: UsersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    const id = route.paramMap.get('id');
    return (this.usersService.getUserById(id))
  }
}
