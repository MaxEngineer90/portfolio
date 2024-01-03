import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { BreakpointEnum } from '../../models/breakpoint.enum';
import { BreakpointComponent } from '../breakpoint/breakpoint.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatListModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent extends BreakpointComponent {
  override currentBreakpoint?: BreakpointEnum;
  breakpointEnum = BreakpointEnum;

  constructor() {
    super();
  }
}
