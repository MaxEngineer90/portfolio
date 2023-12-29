import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
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
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
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
export class AboutMeComponent implements OnInit, OnDestroy {
  currentBreakpoint?: BreakpointEnum;

  readonly BreakpointEnum = BreakpointEnum;
  protected readonly breakpointEnum = BreakpointEnum;
  private subscription?: Subscription;
  private readonly breakpointService = inject(BreakpointService);
  private readonly matIconRegistry = inject(MatIconRegistry);
  private readonly domSanitizer = inject(DomSanitizer);

  constructor() {
    this.subscription = this.breakpointService.activeBreakpoint$.subscribe(
      (breakpoint) => {
        this.currentBreakpoint = breakpoint;
      },
    );
  }

  ngOnInit() {
    this.matIconRegistry.addSvgIcon(
      'download_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/download_icon.svg',
      ),
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  getColSize(): number {
    if (
      this.currentBreakpoint === this.breakpointEnum.XSmall ||
      this.currentBreakpoint === BreakpointEnum.Small
    ) {
      return 1;
    } else {
      return 4;
    }
  }
}
