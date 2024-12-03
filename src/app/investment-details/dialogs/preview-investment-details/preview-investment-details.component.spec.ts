import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewInvestmentDetailsComponent } from './preview-investment-details.component';

describe('PreviewInvestmentDetailsComponent', () => {
  let component: PreviewInvestmentDetailsComponent;
  let fixture: ComponentFixture<PreviewInvestmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewInvestmentDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviewInvestmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
