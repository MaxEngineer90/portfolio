import { TestBed } from '@angular/core/testing';

import { PdfThubnailService } from './pdf-thubnail.service';

describe('PdfThubnailService', () => {
  let service: PdfThubnailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfThubnailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
