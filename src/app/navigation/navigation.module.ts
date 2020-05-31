import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    SidenavComponent,
  ]
})
export class NavigationModule { }
