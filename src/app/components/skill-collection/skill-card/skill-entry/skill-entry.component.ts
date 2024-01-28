import { Component, Input } from '@angular/core';
import { IconEntry } from '../../../../models/icon-entry';

@Component({
  selector: 'app-skill-entry',
  standalone: true,
  imports: [],
  templateUrl: './skill-entry.component.html',
  styleUrl: './skill-entry.component.scss',
})
export class SkillEntryComponent {
  @Input({ required: true }) entry!: IconEntry;
}
