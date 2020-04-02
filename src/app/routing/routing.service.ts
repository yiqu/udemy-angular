import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoutingPracticeService {

  public isLoggedIn: boolean = false;
  public canSeeClassDetail: boolean = false;

  constructor() {

  }

  setLoggedIn(status: boolean) {
    this.isLoggedIn = status;
  }

  getAdminStatus(): Observable<boolean> {
    return of(this.isLoggedIn).pipe(
      delay(0)
    );
  }

  getAdminChildrenStatus(): Observable<boolean> {
    return of(this.canSeeClassDetail).pipe(
      delay(0)
    )
  }

}
