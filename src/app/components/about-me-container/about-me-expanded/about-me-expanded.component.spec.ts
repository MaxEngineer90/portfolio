import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeExpandedComponent } from './about-me-expanded.component';

describe('AboutMeExpandedComponent', () => {
  let component: AboutMeExpandedComponent;
  let fixture: ComponentFixture<AboutMeExpandedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeExpandedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMeExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
