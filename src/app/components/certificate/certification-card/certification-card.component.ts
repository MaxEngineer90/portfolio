import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IconSource } from '../../../models/icon-source';
import { BreakpointComponent } from '../../breakpoint/breakpoint.component';
import { BreakpointEnum } from '../../../models/breakpoint.enum';
import { MatDialog } from '@angular/material/dialog';
import { CertificatDialogComponent } from '../certificat-dialog/certificat-dialog.component';

@Component({
  selector: 'app-certification-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './certification-card.component.html',
  styleUrl: './certification-card.component.scss',
})
export class CertificationCardComponent extends BreakpointComponent {
  @Input({ required: true }) source!: IconSource;

  dialog = inject(MatDialog);

  override currentBreakpoint?: BreakpointEnum;
  protected readonly breakpointEnum = BreakpointEnum;

  constructor() {
    super();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CertificatDialogComponent, {
      width: '250px',
      data: {
        /* data passed to dialog */
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
