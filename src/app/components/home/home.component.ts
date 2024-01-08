import { Component } from '@angular/core';
import { BreakpointEnum } from '../../models/breakpoint.enum';
import { BreakpointComponent } from '../breakpoint/breakpoint.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent extends BreakpointComponent {
  override currentBreakpoint?: BreakpointEnum;
  protected readonly breakpointEnum = BreakpointEnum;

  constructor() {
    super();
  }
}
