import { Component, Input } from '@angular/core';
import {
  BreakpointComponent,
  BreakpointEnum,
} from '../../utils/breakpoint/breakpoint.component';
import { IconEntry } from '../../../models/icon-entry';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { SkillEntryComponent } from './skill-entry/skill-entry.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    SkillEntryComponent,
    NgForOf,
  ],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss',
})
export class SkillCardComponent extends BreakpointComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) entries!: IconEntry[];
  protected readonly breakpointEnum = BreakpointEnum;

  constructor() {
    super();
  }
}
