import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { NgForOf } from '@angular/common';
import { IconSource } from '../../../../models/icon-source';
import { EntryComponent } from './entry/entry.component';

@Component({
  selector: 'app-tech-stack-card',
  standalone: true,
  imports: [MatCardModule, MatListModule, NgForOf, EntryComponent],
  templateUrl: './tech-stack-card.component.html',
  styleUrl: './tech-stack-card.component.scss',
})
export class TechStackCardComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) entries!: IconSource[];
}
