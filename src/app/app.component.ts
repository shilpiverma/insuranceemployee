import { Component ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmployeecontainerComponent } from './employeecontainer/employeecontainer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuoteEmployee';

  constructor(public dialog: MatDialog){}

  showDialog(){
    this.dialog.open(EmployeecontainerComponent, {
        width: '1000px',
      });
    }
}
