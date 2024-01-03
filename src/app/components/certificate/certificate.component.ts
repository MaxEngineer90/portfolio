import { Component } from '@angular/core';
import { CertificationCardComponent } from './certification-card/certification-card.component';
import { NgForOf } from '@angular/common';
import { IconSource } from '../../models/icon-source';
import { MatListModule } from '@angular/material/list';
import { BreakpointComponent } from '../breakpoint/breakpoint.component';
import { BreakpointEnum } from '../../models/breakpoint.enum';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [
    CertificationCardComponent,
    NgForOf,
    MatListModule,
    MatTooltipModule,
  ],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss',
})
export class CertificateComponent extends BreakpointComponent {
  readonly path = 'assets/images/thumbnail/';
  readonly fileType = '.png';

  override currentBreakpoint?: BreakpointEnum;
  readonly sources: IconSource[] = [
    { name: 'jpa (gfu)', icon: `${this.path}jpa-gfu${this.fileType}` },

    {
      name: 'spring boot (cegos)',
      icon: `${this.path}spring-boot-cegos${this.fileType}`,
    },

    {
      name: 'reactive angular (udemy)',
      icon: `${this.path}reactive-angular-udemy${this.fileType}`,
    },

    {
      name: 'html 5 & css 3 (udemy)',
      icon: `${this.path}html5-css3-udemy${this.fileType}`,
    },

    {
      name: 'spring boot data jpa (amigoscode)',
      icon: `${this.path}spring-data-jpa-amigoscode${this.fileType}`,
    },

    {
      name: 'spring boot rest api (udemy)',
      icon: `${this.path}spring-boot-2-rest-api-udemy${this.fileType}`,
    },

    {
      name: 'maven (udemy)',
      icon: `${this.path}maven-udemy${this.fileType}`,
    },

    {
      name: ' way to java expert (udemy)',
      icon: `${this.path}java-profi-udemy${this.fileType}`,
    },

    {
      name: 'java-data-structures-and-algorithms (udemy)',
      icon: `${this.path}java-data-structures-and-algorithms${this.fileType}`,
    },
  ];
  protected readonly breakpointEnum = BreakpointEnum;

  constructor() {
    super();
  }
}
