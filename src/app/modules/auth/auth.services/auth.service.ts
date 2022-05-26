import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

import {IToken, IUser} from "../auth.models";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private access = 'access';
  private refresh = 'refresh';

  constructor(private httpClient: HttpClient) {
  }

  registration(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user)
  }

  login(user: IUser): Observable<IToken> {
    return this.httpClient.post<IToken>(urls.auth, user)
  }

  setToken(token: IToken): void {
    localStorage.setItem(this.access, token.access);
    localStorage.setItem(this.refresh, token.refresh);
  }

  getAccessToken(): string {
    return localStorage.getItem(this.access)
  }

  getRefreshToken(): string {
    return localStorage.getItem(this.refresh)
  }

  refreshToken(): Observable<IToken> {
    const refresh = this.getRefreshToken();
    return this.httpClient.post<IToken>(`${urls.auth}/refresh`, {refresh}).pipe(
      tap((tokens: IToken) => {
        this.setToken(tokens)
      })
    )
  }

  deleteToken(): void {
    localStorage.removeItem(this.access)
    localStorage.removeItem(this.refresh)
  }

  isAuthorization(): boolean {
    return !!localStorage.getItem(this.access)
  }
}
