import { Component, Input } from '@angular/core';
import { IconSource } from '../../../../../models/icon-source';

@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss',
})
export class EntryComponent {
  @Input({ required: true }) entry!: IconSource;
}
