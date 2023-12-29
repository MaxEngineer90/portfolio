import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import * as pdf from 'pdf-poppler';

@Injectable({
  providedIn: 'root',
})
export class PdfThubnailService {
  constructor() {}

  convertToThumbnail(
    pdfFilePath: string,
    outputDir: string,
  ): Observable<string> {
    let opts = {
      format: 'jpeg',
      out_dir: outputDir,
      out_prefix: 'thumbnail',
      page: 1,
    };

    // Konvertierung von Promise zu Observable
    return from(pdf.convert(pdfFilePath, opts));
  }
}
