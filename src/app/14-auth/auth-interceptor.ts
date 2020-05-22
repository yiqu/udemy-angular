import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, delay, exhaustMap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { FireUser } from './auth.model';

@Injectable()
export class AuthKeyInterceptor implements HttpInterceptor {

  constructor(public as: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.as.user$.pipe(
      take(1),
      exhaustMap((u: FireUser) => {
        console.log("in INTERCEPTOR")
        if (!u || req.method === "GET") {
          return next.handle(req);
        } else {
          const token = u.token ? u.token : null;

          let headers = new HttpHeaders();
          if (token) {
            headers = headers.append("auth", token);
          }
          headers = headers.append("another", "example");

          let params: HttpParams = new HttpParams();
          params = params.set("auth", token);

          const modifiedReq = req.clone({
            headers: headers,
            params: params
          })
          return next.handle(modifiedReq);
        }
      })
    );
  }
}
