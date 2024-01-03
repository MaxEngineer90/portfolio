import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { MatDialog } from '@angular/material/dialog';
import { CertificatDialogComponent } from '../certificat-dialog/certificat-dialog.component';
import { BreakpointComponent } from '../../../breakpoint/breakpoint.component';
import { IconSource } from '../../../../models/icon-source';
import { BreakpointEnum } from '../../../../models/breakpoint.enum';

@Component({
  selector: 'app-certification-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './certification-card.component.html',
  styleUrl: './certification-card.component.scss',
})
export class CertificationCardComponent extends BreakpointComponent {
  @Input({ required: true }) source!: IconSource;
  @Input({ required: true }) index!: number;
  dialog = inject(MatDialog);

  override currentBreakpoint?: BreakpointEnum;
  protected readonly breakpointEnum = BreakpointEnum;

  constructor() {
    super();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CertificatDialogComponent, {
      width: '100%',
      height: '70%',
      data: {
        index: this.index,
        name: this.source.name,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
