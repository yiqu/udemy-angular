import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { timer, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'event-binding-control',
  templateUrl: 'control.comp.html',
  styleUrls: ['./control.comp.css']
})

export class ControlComponent implements OnInit, OnDestroy {

  @Output()
  timerEmit: EventEmitter<number> = new EventEmitter<number>();

  timer$: Observable<number> = timer(0, 1000);
  stop$: Subject<any> = new Subject<any>();


  constructor() {

  }

  ngOnInit() { }

  onStartGame() {
    this.timer$.pipe(
      takeUntil(this.stop$)
    ).subscribe((val: number) => {
      this.timerEmit.emit(val);
    })
  }

  onStopGame() {
    this.stop$.next();
  }

  ngOnDestroy() {
    this.stop$.next();
  }
}