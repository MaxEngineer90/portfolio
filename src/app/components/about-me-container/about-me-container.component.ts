import { Component } from '@angular/core';
import { BreakpointEnum } from '../../models/breakpoint.enum';
import { AboutMeMobileComponent } from './about-me-mobile/about-me-mobile.component';
import { NgIf } from '@angular/common';
import { AboutMeExpandedComponent } from './about-me-expanded/about-me-expanded.component';
import { BreakpointComponent } from '../breakpoint/breakpoint.component';
import { CertificateComponent } from '../certificate/certificate.component';

@Component({
  selector: 'app-about-me-container',
  standalone: true,
  imports: [
    AboutMeMobileComponent,
    NgIf,
    AboutMeExpandedComponent,
    CertificateComponent,
  ],
  templateUrl: './about-me-container.component.html',
  styleUrl: './about-me-container.component.scss',
})
export class AboutMeContainerComponent extends BreakpointComponent {
  override currentBreakpoint?: BreakpointEnum;

  constructor() {
    super();
  }

  get isMobileScreen(): boolean {
    return (
      this.currentBreakpoint === BreakpointEnum.XSmall ||
      this.currentBreakpoint === BreakpointEnum.Small
    );
  }
}
