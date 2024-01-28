import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  inject,
  OnDestroy,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

export enum BreakpointEnum {
  XSmall = 'XSmall',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge',
}

@Component({
  selector: 'app-breakpoint',
  standalone: true,
  imports: [],
  templateUrl: './breakpoint.component.html',
  styleUrl: './breakpoint.component.scss',
})
export class BreakpointComponent implements AfterViewInit, OnDestroy {
  currentBreakpoint?: BreakpointEnum;
  private subscription?: Subscription;

  private breakpointObserver = inject(BreakpointObserver);
  private cdr = inject(ChangeDetectorRef);

  ngAfterViewInit() {
    this.subscription = this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        if (result.matches) {
          if (result.breakpoints[Breakpoints.XSmall]) {
            this.currentBreakpoint = BreakpointEnum.XSmall;
          } else if (result.breakpoints[Breakpoints.Small]) {
            this.currentBreakpoint = BreakpointEnum.Small;
          } else if (result.breakpoints[Breakpoints.Medium]) {
            this.currentBreakpoint = BreakpointEnum.Medium;
          } else if (result.breakpoints[Breakpoints.Large]) {
            this.currentBreakpoint = BreakpointEnum.Large;
          } else if (result.breakpoints[Breakpoints.XLarge]) {
            this.currentBreakpoint = BreakpointEnum.XLarge;
          }
          this.cdr.detectChanges();
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
