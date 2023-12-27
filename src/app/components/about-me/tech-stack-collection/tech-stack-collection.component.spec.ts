import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackCollectionComponent } from './tech-stack-collection.component';

describe('TechStackCollectionComponent', () => {
  let component: TechStackCollectionComponent;
  let fixture: ComponentFixture<TechStackCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechStackCollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechStackCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
