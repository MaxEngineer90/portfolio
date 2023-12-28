import { Component, Input } from '@angular/core';
import { TechStackEntry } from '../../../../../models/tech-stack-entry';

@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss',
})
export class EntryComponent {
  @Input({ required: true }) entry!: TechStackEntry;
}
