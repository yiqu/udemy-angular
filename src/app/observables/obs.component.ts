import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription, interval, timer } from 'rxjs';
import { takeUntil, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-o',
  templateUrl: 'obs.component.html',
  styleUrls: ['./obs.component.css']
})

export class ObsComponent implements OnInit, OnDestroy {

  compDest$: Subject<any> = new Subject<any>();

  intervalValue: number = 0;
  timerValue: number = 0;
  intervalSubCount: number = 0;
  timerSubCount: number = 0;

  basicTimerInterval$: Subscription;

  constructor() {

  }

  ngOnInit() {
    this.startInterval();
    this.startTimer();
  }

  ngOnDestroy() {
    this.compDest$.next();
  }

  startInterval() {
    this.intervalSubCount++;
    interval(1000).pipe(
      takeUntil(
        this.compDest$
      )
    ).subscribe((val: number) => {
      this.intervalValue = val;
    })
  }

  startTimer() {
    this.timerSubCount++;
    timer(0, 1000).pipe(
      takeUntil(
        this.compDest$
      )
    ).subscribe((res:  number) => {
      this.timerValue = res;
    })
  }

  onStartInterval() {
    this.startInterval();
    this.startTimer();
  }

  onStopInterval() {
    this.timerSubCount = 0;
    this.intervalSubCount = 0;
    this.compDest$.next();
  }
}
