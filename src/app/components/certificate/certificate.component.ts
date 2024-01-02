import { Component } from '@angular/core';
import { CertificationCardComponent } from './certification-card/certification-card.component';
import { NgForOf } from '@angular/common';
import { IconSource } from '../../models/icon-source';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [CertificationCardComponent, NgForOf, MatListModule],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss',
})
export class CertificateComponent {
  readonly path = 'assets/images/thumbnail/';
  readonly fileType = '.png';

  readonly sources: IconSource[] = [
    {
      name: 'Spring Boot (Company)',
      icon: `${this.path}spring-boot${this.fileType}`,
    },
    { name: 'JPA (Company)', icon: `${this.path}jpa${this.fileType}` },
    { name: 'HTML5 & CSS3', icon: `${this.path}html5-css3${this.fileType}` },
    {
      name: 'Java Expert',
      icon: `${this.path}java-expert${this.fileType}`,
    },
    {
      name: 'Reactive Angular',
      icon: `${this.path}reactive-angular${this.fileType}`,
    },
    {
      name: 'spring-boot-rest-api (udemy)',
      icon: `${this.path}spring-boot-rest-api${this.fileType}`,
    },
    {
      name: 'maven',
      icon: `${this.path}maven${this.fileType}`,
    },
  ];
}
