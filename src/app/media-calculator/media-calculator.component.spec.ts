import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCalculatorComponent } from './media-calculator.component';

describe('MediaCalculatorComponent', () => {
  let component: MediaCalculatorComponent;
  let fixture: ComponentFixture<MediaCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
