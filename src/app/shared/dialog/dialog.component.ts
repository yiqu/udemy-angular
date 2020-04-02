import {Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css'],
})
export class DialogConfirmComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick() {
    this.dialogRef.close(true);
  }

}
