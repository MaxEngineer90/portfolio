import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-certificat-dialog',
  standalone: true,
  imports: [],
  templateUrl: './certificat-dialog.component.html',
  styleUrl: './certificat-dialog.component.scss',
})
export class CertificatDialogComponent {
  name: string = '';
  protected index = 0;
  private readonly path = 'assets/images/certificates/';

  private readonly fileType: string = '.png';
  private imageSource = [
    `${this.path}jpa-gfu${this.fileType}`,
    `${this.path}spring-boot-cegos${this.fileType}`,
    `${this.path}reactive-angular${this.fileType}`,
    `${this.path}html5-css3-udemy${this.fileType}`,
    `${this.path}spring-dta-jpa-amigoscode${this.fileType}`,
    `${this.path}maven${this.fileType}`,
    `${this.path}weg-zum-java-profi${this.fileType}`,
    `${this.path}java-datenstrukturen-und-algorythmen-zertifikat${this.fileType}`,
  ];

  constructor(
    public dialogRef: MatDialogRef<CertificatDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.index = data.index;
    this.name = data.name;
  }

  get image(): string {
    this.index =
      this.index === this.imageSource.length ? this.index - 1 : this.index;
    /* console.log(this.imageSource[this.index]);*/
    return this.imageSource[this.index];
  }

  onClose() {
    this.dialogRef.close();
  }
}
