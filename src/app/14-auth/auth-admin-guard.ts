import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { FireUser } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AdminFireGuard implements CanActivate {
  constructor(public as: AuthService, public router: Router, public route: ActivatedRoute) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean> | boolean | UrlTree {

    return this.as.user$
    .pipe(
      take(1),
      map((val: FireUser) => {
        if (val && val.token) {
          return true;
        }
        return this.router.createUrlTree(['/', 'auth','nolog']);
      })
    )
  }

}
