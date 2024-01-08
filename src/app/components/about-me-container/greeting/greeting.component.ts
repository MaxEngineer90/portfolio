import { Component } from '@angular/core';
import { BreakpointEnum } from '../../../models/breakpoint.enum';
import { BreakpointComponent } from '../../breakpoint/breakpoint.component';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss',
})
export class GreetingComponent extends BreakpointComponent {
  override currentBreakpoint?: BreakpointEnum;
  protected readonly breakpointEnum = BreakpointEnum;

  constructor() {
    super();
  }
}
