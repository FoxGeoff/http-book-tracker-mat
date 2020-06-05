import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewBookDialogComponent } from '../new-book-dialog/new-book-dialog.component';

@Component({
  selector: 'app-book-menu',
  templateUrl: './book-menu.component.html',
  styleUrls: ['./book-menu.component.css']
})
export class BookMenuComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openAddContactDialog(): void {
    const dialogRef = this.dialog.open(NewBookDialogComponent,
      { width: '450px' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dailog is closed', result);
    });
  }

}
