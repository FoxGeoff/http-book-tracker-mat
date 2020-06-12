import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { BookTrackerError } from '../models/bookTrakerError';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  getAllBooks(): Observable<Book>[] | BookTrackerError {
    console.log('Getting all books from the server.');
    return this.http.get<Book[]>('/api/books')
      .pipe(
        catchError(err => this.handleHttpError(err))
      );
  }
}
