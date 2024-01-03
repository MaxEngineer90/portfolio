import { Component } from '@angular/core';
import { GreetingComponent } from '../greeting/greeting.component';
import { NgIf } from '@angular/common';
import { TechStackCollectionComponent } from '../tech-stack-collection/tech-stack-collection.component';

@Component({
  selector: 'app-about-me-mobile',
  standalone: true,
  imports: [
    GreetingComponent,
    NgIf,
    TechStackCollectionComponent,
    TechStackCollectionComponent,
  ],
  templateUrl: './about-me-mobile.component.html',
  styleUrl: './about-me-mobile.component.scss',
})
export class AboutMeMobileComponent {}
