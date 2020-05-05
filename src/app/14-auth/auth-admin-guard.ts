import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { FireUser } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AdminFireGuard implements CanActivate {
  constructor(public as: AuthService, public router: Router, public route: ActivatedRoute) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.as.user$.pipe(
      map((val: FireUser) => {
        if (val && val.token) {
          return true;
        }
        this.router.navigate(['/', 'auth','nolog']);
        return false;
      })
    )
  }

}
