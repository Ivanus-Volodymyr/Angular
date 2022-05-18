import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../models";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users)
  }
  // getUserByID(id : number): Observable<IUser> {
  //   return this.httpClient.get<IUser>(this.url + '/users' + '/' + id)
  // }
}
