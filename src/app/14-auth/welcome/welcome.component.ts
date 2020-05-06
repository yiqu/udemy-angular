import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { FireUser } from '../auth.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-auth-welcome',
  templateUrl: 'welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  msg: string;
  compDest$: Subject<any> = new Subject<any>();

  constructor(public as: AuthService) {

  }

  ngOnInit() {
    this.as.user$.pipe(
      takeUntil(this.compDest$)
    )
    .subscribe((u: FireUser) => {
      if (u) {
        let expireDate: Date = u._tokenExpireDate;
        let time = expireDate.getTime() - new Date().getTime();
        this.msg = "You token will be expiring on " + expireDate +". The remaining time in millseconds is: "+ time +
          ". In seconds: " + (time / 1000);
      }
    })
  }

  ngOnDestroy() {

  }
}
