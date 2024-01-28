import { Component, Input } from '@angular/core';
import { BreakpointComponent } from '../../../utils/breakpoint/breakpoint.component';
import { IconEntry } from '../../../../models/icon-entry';

@Component({
  selector: 'app-skill-entry',
  standalone: true,
  imports: [],
  templateUrl: './skill-entry.component.html',
  styleUrl: './skill-entry.component.scss',
})
export class SkillEntryComponent extends BreakpointComponent {
  @Input({ required: true }) entry!: IconEntry;

  constructor() {
    super();
  }
}
