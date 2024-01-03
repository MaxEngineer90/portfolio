import { Component } from '@angular/core';
import { GreetingComponent } from '../greeting/greeting.component';
import { TechStackCollectionComponent } from '../tech-stack-collection/tech-stack-collection.component';

@Component({
  selector: 'app-about-me-expanded',
  standalone: true,
  imports: [GreetingComponent, TechStackCollectionComponent],
  templateUrl: './about-me-expanded.component.html',
  styleUrl: './about-me-expanded.component.scss',
})
export class AboutMeExpandedComponent {}
