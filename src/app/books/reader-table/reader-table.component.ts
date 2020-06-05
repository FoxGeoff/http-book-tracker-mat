import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { Reader } from 'src/app/models/reader';
import { DataService } from 'src/app/core/data.service';
import { Title } from '@angular/platform-browser';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reader-table',
  templateUrl: './reader-table.component.html',
  styleUrls: ['./reader-table.component.css']
})
export class ReaderTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['select', 'details', 'delete', 'name', 'totalMinutesRead', 'weeklyReadingGoal'];
  dataSource: any;
  /**  Add selection column  */
  selection = new SelectionModel<Reader>(true, []);
  allReaders: Reader[];

  /**  Note use of browser title service  */
  constructor(private dataService: DataService, private title: Title) { }

  ngOnInit(): void {
    this.allReaders = this.dataService.getAllReaders();
    this.dataSource = new MatTableDataSource<Reader>(this.allReaders);

    this.title.setTitle(`Reader Tracker`);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  /** PS-Angular http communicaton */
  deleteReader(ReaderID: number): void {
    console.warn(`Delete Reader not yet implemented (ReaderID: ${ReaderID}).`);
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Reader): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.readerID + 1}`;
  }

  onRowClicked(row: any) {
    console.log(`Row clicked (year): ${row.title}`);
  }

}
