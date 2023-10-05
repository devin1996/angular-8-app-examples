import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../dialog/dialog-component';

@Component({
  selector: 'timeline-parent',
  templateUrl: './timelineParent.component.html',
  styleUrls: ['./timelineParent.component.css'],
})
export class TimelineParent {
  buttonSelection = 'Angular';

  openTimeLine() {}
  animal: string;
  name: string;

  // secret to validate the password
  secret = 'YESRUNFUNCTION';

  //constructor(public dialog: MatDialog) {}

  generate(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((password) => {
      const isPwdValid = password === this.secret;
      console.log(isPwdValid);
      if (isPwdValid) {
        // run code for correct password
      } else {
        // run code for wrong password
      }
    });
  }
}
