import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, interval, of, Subject } from 'rxjs';
import { delay, take, catchError, takeUntil } from 'rxjs/operators';
import { Utilservice } from 'src/app/shared/util.service';


@Component({
  selector: 'app-o-create',
  templateUrl: 'create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit, OnDestroy {

  compDest$: Subject<any> = new Subject<any>();

  obsThatCompleteStatus: boolean = false;
  obsThatDoesNotCompleteStatus: boolean = false;
  obsThatCompleteValue: string;
  obsThatDoesNotCompleteValue: string;
  stringObsThatCompletes: Observable<string>;
  stringObsThatDoesNotComplete: Observable<string>;
  obsThatHasError: Observable<string>;
  obsThatHasErrorValue: string;
  obsThatHasErrorCompletes: boolean = false;

  constructor(public us: Utilservice) {

  }

  createObsThatCompletes() {
    return Observable.create(
      (observer: Observer<any>) => {
        interval(1000).pipe(take(5)).subscribe((val) => {
          observer.next("(" + (val+1) + ") Emitting...");
        },
        (err) => {
        },
        () => {
          observer.complete();
        })

      }
    );
  }

  createObsThatDoesNotComplete() {
    return Observable.create(
      (observer: Observer<any>) => {
        observer.next("Hello, i will not complete!");
      }
    );
  }

  createObsThatHasError() {
    return Observable.create(
      (observer: Observer<any>) => {
        let count: number = 0;
        setInterval(() => {
          if (count === 6) {
            observer.error(new Error("On three. Error! Error!"));
          }
          if (count === 8) {
            observer.complete();
          }
          observer.next("Current number: " + count);
          count++;
        }, 1000)
      }
    );
  }

  ngOnInit() {
    // create the observables
    this.stringObsThatCompletes = this.createObsThatCompletes();
    this.stringObsThatDoesNotComplete = this.createObsThatDoesNotComplete();
    this.obsThatHasError = this.createObsThatHasError();

    // subscribe to the observables
    this.stringObsThatCompletes.pipe(delay(0), takeUntil(this.compDest$)).subscribe(
      (val: string) => {
        this.obsThatCompleteValue = val;
        this.us.openSnackBar("Obs #1 current value: " + val);
      },
      (err) => {
      },
      () => {
        this.obsThatCompleteStatus = true;
        this.us.openSnackBar("Obs #1 Completed!");
      }
    )

    this.stringObsThatDoesNotComplete.pipe(delay(0), takeUntil(this.compDest$)).subscribe(
      (val: string) => {
        this.obsThatDoesNotCompleteValue = val;
      },
      (err) => {
      },
      () => {
        this.obsThatDoesNotCompleteStatus = true;
        this.us.openSnackBar("Obs #2 Completed!");
      }
    )

    this.obsThatHasError.pipe(
      takeUntil(this.compDest$),
      catchError((e) => {
        return of("Caught an error for you: " + e);
      })
    ).subscribe((val) => {
      this.obsThatHasErrorValue = val;
    },
    (err) => {
      console.log("This doesnt get exec'd . Oops! Err details: " + err);
    },
    () => {
      this.us.openSnackBar("Obs #3 Completed!");
      this.obsThatHasErrorCompletes = true;
    })

  }

  ngOnDestroy() {
    this.compDest$.next();
  }



}
