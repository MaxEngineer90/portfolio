import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatDialogComponent } from './certificat-dialog.component';

describe('CertificatDialogComponent', () => {
  let component: CertificatDialogComponent;
  let fixture: ComponentFixture<CertificatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificatDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
