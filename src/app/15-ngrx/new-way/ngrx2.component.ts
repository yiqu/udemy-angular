import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '../global-store/app.reducer';
import { Store, select } from '@ngrx/store';
import { ICarState, Tweet } from '../rx-store/models';
import * as fromCarActions from '../rx-store/car.actions';
import { Subject, Observable } from 'rxjs';
import { takeUntil, distinctUntilChanged, map } from 'rxjs/operators';
import * as carSelectors from '../rx-store/car.selectors';
import * as TweetsActions from '../rx-store/tweets.actions';


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
     * Only select a specfic property using selector operator.
     *
     * Because memoization, this will not fire if carStarted has not changed
     */
    this.store.pipe(
      takeUntil(this.compDest$),
      select((s: AppState) => {
        return s.car.carStarted
      })
    ).subscribe(
      (state) => {
        console.log("Car started emitting...")
        this.carStarted = state;
      }
    );

    /**
     * Only selects a feature state's property using feature state selector
     *
     * Because memoization, this will not fire if car driver has not changed
     */
    this.driverUsingFeature$ = this.store.pipe(
      takeUntil(this.compDest$),
      select(carSelectors.selectFeatureCarDriver)
    );

    /**
     * Combining 2 feature states information with one selector
     *
     * Memoized
     */
    this.store.pipe(
      takeUntil(this.compDest$),
      select(carSelectors.driverTweets)
    ).subscribe(
      (state) => {
        console.log("Combo of tweet and driver emitting: ",state)
      }
    );

  /**
   * a feature state of User
   *
   * Memoized
   */
    this.store.pipe(
      takeUntil(this.compDest$),
      select(carSelectors.selectFeatureUser)
    ).subscribe(
      (state) => {
        console.log("User emitting: ",state)
      }
    );



  /**
   * a feature state of Tweet
   *
   * Memoized
   */
    this.store.pipe(
      takeUntil(this.compDest$),
      select(carSelectors.selectFeatureTweet)
    ).subscribe(
      (state) => {
        console.log("Tweet emitting: ",state)
      }
    );



  /**
   * Car started status selector
   *
   * Memoized
   */
    this.store.pipe(
      takeUntil(this.compDest$),
      select(carSelectors.carStartedSelector)
    ).subscribe(
      (state) => {
        console.log("Car started status emitting: ",state)
      }
    );


  }

  ngOnInit() {

  }

  onStartup(name: string) {
    const time = 1234;
    this.store.dispatch(fromCarActions.carStartup({user: name, date: time}));
  }

  onPostTweet() {
    this.store.dispatch(new TweetsActions.PostNewTweetAction(new Tweet("Bekvin", "Hello", 123, "123", false, "SENT")));
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
