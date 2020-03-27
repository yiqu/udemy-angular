import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  activeUsers$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  inactiveUsers$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() {
    this.activeUsers.push("Kevin", "Bekah", "Jay");
    this.inactiveUsers.push("Bob", "Jack", "Joe");
    this.activeUsers$.next(this.activeUsers);
    this.inactiveUsers$.next(this.inactiveUsers);
  }

  toggleActive(active: boolean, name: string) {
    if (active) {
      const i = this.inactiveUsers.indexOf(name);
      if (i>-1) {
        this.inactiveUsers.splice(i, 1);
      }
      this.activeUsers.push(name);
    } else {
      const i = this.activeUsers.indexOf(name);
      if (i>-1) {
        this.activeUsers.splice(i, 1);
      }
      this.inactiveUsers.push(name);
    }
    this.activeUsers$.next(this.activeUsers);
    this.inactiveUsers$.next(this.inactiveUsers);
  }

}
