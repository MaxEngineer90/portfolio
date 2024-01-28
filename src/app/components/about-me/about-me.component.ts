import { Component } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
} from '@angular/material/card';
import {
  BreakpointComponent,
  BreakpointEnum,
} from '../utils/breakpoint/breakpoint.component';
import { NgIf } from '@angular/common';
import { SkillCollectionComponent } from '../skill-collection/skill-collection.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardSubtitle,
    NgIf,
    MatCardContent,
    SkillCollectionComponent,
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent extends BreakpointComponent {
  override currentBreakpoint?: BreakpointEnum;
  protected readonly breakpointEnum = BreakpointEnum;

  constructor() {
    super();
  }
}
