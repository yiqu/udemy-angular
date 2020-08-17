import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '../global-store/app.reducer';
import { Store, select } from '@ngrx/store';
import { ICarState } from '../rx-store/models';
import * as fromCarActions from '../rx-store/car.actions';
import { Subject, Observable } from 'rxjs';
import { takeUntil, distinctUntilChanged, map } from 'rxjs/operators';
import * as carSelectors from '../rx-store/car.selectors';

@Component({
  selector: 'app-ngrx-2',
  templateUrl: 'ngrx2.component.html',
  styleUrls: ['./ngrx2.component.css']
})

export class NgRx2Component implements OnInit, OnDestroy {

  triggerCount: number = 0;
  compDest$: Subject<any> = new Subject<any>();
  driverName: string;
  startDate: number;
  driverUsingFeature$: Observable<string>;
  carStarted: boolean;

  /**
   * Select car state
   */
  constructor(public store: Store<AppState>) {
    this.store.select("car").pipe(
      takeUntil(this.compDest$)
    )
    .subscribe(
      (state) => {
        this.triggerCount ++;
        this.driverName = state.driver;
        this.startDate = state.carStartedDate;
      }
    );

    /**
     * Only select a specfic property using selector operator
     */
    this.store.pipe(
      takeUntil(this.compDest$),
      select((s: AppState) => {
        return s.car.carStarted
      })
    ).subscribe(
      (state) => {
        this.carStarted = state;
      }
    );

    /**
     * Only selects a feature state's property using feature state selector
     */
    this.driverUsingFeature$ = this.store.pipe(
      takeUntil(this.compDest$),
      select(carSelectors.selectFeatureCarDriver)
    );

  }

  ngOnInit() {

  }

  onStartup(name: string) {
    const time = 1234;
    this.store.dispatch(fromCarActions.carStartup({user: name, date: time}));
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
