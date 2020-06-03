import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { Book } from '../models/book';
import { Reader } from '../models/reader';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  displayedColumns: string[] = ['bookID', 'title', 'author', 'publicationYear'];
  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;

  // Note use of browser title service
  constructor(private dataService: DataService, private title: Title) { }

  ngOnInit(): void {
    this.allBooks = this.dataService.getAllBooks();
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
