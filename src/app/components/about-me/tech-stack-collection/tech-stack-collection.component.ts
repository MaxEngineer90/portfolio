import { Component } from '@angular/core';
import { TechStackCardComponent } from './tech-stack-card/tech-stack-card.component';
import { IconSource } from '../../../models/icon-source';

@Component({
  selector: 'app-tech-stack-collection',
  standalone: true,
  imports: [TechStackCardComponent],
  templateUrl: './tech-stack-collection.component.html',
  styleUrl: './tech-stack-collection.component.scss',
})
export class TechStackCollectionComponent {
  readonly path = 'assets/icons/';
  readonly fileType = '.png';

  readonly frontEndTechStackEntries: IconSource[] = [
    { name: 'Angular 17', icon: `${this.path}angular${this.fileType}` },
    { name: 'Typescript', icon: `${this.path}typescript${this.fileType}` },
    { name: 'Html', icon: `${this.path}html${this.fileType}` },
    { name: 'Scss', icon: `${this.path}css${this.fileType}` },
  ];
  readonly devOpsTechStackEntries: IconSource[] = [
    {
      name: 'GitHub actions',
      icon: `${this.path}github-mark-white${this.fileType}`,
    },
    {
      name: 'Docker',
      icon: `${this.path}docker${this.fileType}`,
    },
    { name: 'Kubernetes', icon: `${this.path}kubernetes${this.fileType}` },
    { name: 'Keycloak', icon: `${this.path}keyclaok${this.fileType}` },
  ];

  readonly backendTechStackEntries: IconSource[] = [
    { name: 'Java', icon: `${this.path}java${this.fileType}` },
    { name: 'Spring Boot', icon: `${this.path}springboot${this.fileType}` },
    { name: 'Postgres SQL', icon: `${this.path}postgres${this.fileType}` },
    { name: 'Junit 5', icon: `${this.path}junit5${this.fileType}` },
    { name: 'Mockito', icon: `${this.path}mockito${this.fileType}` },
  ];
}
