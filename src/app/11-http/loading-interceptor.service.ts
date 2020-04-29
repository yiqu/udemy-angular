import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IsLoadingService } from './loading.service';
import { tap, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckForLoadingInterceptor implements HttpInterceptor {

  constructor(public ils: IsLoadingService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.ils.setLoading(true);
    return next.handle(req).pipe(
      tap((e: HttpEvent<any>) => {
        if (e.type === HttpEventType.Response) {
          this.ils.setLoading(false);
        }
        if (e.type === HttpEventType.Sent) {
        }
      })
    );
  }
}
