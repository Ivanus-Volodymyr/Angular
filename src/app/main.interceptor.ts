import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, switchMap, throwError} from 'rxjs';
import {Router} from "@angular/router";

import {AuthService} from "./modules/auth/auth.services";
import {IToken} from "./modules/auth/auth.models";


@Injectable()
export class MainInterceptor implements HttpInterceptor {

  private refreshing = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authorized = this.authService.isAuthorization();

    if (authorized) {
      const token = this.authService.getAccessToken();
      request = this.addToken(request, token)
    }
    return next.handle(request).pipe(
      catchError((response: HttpErrorResponse) => {
        if (response && response.error && response.status === 401) {
          return this.handler401Error(request, next)
        }
        return throwError(() => new Error('token not valid'))
      })
    ) as any;
  }

  addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
    })
  }

  handler401Error(request: HttpRequest<any>, next: HttpHandler): any {
    if (!this.refreshing) {
      this.refreshing = true;
      return this.authService.refreshToken().pipe(
        switchMap((token: IToken) => {
          return next.handle(this.addToken(request, token.access))
        }),
        catchError(() => {
          this.refreshing = false;
          this.authService.deleteToken();
          this.router.navigate(['auth/login'])
          return throwError(() => new Error('token invalid or expired'))
        })
      )
    }
  }
}
