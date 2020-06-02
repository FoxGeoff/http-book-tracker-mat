import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexModule } from '@angular/flex-layout';
import { NavigationRoutingModule } from './navigation-routing.module';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { WelcomeComponent } from '../welcome/welcome.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    SidenavListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexModule,
    NavigationRoutingModule,
  ],
  exports: [
    SidenavComponent,
  ]
})
export class NavigationModule { }
