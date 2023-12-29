import { inject, Injectable } from '@angular/core';
import { BreakpointEnum } from '../../models/breakpoint.enum';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  private breakpointObserver = inject(BreakpointObserver);
  private activeBreakpoint = new BehaviorSubject<BreakpointEnum>(
    BreakpointEnum.XSmall,
  );

  activeBreakpoint$ = this.activeBreakpoint.asObservable();

  constructor() {
    this.watchBreakpoints();
  }

  private watchBreakpoints(): void {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result: BreakpointState) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            switch (query) {
              case Breakpoints.XSmall:
                this.activeBreakpoint.next(BreakpointEnum.XSmall);
                break;
              case Breakpoints.Small:
                this.activeBreakpoint.next(BreakpointEnum.Small);
                break;
              case Breakpoints.Medium:
                this.activeBreakpoint.next(BreakpointEnum.Medium);
                break;
              case Breakpoints.Large:
                this.activeBreakpoint.next(BreakpointEnum.Large);
                break;
              case Breakpoints.XLarge:
                this.activeBreakpoint.next(BreakpointEnum.XLarge);
                break;
            }
          }
        }
      });
  }
}
