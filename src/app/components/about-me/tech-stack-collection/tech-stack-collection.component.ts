import { Component } from '@angular/core';
import { TechStackCardComponent } from './tech-stack-card/tech-stack-card.component';
import { TechStackEntry } from '../../../models/tech-stack-entry';

@Component({
  selector: 'app-tech-stack-collection',
  standalone: true,
  imports: [TechStackCardComponent],
  templateUrl: './tech-stack-collection.component.html',
  styleUrl: './tech-stack-collection.component.scss',
})
export class TechStackCollectionComponent {
  readonly backendTechStackEntries: TechStackEntry[] = [
    { name: 'Java', icon: '' },
    { name: 'Spring Boot', icon: '' },
    { name: 'SQL', icon: '' },
    { name: 'Junit 5', icon: '' },
    { name: 'Mockito', icon: '' },
  ];

  readonly frontEndTechStackEntries: TechStackEntry[] = [
    { name: 'Angular 17', icon: '' },
    { name: 'Typescript', icon: '' },
    { name: 'Html', icon: '' },
    { name: 'Scss', icon: '' },
  ];

  readonly devOpsTechStackEntries: TechStackEntry[] = [
    { name: 'GitHub actions', icon: '' },
    {
      name: 'Docker',
      icon: '',
    },
    { name: 'Kubernetes', icon: '' },
    { name: 'Keycloak', icon: '' },
  ];
}
