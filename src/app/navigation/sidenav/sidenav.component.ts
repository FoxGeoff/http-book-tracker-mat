import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  // DOM reference (used for BreakpointObserver)
  // MatSidenav extends MatDrawer
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  smallWidthBreakpoint: boolean;

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router) { }

  ngOnInit(): void {
    this.DetectViewPortSize();
  }

  DetectViewPortSize() {
    // detect (using BreakpointObserver)
    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('$=== Viewport is 500px or over!');
          this.smallWidthBreakpoint = false;
        } else {
          console.log('$=== Viewport is getting smaller!');
          this.smallWidthBreakpoint = true;
        }
      });

    this.CloseSmallViewPoint();
  }

  CloseSmallViewPoint() {
    // close DOM element (using BreakpointObserver)
    this.router.events.subscribe(() => {
      if (this.smallWidthBreakpoint) {
        console.log('$=== Selection made on Smallscreen, close side bar');
        this.sidenav.close();
      }
    });
  }

  // check screen size (using BreakpointObserver)
  isScreenSmall(): boolean {
    return this.smallWidthBreakpoint;
  }

}
