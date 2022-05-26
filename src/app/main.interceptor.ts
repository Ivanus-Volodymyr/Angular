import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Router} from "@angular/router";

import {AuthService} from "./modules/auth/auth.services";


@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authorized = this.authService.isAuthorization();

    if (authorized) {
      const token = this.authService.getToken();
      request = this.addToken(request, token)
    }
    return next.handle(request).pipe(
      catchError((response: HttpErrorResponse) => {
        if (response && response.error && response.status === 401) {
          this.authService.deleteToken();
          this.router.navigate(['login'])
        }
        return throwError(() => new Error('token not valid'))
      })
    );
  }

  addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
    })
  }
}
