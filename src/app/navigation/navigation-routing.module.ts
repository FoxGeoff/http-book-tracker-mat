import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Services
import { AuthGuard } from '../auth/auth.guard';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthGuard]
})
export class NavigationRoutingModule { }
