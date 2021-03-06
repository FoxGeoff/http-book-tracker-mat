import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { Book } from 'src/app/models/book';
import { Reader } from 'src/app/models/reader';
import { DataService } from 'src/app/core/data.service';
import { Title } from '@angular/platform-browser';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['select', 'details', 'delete', 'title', 'author', 'publicationYear'];
  dataSource: any;
  /**  Add selection column  */
  selection = new SelectionModel<Book>(true, []);
  allBooks: Book[];

  /** todo: add these data tables  */
  mostPopularBook: Book;

  /**  Note use of browser title service  */
  constructor(private dataService: DataService, private title: Title) { }

  ngOnInit(): void {
    this.allBooks = this.dataService.getAllBooks();
    this.dataSource = new MatTableDataSource<Book>(this.allBooks);

    /** todo: add these data tables  */
    this.mostPopularBook = this.dataService.mostPopularBook;

    this.title.setTitle(`Book Tracker`);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  /** PS-Angular http communicaton */
  deleteBook(bookID: number): void {
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  /** PS-Angular http communicaton */
  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
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
  checkboxLabel(row?: Book): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.bookID + 1}`;
  }

  onRowClicked(row: any) {
    console.log(`Row clicked (year): ${row.title}`);
  }

}
