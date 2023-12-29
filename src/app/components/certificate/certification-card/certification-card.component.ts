import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IconSource } from '../../../models/icon-source';

@Component({
  selector: 'app-certification-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './certification-card.component.html',
  styleUrl: './certification-card.component.scss',
})
export class CertificationCardComponent {
  @Input({ required: true }) source!: IconSource;
}
