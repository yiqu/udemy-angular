import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RoutingPracticeService } from '../routing.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(public rs: RoutingPracticeService, public router: Router, public route: ActivatedRoute) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.rs.getAdminStatus().pipe(
      map((val) => {
        console.log(val)
        if (val) {
          return val;
        }
        this.router.navigate(['routing'])
        return false;
      })
    )
  }

}

@Injectable({
  providedIn: 'root'
})
export class AdminChildrenOnlyGuard implements CanActivateChild {
  constructor(public rs: RoutingPracticeService, public router: Router, public route: ActivatedRoute) {
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.rs.getAdminChildrenStatus().pipe(
      map((val) => {
        console.log(val)
        if (val) {
          return val;
        }
        this.router.navigate(['routing', 'admin'])
        return false;
      })
    )
  }

}
