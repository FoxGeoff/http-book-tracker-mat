import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../core/data.service';
import { Book } from '../models/book';
import { Reader } from '../models/reader';
import { Title } from '@angular/platform-browser';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['bookID', 'title', 'author', 'publicationYear'];
  dataSource: any;
  // todo: add these data tables
  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;

  // Note use of browser title service
  constructor(private dataService: DataService, private title: Title) {
    this.allBooks = this.dataService.getAllBooks();
    this.dataSource = new MatTableDataSource<Book>(this.allBooks);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    // todo: add these data tables
    this.allReaders = this.dataService.getAllReaders();
    this.mostPopularBook = this.dataService.mostPopularBook;

    this.title.setTitle(`Book Tracker`);
  }

  deleteBook(bookID: number): void {
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
