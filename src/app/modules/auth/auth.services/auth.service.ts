import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IToken, IUser} from "../auth.models";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private access = 'access';

  constructor(private httpClient: HttpClient) {
  }

  registration(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user)
  }

  login(user: IUser): Observable<IToken> {
    return this.httpClient.post<IToken>(urls.auth, user)
  }

  setToken(token: IToken): void {
    localStorage.setItem(this.access, token.access)
  }

  getToken(): string {
    return localStorage.getItem(this.access)
  }

  deleteToken(): void {
    localStorage.removeItem(this.access)
  }

  isAuthorization(): boolean {
    return !!localStorage.getItem(this.access)
  }
}
