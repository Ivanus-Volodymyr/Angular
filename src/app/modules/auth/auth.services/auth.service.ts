import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../auth.models";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  registration(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user)
  }
}
