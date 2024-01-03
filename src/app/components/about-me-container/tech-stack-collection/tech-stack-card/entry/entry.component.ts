import { Component, Input } from '@angular/core';
import { IconSource } from '../../../../../models/icon-source';
import { BreakpointComponent } from '../../../../breakpoint/breakpoint.component';

@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss',
})
export class EntryComponent extends BreakpointComponent {
  @Input({ required: true }) entry!: IconSource;

  constructor() {
    super();
  }
}
