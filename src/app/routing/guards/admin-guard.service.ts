import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot,
  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutingPracticeService } from '../routing.service';

export class AdminGuard implements CanActivate {
  constructor(public rs: RoutingPracticeService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.rs.getAdminStatus();
  }
}
