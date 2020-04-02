import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoutingPracticeService {

  isLoggedIn: boolean = false;

  constructor() {

  }

  setLoggedIn(status: boolean) {
    this.isLoggedIn = status;
  }

  getAdminStatus(): Observable<boolean> {
    return of(this.isLoggedIn).pipe(
      delay(2000)
    );
  }

}
