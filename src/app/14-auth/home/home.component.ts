import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Tweet } from 'src/app/11-http/http.component';
import { Subject } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';
import { FireUser } from '../auth.model';

@Component({
  selector: 'app-auth-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  listofTweets: Tweet[];
  compDest$: Subject<any> = new Subject<any>();
  tweetData: Tweet;

  constructor(public as: AuthService) {
    this.as.refreshClick$.pipe(
      takeUntil(this.compDest$),
      switchMap((val) => {
        return this.as.getTweets();
      })
    )
    .subscribe((t) => {
      this.listofTweets = [...t];
    });

    this.as.user$.pipe(
      takeUntil(this.compDest$)
    )
    .subscribe((val: FireUser) => {
      if (val && val.email) {
        this.tweetData = new Tweet(val.email, null);
      }
    })
  }

  ngOnInit() {
    this.as.refreshClick$.next();

  }

  onEdit(t) {

  }

  onDelete(t) {

  }

  ngOnDestroy() {
    this.compDest$.next();
  }

}
