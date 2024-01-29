import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import {
  BreakpointComponent,
  BreakpointEnum,
} from '../utils/breakpoint/breakpoint.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [MatCard, NgIf],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss',
})
export class ImageCardComponent extends BreakpointComponent {
  override currentBreakpoint?: BreakpointEnum;
  protected readonly breakpointEnum = BreakpointEnum;

  constructor() {
    super();
  }
}
