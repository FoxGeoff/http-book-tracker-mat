import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationModule } from './navigation/navigation.module';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
// Components
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BooksComponent } from './books/books.component';
// Services
import { AuthService } from './services/auth.service';
import { DataService } from './core/data.service';
import { BookTableComponent } from './books/book-table/book-table.component';
import { ReaderTableComponent } from './books/reader-table/reader-table.component';
import { BookMenuComponent } from './books/book-menu/book-menu.component';
import { NewBookDialogComponent } from './books/new-book-dialog/new-book-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    PageNotFoundComponent,
    BooksComponent,
    BookTableComponent,
    ReaderTableComponent,
    BookMenuComponent,
    NewBookDialogComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule, // CLI adds AppRoutingModule to the AppModule's imports array
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NavigationModule,
  ],
  providers: [AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
