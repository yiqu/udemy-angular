import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'dialog-edit-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css'],
})
export class DialogEditComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data)
  }

  ngOnInit() {

  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onEditCompleted(e: boolean) {
    this.onCancel();
  }

}
