import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeMobileComponent } from './about-me-mobile.component';

describe('AboutMeMobileComponent', () => {
  let component: AboutMeMobileComponent;
  let fixture: ComponentFixture<AboutMeMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMeMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
