import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationRoutingModule } from './navigation-routing.module';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';
/* Navigation components */
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';

import { AuthGuard } from '../auth/auth.guard';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    SidenavListComponent,
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    MaterialModule,
    AppRoutingModule,
  ],
  exports: [SidenavComponent],
})
export class NavigationModule { }
