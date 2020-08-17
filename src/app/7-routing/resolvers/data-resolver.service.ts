import { Resolve, ActivatedRouteSnapshot, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';

Injectable({
  providedIn: 'root'
})
@Injectable()
export class DataResolver implements Resolve<unknown> {

  constructor() {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<unknown> | unknown {

    return of("DATA").pipe(
      delay(1000)
    )
  }
}
