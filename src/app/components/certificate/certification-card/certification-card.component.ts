import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IconSource } from '../../../models/icon-source';
import { BreakpointComponent } from '../../breakpoint/breakpoint.component';
import { BreakpointEnum } from '../../../models/breakpoint.enum';

@Component({
  selector: 'app-certification-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './certification-card.component.html',
  styleUrl: './certification-card.component.scss',
})
export class CertificationCardComponent extends BreakpointComponent {
  @Input({ required: true }) source!: IconSource;
  override currentBreakpoint?: BreakpointEnum;

  protected readonly breakpointEnum = BreakpointEnum;

  constructor() {
    super();
  }
}
