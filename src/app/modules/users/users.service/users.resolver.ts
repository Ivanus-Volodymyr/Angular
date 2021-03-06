import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {IUser} from "../users.models";
import {UsersService} from "./users.service";

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<IUser[]> {

  constructor(private usersService: UsersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
    return this.usersService.getUsers();
  }
}
