import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BooksComponent } from './books/books.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BooksComponent }, // , canActivate: [AuthGuard]

  { path: '', component: WelcomeComponent, pathMatch: 'full' }, // redirect
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
