import {Component, inject, OnDestroy, ViewEncapsulation} from '@angular/core';
import {BreakpointService} from "../../services/breakpoint.service";
import {Subscription} from "rxjs";
import {BreakpointEnum} from "../../models/breakpoint.enum";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {SkillCardComponent} from "./skill-card/skill-card.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
    MatListModule,
    SkillCardComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AboutMeComponent implements OnDestroy {
  currentBreakpoint?: BreakpointEnum;

  readonly BreakpointEnum = BreakpointEnum;

  private subscription?: Subscription;
  private readonly breakpointService = inject(BreakpointService);

  constructor() {
    this.subscription = this.breakpointService.activeBreakpoint$.subscribe(breakpoint => {
      this.currentBreakpoint = breakpoint;
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  getColSize(): number {
    if (this.currentBreakpoint === this.breakpointEnum.XSmall || this.currentBreakpoint === BreakpointEnum.Small) {
      return 1;
    } else {
      return 4;
    }
  }

  protected readonly breakpointEnum = BreakpointEnum;
}
