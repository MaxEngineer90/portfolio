import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeContainerComponent } from './about-me-container.component';

describe('AboutMeContainerComponent', () => {
  let component: AboutMeContainerComponent;
  let fixture: ComponentFixture<AboutMeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
