import { Component } from '@angular/core';
import {
  BreakpointComponent,
  BreakpointEnum,
} from '../utils/breakpoint/breakpoint.component';
import { IconEntry } from '../../models/icon-entry';
import { SkillCardComponent } from './skill-card/skill-card.component';

@Component({
  selector: 'app-skill-collection',
  standalone: true,
  imports: [SkillCardComponent],
  templateUrl: './skill-collection.component.html',
  styleUrl: './skill-collection.component.scss',
})
export class SkillCollectionComponent extends BreakpointComponent {
  readonly path = 'assets/icons/';
  readonly fileType = '.png';
  override currentBreakpoint?: BreakpointEnum;
  breakpointEnum = BreakpointEnum;

  constructor() {
    super();
  }

  readonly frontEndTechStackEntries: IconEntry[] = [
    { name: 'Angular 17', icon: `${this.path}angular${this.fileType}` },
    { name: 'Typescript', icon: `${this.path}typescript${this.fileType}` },
    { name: 'Html', icon: `${this.path}html${this.fileType}` },
    { name: 'Scss', icon: `${this.path}css${this.fileType}` },
  ];
  readonly devOpsTechStackEntries: IconEntry[] = [
    {
      name: 'GitHub Actions',
      icon: `${this.path}github-mark-white${this.fileType}`,
    },
    {
      name: 'Docker',
      icon: `${this.path}docker${this.fileType}`,
    },
    { name: 'Kubernetes', icon: `${this.path}kubernetes${this.fileType}` },
  ];

  readonly backendTechStackEntries: IconEntry[] = [
    { name: 'Java', icon: `${this.path}java${this.fileType}` },
    { name: 'Spring Boot', icon: `${this.path}spring-boot${this.fileType}` },
    { name: 'Postgres SQL', icon: `${this.path}postgres${this.fileType}` },
    { name: 'Junit 5', icon: `${this.path}junit5${this.fileType}` },
    { name: 'Mockito', icon: `${this.path}mockito${this.fileType}` },
  ];

  readonly somethingTechStackEntries: IconEntry[] = [
    { name: 'IntelliJ ide', icon: `${this.path}intellij${this.fileType}` },
    { name: 'Git', icon: `${this.path}git${this.fileType}` },
    { name: 'Chat GPT', icon: `${this.path}chatgpt.jpg` },
    { name: 'Atlassian', icon: `${this.path}atlassian${this.fileType}` },
    { name: 'Keycloak', icon: `${this.path}keyclaok${this.fileType}` },
  ];
}
