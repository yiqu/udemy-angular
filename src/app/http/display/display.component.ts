import { Component, OnInit, OnDestroy } from '@angular/core';
import { Tweet } from '../http.component';
import { HttpPracService } from '../http.service';
import { map, takeUntil, switchMap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Utilservice } from 'src/app/shared/util.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DialogEditComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-h-d',
  templateUrl: 'display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit, OnDestroy {

  allTweets: Tweet[] = [];
  compDestory$: Subject<any> = new Subject<any>();
  dialogRef: MatDialogRef<DialogEditComponent>;

  constructor(public hs: HttpPracService, public us: Utilservice, public dialog: MatDialog) {
    this.hs.refreshClick$.pipe(
      takeUntil(this.compDestory$),
      switchMap((val) => {
        return this.getAllTweets();
      })
    ).subscribe(
      (val: Tweet[]) => {
        this.allTweets = [...val];
      }
    )

  }

  ngOnInit() {
    this.hs.refreshClick$.next();
  }

  /**
   * transform Forebase object to list, then sort it by Date of latest
   */
  getAllTweets(): Observable<Tweet[]> {
    return this.hs.getData<{[k: string]: Tweet}>().pipe(
      map((val) => {
        const res = val.body;

        let list: Tweet[] = [];
        for (const key in res) {
          const t: Tweet = res[key];
          list.push(new Tweet(t.userName, t.content, t.date, key));
        }
        return list.sort((a: Tweet, b: Tweet) => {
          return a.date < b.date ? 1: -1;
        });
      })
    )
  }

  refreshTweet() {
    this.hs.refreshClick$.next();
  }

  onDelete(t: Tweet) {
    if (t.id) {
      this.hs.deleteData(t.id).subscribe(
        (val) => {
        },
        (err) => {
        },
        () => {
          this.us.openSnackBar("Tweet deleted!");
          this.hs.refreshClick$.next();
        }
      )
    }
  }

  onEdit(t: Tweet) {
    this.openDialog(t);
    return this.dialogRef.afterClosed().pipe(
    );
  }

  openDialog(t: Tweet): void {
    this.dialogRef = this.dialog.open(DialogEditComponent, {
      minWidth: '450px',
      data: t,
      disableClose: false
    });

  }

  ngOnDestroy() {
    this.compDestory$.next();
  }
}
