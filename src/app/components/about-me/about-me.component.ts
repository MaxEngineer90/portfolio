import { Component, inject, OnDestroy, ViewEncapsulation } from '@angular/core';
import { BreakpointService } from '../../services/breakpoint/breakpoint.service';
import { Subscription } from 'rxjs';
import { BreakpointEnum } from '../../models/breakpoint.enum';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { TechStackCollectionComponent } from './tech-stack-collection/tech-stack-collection.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { GreetingComponent } from './greeting/greeting.component';
import { CertificateComponent } from '../certificate/certificate.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    TechStackCollectionComponent,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    GreetingComponent,
    CertificateComponent,
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AboutMeComponent implements OnDestroy {
  currentBreakpoint?: BreakpointEnum;

  readonly breakpointEnum = BreakpointEnum;
  private subscription?: Subscription;
  private readonly breakpointService = inject(BreakpointService);

  constructor() {
    this.subscription = this.breakpointService.activeBreakpoint$.subscribe(
      (breakpoint) => {
        this.currentBreakpoint = breakpoint;
      },
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  getColSize(): number {
    if (
      this.currentBreakpoint === BreakpointEnum.XSmall ||
      this.currentBreakpoint === BreakpointEnum.Small
    ) {
      return 1;
    } else {
      return 4;
    }
  }
}
