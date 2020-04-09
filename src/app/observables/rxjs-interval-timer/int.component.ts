import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-o-int',
  templateUrl: 'int.component.html',
  styleUrls: ['./int.component.css']
})

export class IntComponent implements OnInit, OnDestroy {

  compDest$: Subject<any> = new Subject<any>();

  intervalValue: number = 0;
  timerValue: number = 0;
  intervalSubCount: number = 0;
  timerSubCount: number = 0;

  constructor() {

  }

  ngOnInit() {
    this.startInterval();
    this.startTimer();
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

  ngOnDestroy() {
    this.compDest$.next();
  }
}
