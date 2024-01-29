import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { AboutMeComponent } from './about-me/about-me.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { ContactComponent } from './contact/contact.component';
import {
  BreakpointComponent,
  BreakpointEnum,
} from './utils/breakpoint/breakpoint.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbar,
    AboutMeComponent,
    ImageCardComponent,
    ContactComponent,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent extends BreakpointComponent {
  override currentBreakpoint?: BreakpointEnum;
  protected readonly breakpointEnum = BreakpointEnum;

  constructor() {
    super();
  }
}
