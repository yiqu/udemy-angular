import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, CanDeactivate, Data } from '@angular/router';
import { CanComponentDeactivate } from '../../guards/saved-guard.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogConfirmComponent } from 'src/app/shared/dialog/dialog.component';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-r-admin-edit',
  templateUrl: 'edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class AdminEditComponent implements OnInit, CanComponentDeactivate {

  paramsObj: {} = {};
  currentId: string;
  detailName: string;
  canEdit: boolean;
  saved: boolean = true;
  dialogRef: MatDialogRef<DialogConfirmComponent>;

  constructor(public router: Router, public route: ActivatedRoute, public dialog: MatDialog, public http: HttpClient) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((res)=> {
      this.currentId = res.get('id');
      this.setName(this.currentId);

      res.keys.forEach((key) => {
        this.paramsObj[key] = res.get(key);
      })
    });

    this.route.queryParamMap.subscribe((res: ParamMap) => {
      this.setCanEdit(res.get("canEdit"));
    });

    this.route.data.subscribe((data: Data) => {
      console.log(data)
    })
  }

  canDeactivate() {
    if (this.saved) {
      return true;
    }
    this.openDialog();
    return this.dialogRef.afterClosed().pipe(
      map((res: boolean) => {
        if (res) {
          this.saved = true;
          return true;
        }
        return false;
      })
      // If you want to save it via http

      // switchMap((res) => {
      //   return this.http.get("hello").pipe(
      //     map((res) => {
      //       if (res === 200) {
      //         return true
      //       }
      //       return false;
      //     })
      //   );
      // })
    );
  }

  onEdit() {
    this.saved = false;
  }


  setName(id: string) {
    this.detailName = "Name" + id;
  }

  setCanEdit(edit) {
    this.canEdit = (edit === 'true');
  }

  toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  }

  saveChanges() {
    window.alert("Saved, but not really.")
    this.saved = true;
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '250px',
      data: null
    });

  }
}
